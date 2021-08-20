// ==UserScript==
// @name         Notion-zh_CN notion的汉化脚本
// @namespace    http://tampermonkey.net/
// @version      %version%
// @description  notion的100%汉化脚本，基于官方中文+机器翻译韩文，支持app版本以及网页油猴，地址：https://github.com/reamd7/notion-zh_CN
// @author       reamd7
// @match        *://www.notion.so/*
// @grant        none
// @run-at       document-start
// @copyright    2021, reamd7
// @license      MIT
// ==/UserScript==
(function () {
  "use strict";

  const script = document.createElement("script");
  script.id = "messages";
  script.type = "application/json";
  script.setAttribute("data-locale", "zh-CN");
  script.text = JSON.stringify(%zh%);

  const routes = document.createElement("script");
  routes.id = "routes";
  routes.type = "application/json";
  routes.setAttribute("data-locale", "zh-CN");
  routes.text = JSON.stringify({});

  try {
    const preferredLocaleStr = window.localStorage.getItem("LRU:KeyValueStore2:preferredLocale")
    const preferredLocale = JSON.parse(preferredLocaleStr);
    if (preferredLocale.value) {
      preferredLocale.value = "zh-CN"
      window.localStorage.setItem("LRU:KeyValueStore2:preferredLocale", JSON.stringify(preferredLocale)) // search window.document.querySelector("#messages") 请阅读
    } 
  } catch (e) {

  }
  var isElectron = "undefined" != typeof global || window.__isElectron;
  if (isElectron) {
    var observer = new MutationObserver(function(callback) {
      if (callback.filter(v => {
        return v.target === document.head;
      }).length > 0) {
        document.head.insertAdjacentElement("afterbegin", script);
        document.head.insertAdjacentElement("afterbegin", routes);
        observer.disconnect()
      }
    });
    observer.observe(document, {
      childList: true,  // 观察目标子节点的变化，是否有添加或者删除
      attributes: false, // 观察属性变动
      subtree: true     // 观察后代节点，默认为 false
    });
  } else {
    function insert() {
      try {
        document.body.appendChild(script);
        document.body.appendChild(routes);
      } catch(e) {
        requestAnimationFrame(()=>{
          insert()
        })
      }
    }
    insert();
  }
})();
