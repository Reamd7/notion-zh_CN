const axios = require("axios");
// const jsdom = require("jsdom");
const vm = require('vm');
/**
 * 同步最新的资源文件
 * @returns {Promise<{
 *  krScript: string,
 *  zhScript: string,
 *  TwScript: string,
 * }>}
 */
exports.SyncAssestJSScript = async function SyncAssest() {
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

  const assestLocaleSetupJs = assest.data.files.filter(item => {
    return item.path?.startsWith("/localeSetup")
  }).reduce((acc, item) => {
    /** @type {string} */
    const path = item.path;
    const res = path.match(/localeSetup\-([a-zA-Z]{2}\-[a-zA-Z]{2})/)
    if (res) {
      acc[res[1]] = path;
    }
    return acc;
    // localeSetup-zh-CN-17e5e843ce175ab41469722862bf44a1.js
  }, {})
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
      url: "https://www.notion.so" + assestLocaleSetupJs["ko-KR"],
      headers: fetchConfig,
      responseType: 'document'
    }),
    axios.default({
      method: 'get',
      url: "https://www.notion.so" + assestLocaleSetupJs["zh-CN"],
      headers: fetchConfig,
      responseType: 'document'
    }),
    axios.default({
      method: 'get',
      url: "https://www.notion.so" + assestLocaleSetupJs["zh-TW"],
      headers: fetchConfig,
      responseType: 'document'
    }),
  ]).then(([krScript, zhScript, TwScript]) => {

    // 这里是js文件的运行模板，
    // TODO: 之后补充自动解析AST以补充翻译条目的逻辑

    return {
      krScript: krScript.data,
      zhScript: zhScript.data,
      TwScript: TwScript.data
    };
  })
};
