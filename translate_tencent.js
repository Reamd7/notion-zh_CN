const tencentcloud = require("tencentcloud-sdk-nodejs");
const fs = require("fs");
const axios = require("axios");
const jsdom = require("jsdom");
const packageJSON = require("./package.json")
const new_version = packageJSON.version.split('.');

const TmtClient = tencentcloud.tmt.v20180321.Client;
const clientConfig = {
  credential: {
    secretId: "", // 腾讯云secretId
    secretKey: "", // 腾讯云secretKey
  },
  region: "ap-guangzhou",
  profile: {
    httpProfile: {
      endpoint: "tmt.tencentcloudapi.com",
    },
  },
};

const client = new TmtClient(clientConfig);
async function translate(src) {
  // return {
  //   TargetTextList: src,
  // };
  return client
    .TextTranslateBatch({
      SourceTextList: src,
      Source: "ko",
      Target: "zh",
      ProjectId: 0,
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error("error", err);
    });
}
const prettier = require("prettier");
function writeJSON(fileName, json) {
  if (typeof json === "string") {
    fs.writeFileSync(fileName, prettier.format(json, { parser: "json" }));
  } else if (typeof json === "object") {
    fs.writeFileSync(
      fileName,
      prettier.format(JSON.stringify(json), { parser: "json" })
    );
  }
}

async function timer() {
  const assest = await axios.default.post(
    "https://www.notion.so/api/v3/getAssetsJsonV2",
    {
      hash: "",
    }
  );
  console.log(assest.data.localeHtml);
  const newKr = await jsdom.JSDOM.fromURL(
    "https://www.notion.so" + assest.data.localeHtml["ko-KR"]
  ).then((v) => {
    const res = v.window.document.getElementById("messages").textContent;
    return JSON.parse(res);
  });
  const newZh = await jsdom.JSDOM.fromURL(
    "https://www.notion.so" + assest.data.localeHtml["zh-CN"]
  ).then((v) => {
    const res = v.window.document.getElementById("messages").textContent;
    return JSON.parse(res);
  });

  // 上一次翻译时候的韩文
  const prevKr = require("./kr.json");
  // 上一次翻译的中文
  const cacheZh = require("./zh.json");
  // 现在已经翻译完成的中文缓存

  // 收集器
  const collect = {};
  // 待翻译字段
  const tar = {};
  Object.keys(newKr).forEach((key) => {
    let prevVal = prevKr[key];
    let newVal = newKr[key];
    let zh = newZh[key] || cacheZh[key];
    if (prevVal === newVal) {
      if (zh) {
        collect[key] = zh;
      } else {
        tar[key] = newVal;
      }
    } else {
      tar[key] = newVal;
    }
  });

  const array = Object.entries(tar);
  let start = 0;
  let temp = "";
  fs.writeFileSync("./buffer", "");
  for (let end = start; end < array.length; end += 1) {
    const [_, val] = array[end];
    if ((temp + val).length > 2000 || end === array.length - 1) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const subArray =
            end === array.length - 1
              ? array.slice(start)
              : array.slice(start, end);
          translate(subArray.map((v) => v[1])).then((res) => {
            if (res?.TargetTextList) {
              let buffer = "";
              for (let j = 0; j < subArray.length; j++) {
                // console.log(chalk.greenBright("success:") + subArray[j][0]);
                collect[subArray[j][0]] = res?.TargetTextList[j];
                buffer += `"${subArray[j][0]}":"${res?.TargetTextList[j]}"\n`;
              }
              fs.promises.appendFile("./buffer", buffer);
              resolve();
            } else {
              reject();
            }
          });
        }, 200);
      });
      console.log(start, end);
      temp = val;
      start = end;
    } else {
      temp += val;
    }
  }

  writeJSON("./kr.json", newKr);
  const finalZh = JSON.stringify(
    Object.keys(newKr).reduce((set, key) => {
      // 重新排序
      set[key] = collect[key];
      return set;
    }, {})
  );
  writeJSON("./zh.json", finalZh);

  writeJSON(
    "./kr_zh.json",
    Object.keys(newKr).reduce((set, key) => {
      // 重新排序
      if (!newZh[key]) {
        set[key] = [newKr[key], collect[key]];
      }
      return set;
    }, {})
  );


  new_version[2] = String(Number(new_version[2]) + 1);
  packageJSON.version = new_version.join(".");
  writeJSON("./package.json", packageJSON)

  fs.writeFileSync(
    "./notion-zh_CN.js",
    prettier.format(
      fs
        .readFileSync("./notion-zh_CN.template.js")
        .toString()
        .replace("%zh%", finalZh)
        .replace("%version%", new_version.join(".")),
      {
        parser: "babel",
      }
    )
  );
}

timer();
