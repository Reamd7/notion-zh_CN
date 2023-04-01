/**
 * 核心机器翻译文件
 */
const tencentcloud = require("tencentcloud-sdk-nodejs");
const fs = require("fs");
const path = require("path");
const TmtClient = tencentcloud.tmt.v20180321.Client;
const credential__dir = path.join(__dirname, "./credential.json");
const clientConfig = {
  credential: fs.existsSync(credential__dir)
    ? require(credential__dir)
    : {
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
/**
 * @param {string[]} src 待翻译;
 * @returns
 */
exports.translate = async function translate(src) {
  // return {
  //   TargetTextList: src,
  // };
  return client
    .TextTranslateBatch({
      SourceTextList: src,
      Source: "ko",
      Target: "zh-TW",
      ProjectId: 0,
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error("error", err);
    });
};
