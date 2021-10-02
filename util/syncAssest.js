const axios = require("axios");
const jsdom = require("jsdom");

/**
 * 同步最新的资源文件
 * @returns {Promise<{
 *  newKr: Record<string, string>,
 *  newZh: Record<string, string>
 * }>}
 */
exports.SyncAssest = async function SyncAssest() {
  const assest = await axios.default.post(
    "https://www.notion.so/api/v3/getAssetsJsonV2",
    {
      hash: "",
    },
    {
      timeout: 10000000
    }
  ).catch(e => {
    console.log(e)
  });
  console.log(assest.data.localeHtml);
  return Promise.all([
    jsdom.JSDOM.fromURL(
      "https://www.notion.so" + assest.data.localeHtml["ko-KR"]
    ).then((v) => {
      const res = v.window.document.getElementById("messages").textContent;
      return JSON.parse(res);
    }),
    jsdom.JSDOM.fromURL(
      "https://www.notion.so" + assest.data.localeHtml["zh-CN"]
    ).then((v) => {
      const res = v.window.document.getElementById("messages").textContent;
      return JSON.parse(res);
    }),
  ]).then(([newKr, newZh]) => {
    return {
      newKr,
      newZh,
    };
  });
};
