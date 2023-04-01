实现原理：
用mt管理器解包
classdex.dex -> DEX 编辑器++ -> notion.local.id -> NotionWebviewClient -> 搜索到deviceready 行 -> 把字符串替换成android2.min.js (注意保留行前 \n )