!(function () {
  const Fetch = function (src) {
    return fetch(src).then(function (rep) {
      return rep.text();
    });
  };
  Fetch(
    "https://cdn.jsdelivr.net/gh/Reamd7/notion-zh_CN@main/notion-zh_CN.js?now=" +
      Date.now()
  ).then(function (val) {
    eval(val);
    const toRemove = document
      .querySelectorAll("#notion-app, body > textarea")
      .forEach(function (item) {
        document.body.removeChild(item);
      });
    const root = document.createElement("div");
    root.setAttribute("id", "notion-app");
    document.body.appendChild(root);
    const list = Array.from(document.querySelectorAll("script[src]")).filter(
      function (scriptItem) {
        return scriptItem.src.includes("www.notion.so");
      }
    );
    let i = 0;
    list.forEach(function (scriptItem) {
      const script_src = scriptItem.src;
      console.log(script_src);
      return Fetch(script_src).then(function (text) {
        eval(text);
        i += 1;
        if (i === list.length) {
          function insert() {
            console.log("deviceready insert");
            root._reactRootContainer
              ? requestAnimationFrame(function () {
                  insert();
                })
              : document.dispatchEvent(new Event("deviceready"));
          }
          console.log("deviceready");
          insert();
        }
      });
    });
  });
})();
