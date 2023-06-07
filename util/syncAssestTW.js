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
  const assest = await axios.default({
    method: 'post',
    url: 'https://www.notion.so/api/v3/getAssetsJsonV2',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({
      "hash": ""
    })
  }).catch(e => {
    console.log(e)
  });
  console.log(assest.data.localeHtml);
  const fetchConfig = { 
    'authority': 'www.notion.so', 
    'if-modified-since': 'Tue, 06 Jun 2023 22:49:53 GMT', 
    'if-none-match': 'W/"4b79efc8d01ace001fb68165f049cf0d"', 
    'sec-fetch-user': '?1', 
    'upgrade-insecure-requests': '1', 
    'Cache-Control': 'no-cache'
  }
  return Promise.all([
    axios.default({
      method: 'get',
      url: "https://www.notion.so" + assest.data.localeHtml["ko-KR"],
      headers: fetchConfig
    }),
    axios.default({
      method: 'get',
      url: "https://www.notion.so" + assest.data.localeHtml["zh-TW"],
      headers: fetchConfig
    }),
  ]).then(([krHtml, zhHtml]) => {
    const newKr = jsdom.JSDOM.fragment(krHtml.data);
    const newZh = jsdom.JSDOM.fragment(zhHtml.data)
    return {
      newKr: JSON.parse(newKr.getElementById("messages").textContent),
      newZh: JSON.parse(newZh.getElementById("messages").textContent),
    };
  })
};

