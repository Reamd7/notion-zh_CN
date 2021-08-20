/**
 * JSON 格式化写入文件
 */
const prettier = require("prettier");
const fs = require('fs');
/**
 * 
 * @param {string} fileName 
 * @param {string | object} json 
 */
exports.writeJSON = function writeJSON(fileName, json) {
  if (typeof json === "string") {
    fs.writeFileSync(fileName, prettier.format(json, { parser: "json" }));
  } else if (typeof json === "object") {
    fs.writeFileSync(
      fileName,
      prettier.format(JSON.stringify(json), { parser: "json" })
    );
  }
}
