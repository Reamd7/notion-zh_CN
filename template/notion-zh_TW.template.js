// ==UserScript==
// @name         Notion-zh_TW notion的汉化脚本
// @namespace    http://tampermonkey.net/
// @version      %version%
// @description  notion的100%汉化脚本，基于官方中文+机器翻译韩文，支持app版本以及网页油猴，地址：https://github.com/reamd7/notion-zh_CN
// @author       reamd7
// @match        *://www.notion.so/*
// @match        *://*.notion.site/*
// @grant        none
// @run-at       document-start
// @copyright    2021, reamd7
// @license      MIT
// ==/UserScript==
(function () {
  "use strict";
  var lang = "zh-TW";

  %zh%;

  const LOCALE_SETUP = (window.LOCALE_SETUP);

  const call = function() {
    Object.defineProperty(window, "LOCALE_SETUP", {
      get() {
        debugger;
        return LOCALE_SETUP
      },
      set() {}
    })
  }
  call();

  function insertMoment() {
    try {
      moment.updateLocale(lang.toLowerCase(), {
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
      });
      moment.locale(lang.toLowerCase())
    } catch (e) {
      requestAnimationFrame(() => {
        insertMoment();
      });
    }
  }
  insertMoment();
  try {
    const preferredLocaleStr = window.localStorage.getItem("LRU:KeyValueStore2:preferredLocale")
    const preferredLocale = JSON.parse(preferredLocaleStr);
    if (preferredLocale.value) {
      preferredLocale.value = lang
      window.localStorage.setItem("LRU:KeyValueStore2:preferredLocale", JSON.stringify(preferredLocale)) // search window.document.querySelector("#messages") 请阅读
    } 
  } catch (e) {}

})();
