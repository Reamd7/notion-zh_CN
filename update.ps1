Invoke-WebRequest -Uri "https://greasyfork.org/scripts/430116-notion-zh-cn-notion%E7%9A%84%E6%B1%89%E5%8C%96%E8%84%9A%E6%9C%AC/code/Notion-zh_CN%20notion%E7%9A%84%E6%B1%89%E5%8C%96%E8%84%9A%E6%9C%AC.user.js" -OutFile "$HOME\AppData\Local\Programs\Notion\resources\app\renderer\notion-zh_CN.js"
[string]$content=Get-Content "$HOME\AppData\Local\Programs\Notion\resources\app\renderer\preload.js"
If(!$content.Contains("notion-zh_CN"))
{
Add-Content "$HOME\AppData\Local\Programs\Notion\resources\app\renderer\preload.js" `n'require("./notion-zh_CN")'
}
