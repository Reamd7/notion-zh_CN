const kr = require("./kr.json");
const zh = require("./zh.json");
const fs = require("fs");
fs.promises.appendFile(
  "./output.json",
  JSON.stringify(
    Object.keys(zh).reduce(function (res, key) {
      res[kr[key]] = zh[key];
      return res;
    }, {})
  )
);
