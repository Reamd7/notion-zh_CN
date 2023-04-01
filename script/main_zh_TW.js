const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const { writeJSON } = require("../util/writeJSON");
const { translate } = require("../util/translate");
const { SyncAssest } = require("../util/syncAssestTW");

const prettier = require("prettier");

async function main() {
  // 重要：补充一个手动收集的英文与中文翻译对照，可以直接修改这部分的东西。
  const en_zh = require("../json/en_zh_tw.json");

  // key => [kr, zh]
  const targetPool = require("../json/kr_zh_tw.json");
  // key => zh_str 关键字
  const fuzzySearchKeywords = require("../json/fuzzySearchKeywords.json");

  // 获取最新的官方中文
  const { newKr, newZh } = await SyncAssest();
  // 现在已经翻译完成的中文缓存
  writeJSON(path.join(__dirname, "../json/cacheZh_tw.json"), newZh);
  writeJSON(path.join(__dirname, "../json/kr_tw.json"), newKr);

  // 收集器
  const collect = {
    ...newZh,
    ...Object.keys(en_zh).reduce((res, key) => {
      res[key] = en_zh[key][1]
      return res;
    }, {}),
    ...fuzzySearchKeywords
  }
  console.log("官方繁体中文条数：",_.size(newZh));
  console.log("繁体中文关键字条数：",_.size(fuzzySearchKeywords));
  console.log("官方韩文条数：",_.size(newKr));
  const offical_zh_key = _.keys(collect);

  // 官方没有翻译的 key
  const office_no_translate = _(newKr).omit(offical_zh_key).pickBy(function(value, key) {
    const cacheTransalte = targetPool[key]
    if (cacheTransalte) {
      const [prevKr, zh] = cacheTransalte;
      /**
       * @type {string}
       */
      const nowKr = value;
      if (prevKr === nowKr) {
        // 不需要翻译了。
        collect[key] = zh;
        return false;
      }
    }
    return true;
  }).commit();
  console.log("翻译缺失条数：",office_no_translate.size());
  console.log(_.size(collect));

  // 待翻译字段
  const array = office_no_translate.entries().valueOf();

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

  // 重新排序
  const finalZh = Object.keys(newKr).reduce((set, key) => {
    set[key] = collect[key];
    return set;
  }, {});
  writeJSON(path.join(__dirname, "../json/zh_tw.json"), finalZh);

  // NOTE: 这里是合理的，kr_zh 就是 diff 官方中文newZh 和 官方韩文newKr
  writeJSON(
    path.join(__dirname, "../json/kr_zh_tw.json"),
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
      path.join(__dirname, "../notion-zh_TW.js"),
      prettier.format(
        fs
          .readFileSync(
            path.join(__dirname, "../template/notion-zh_TW.template.js")
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
