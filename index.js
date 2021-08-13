const axios = require("axios");
const jsdom = require("jsdom");

axios.default.post("https://www.notion.so/api/v3/getAssetsJsonV2", {
    hash: ""
}).then(v => {
    console.log(v.data.localeHtml, v.data.localeHtml['ko-KR']);
    const KrDom = jsdom.JSDOM.fromURL("https://www.notion.so" + v.data.localeHtml['ko-KR']).then(v => {
        const newKr = JSON.parse(v.window.document.getElementById("messages").textContent)
        console.log(newKr)
    });
    const zhDom = jsdom.JSDOM.fromURL("https://www.notion.so" + v.data.localeHtml['zh-CN']).then(v => {
        const newZh = console.log(v.window.document.getElementById("messages").textContent)
        console.log(newZh)
    });
});

