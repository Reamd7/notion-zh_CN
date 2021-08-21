const main =
  "C:/Users/Gemini/AppData/Roaming/Notion/notionAssetCache-v2/23.9.2.7/assets";

const fs = require("fs");
const path = require("path");
const { writeJSON } = require("../util/writeJSON");

const searchInclude = fs
  .readdirSync(main)
  .filter((v) => v.includes(".js"))
  .map((v) => fs.readFileSync(path.join(main, v)).toString());
/**
 *
 * @param {string} key
 * @returns
 */
const includes = (key) => {
  if (!key.includes("fuzzySearchKeyword")) return false;

  for (const content of searchInclude) {
    let index = content.indexOf(key);
    if (index > -1) {
      const range = content.substr(index - 500, 1000);

      const res =
        range.match(new RegExp(`id:\"${key}\",defaultMessage:\"(.*?)\"`)) ||
        range.match(
          new RegExp(
            `id:\"${key}\",description:\".*?\",defaultMessage:\"(.*?)\"`
          )
        ) ||
        range.match(new RegExp(`defaultMessage:\"(.*?)\",id:\"${key}\"`));
      return [res ? res[1] : range];
    }
  }
  return false;
};
const { pinyin } = require('pinyin-pro');
const kr_zh = require(path.join(__dirname, "../json/zh.json"));
const dict = {};
Object.keys(kr_zh).forEach((key) => {
  const str = includes(key);
  const zhList = kr_zh[key].split(" ").map(v => {
    const py = pinyin(v, {
      toneType: "none",
      type: "array"
    })
    return [v, py.join(""), py.join("'")]
  }).flat(2).join(" ");
  if (!key.includes("fuzzySearchKeyword")) return ;
  if (str) {
    dict[key] = Array.from(new Set(`${str} ${zhList}`.split(' '))).join(" ");
  } else {
    console.log(key)
    dict[key] = Array.from(new Set(`${zhList}`.split(' '))).join(" ");
  }
});

writeJSON(path.join(__dirname, "../json/fuzzySearchKeywords.json"), dict);
