const tencentcloud = require("tencentcloud-sdk-nodejs");
const fs = require("fs");
const axios = require("axios");
const jsdom = require("jsdom");

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

async function timer() {
  const assest = await axios.default.post("https://www.notion.so/api/v3/getAssetsJsonV2", {
    hash: ""
  });
  console.log(assest.data.localeHtml)
  const prevKr = JSON.parse(fs.readFileSync("./kr.json"));
  const newKr = await jsdom.JSDOM.fromURL("https://www.notion.so" + assest.data.localeHtml['ko-KR']).then(v => {
    const res = (v.window.document.getElementById("messages").textContent)
    fs.writeFileSync("./source_kr.json", res)
    return JSON.parse(res);
  });
  const newZh = await jsdom.JSDOM.fromURL("https://www.notion.so" + assest.data.localeHtml['zh-CN']).then(v => {
    const res = (v.window.document.getElementById("messages").textContent)
    fs.writeFileSync("./source_zh.json", res)
    return JSON.parse(res);
  });
  const cacheZh = JSON.parse(fs.readFileSync("./zh.json"))
  const nowZh = Object.keys(newKr).reduce((set, key) => {
    if (newZh[key]) {
      set[key] = newZh[key];
    } else if (cacheZh[key]) {
      set[key] = cacheZh[key];
    }
    return set;
  }, {});

  // console.log(nowZh);

  const tar = Object.keys(newKr).reduce((set, key) => {
    let prevVal = prevKr[key];
    let newVal = newKr[key];
    if (newVal !== prevVal) {
      set[key] = newVal;
    }
    return set;
  }, {});

  const collect = Object.keys(newKr).reduce((set, key) => {
    let prevVal = prevKr[key];
    let newVal = newKr[key];
    let zhVal = nowZh[key];
    if (newVal === prevVal && zhVal) {
      set[key] = nowZh[key];
    }
    return set;
  }, {});

  const array = Object.entries(tar);
  let start = 0;
  let temp = "";
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
  const prettier = require("prettier");
  fs.writeFileSync(
    "./kr.json",
    prettier.format(JSON.stringify(newKr), { parser: "json" })
  );
  fs.writeFileSync(
    "./zh.json",
    prettier.format(
      JSON.stringify(collect)
        .replace(/\”/g, "”")
        .replace(/\\“/g, "“")
        .replace(/\\’/g, "’")
        .replace(/\\‘/g, "‘"),
      { parser: "json" }
    )
  );
}

timer();
