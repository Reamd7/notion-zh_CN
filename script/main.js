const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const { SyncAssestJSScript } = require("../util/SyncAssestJSScript");
const prettier = require("prettier");
const { writeJSON } = require("../util/writeJSON");

async function main() {
  // 获取最新的官方中文
  const { krScript, zhScript, TwScript } = await SyncAssestJSScript();

  if (process.env.env === "BUILD") {
    const packageJSON = require("../package.json");
    const new_version = packageJSON.version.split(".");
    new_version[2] = String(Number(new_version[2]) + 1);
    packageJSON.version = new_version.join(".");

    writeJSON(path.join(__dirname, "../package.json"), packageJSON);

    fs.writeFileSync(
      path.join(__dirname, "../notion-zh_CN.js"),
      prettier.format(
        fs
          .readFileSync(
            path.join(__dirname, "../template/notion-zh_CN.template.js")
          )
          .toString()
          .replace(
            "%zh%",
            zhScript
          )
          .replace("%version%", new_version.join(".")),
        {
          parser: "babel",
        }
      )
    );

    fs.writeFileSync(
      path.join(__dirname, "../notion-zh_TW.js"),
      prettier.format(
        fs
          .readFileSync(
            path.join(__dirname, "../template/notion-zh_TW.template.js")
          )
          .toString()
          .replace(
            "%zh%",
            TwScript
          )
          .replace("%version%", new_version.join(".")),
        {
          parser: "babel",
        }
      )
    );
  }
}

main();
