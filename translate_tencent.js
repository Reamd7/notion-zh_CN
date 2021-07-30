const tencentcloud = require("tencentcloud-sdk-nodejs");
const fs = require("fs");

var tar = require("./kr.json");

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

var collect = {};

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
  fs.appendFileSync("./zh.json", JSON.stringify(collect));
}

timer();
