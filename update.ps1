Invoke-WebRequest -Uri "https://greasyfork.org/zh-CN/scripts/430116-notion-%E5%AE%8C%E5%85%A8%E4%B8%AD%E6%96%87%E5%8C%96-%E5%9F%BA%E4%BA%8E%E9%9F%A9%E8%AF%AD%E7%89%88%E6%9C%AC-%E4%BD%BF%E7%94%A8%E8%85%BE%E8%AE%AFapi%E6%9C%BA%E7%BF%BB" -OutFile "$HOME\AppData\Local\Programs\Notion\resources\app\renderer\notion-zh_CN.js"[string]$content=Get-Content "$HOME\AppData\Local\Programs\Notion\resources\app\renderer\preload.js"If(!$content.Contains("notion-zh_CN"))
{
Add-Content "$HOME\AppData\Local\Programs\Notion\resources\app\renderer\preload.js" `n'require("./notion-zh_CN")'
}