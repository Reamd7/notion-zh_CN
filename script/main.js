const fs = require("fs");
const path = require("path");
const { writeJSON } = require("../util/writeJSON");
const { translate } = require("../util/translate");
const { SyncAssest } = require("../util/syncAssest");

const prettier = require("prettier");

async function main() {
  // TODO: 资源策略需要考虑
  // 新官方中文 newZh
  // 旧官方中文 prevZh
  // 新官方韩文 newKr
  // 旧官方韩文 prevKr
  // 上一次翻译的中文

  // 获取最新的官方中文
  const { newKr, newZh } = await SyncAssest();
  writeJSON(path.join(__dirname, "../json/cacheZh.json"), newZh);

  writeJSON(path.join(__dirname, "../json/kr.json"), newKr);

  // 上一次翻译时候的韩文
  const prevKr = require("../json/kr.json");
  // 上一次翻译的中文
  const prevZh = require("../json/zh.json");
  // 现在已经翻译完成的中文缓存

  // 收集器
  const collect = {};
  // 待翻译字段
  const tar = {};
  Object.keys(newKr).forEach((key) => {
    let prevVal = prevKr[key];
    let newVal = newKr[key];
    let prevZhVal = prevZh[key];
    let newZhVal = newZh[key];
    let zh = prevZhVal || newZhVal; // 暂时策略，优先历史中文值。
    if (prevVal === newVal) {
      if (zh) {
        collect[key] = zh;
      } else {
        // 基本来说这是不可能的，不应该走到这一步
        tar[key] = newVal;
      }
    } else {
      tar[key] = newVal;
    }
  });

  const array = Object.entries(tar);
  let start = 0;
  let temp = "";
  fs.writeFileSync(path.join(__dirname, "./buffer"), "");
  for (let end = start; end < array.length; end += 1) {
    const [_, val] = array[end];
    if ((temp + val).length > 2000 || end === array.length - 1) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const subArray =
            end === array.length - 1
              ? array.slice(start)
              : array.slice(start, end);
          translate(subArray.map((v) => v[1])).then((res) => {
            if (res?.TargetTextList) {
              let buffer = "";
              for (let j = 0; j < subArray.length; j++) {
                // console.log(chalk.greenBright("success:") + subArray[j][0]);
                collect[subArray[j][0]] = res?.TargetTextList[j];
                buffer += `"${subArray[j][0]}":"${res?.TargetTextList[j]}"\n`;
              }
              fs.promises.appendFile("./buffer", buffer);
              resolve();
            } else {
              reject();
            }
          });
        }, 200);
      });
      console.log(start, end);
      temp = val;
      start = end;
    } else {
      temp += val;
    }
  }

  writeJSON(path.join(__dirname, "../json/kr.json"), newKr);
  const finalZh = Object.keys(newKr).reduce((set, key) => {
    // 重新排序
    set[key] = collect[key];
    return set;
  }, {});
  writeJSON(path.join(__dirname, "../json/zh.json"), finalZh);

  writeJSON(
    path.join(__dirname, "../json/kr_zh.json"),
    Object.keys(newKr).reduce((set, key) => {
      // 重新排序
      if (!newZh[key]) {
        set[key] = [newKr[key], collect[key]];
      }
      return set;
    }, {})
  );

  if (process.env.env === "BUILD") {
    const packageJSON = require("../package.json");
    const new_version = packageJSON.version.split(".");
    new_version[2] = String(Number(new_version[2]) + 1);
    packageJSON.version = new_version.join(".");

    writeJSON(path.join(__dirname, "../package.json"), packageJSON);

    // 注入 中文关键字 json
    const fuzzySearchKeywordsJSON = require(path.join(
      __dirname,
      "../json/fuzzySearchKeywords.json"
    ));

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
            JSON.stringify(
              Object.keys(finalZh).reduce((res, key) => {
                res[key] = finalZh[key];
                if (fuzzySearchKeywordsJSON[key]) {
                  res[key] = fuzzySearchKeywordsJSON[key];
                }
                return res;
              }, {})
            )
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
