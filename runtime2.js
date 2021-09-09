// 基于 script 重载的方案，
(() => {
  try {
    const preferredLocaleStr = window.localStorage.getItem(
      "LRU:KeyValueStore2:preferredLocale"
    );
    const preferredLocale = JSON.parse(preferredLocaleStr);
    if (preferredLocale.value) {
      preferredLocale.value = "zh-CN";
      window.localStorage.setItem(
        "LRU:KeyValueStore2:preferredLocale",
        JSON.stringify(preferredLocale)
      ); // search window.document.querySelector("#messages") 请阅读
    }
  } catch (e) {}

  const root = document.getElementById("notion-app");
  function insert() {
    if (
      root._reactRootContainer &&
      root._reactRootContainer._internalRoot &&
      root._reactRootContainer._internalRoot.current
    ) {
      (function () {
        const Fetch = fetch;
        Fetch(
          "https://cdn.jsdelivr.net/gh/Reamd7/notion-zh_CN@main/notion-zh_CN.js?now=" +
            Date.now()
        ).then(function (rep) {
          rep.text().then(function (val) {
            eval(val); // 执行注入国际化脚本的能力
            // reload app;
            const list = Array.from(document.querySelectorAll("script[src]")).filter(function (
              /** @type {HTMLScriptElement} */ scriptItem
            ){
              return scriptItem.src.includes("www.notion.so")
            });
            let i = 0;
            list.forEach(function (
              /** @type {HTMLScriptElement} */ scriptItem
            ) {
              scriptItem.remove();
              const script_src = scriptItem.src;
              console.log(script_src)
              return Fetch(script_src).then(function (res) {
                res.text().then(function(text) => {
                  eval(text);
                  i += 1;
                  if (i === list.length) {
                    console.log("deviceready");
                    document.dispatchEvent(new Event("deviceready"));
                    document.body.removeChild(iframe);
                  }
                });
              });
            });
          });
        });
        document.dispatchEvent(new Event("deviceready"));
      })();
    } else {
      requestAnimationFrame(() => {
        insert();
      });
    }
  }
  insert();
})();
