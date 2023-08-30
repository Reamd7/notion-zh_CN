# 安卓版本已经更新，请使用更新版本

# notion-zh_CN 是什么？

notion-zh_CN 是对notion的汉化脚本。

> 风险提示：使用 cloudflare worker 的同学，被官方检测出来并封号与我无关，希望自己看明白代码做了什么，以及为什么会被检测出来。
> 其他方式的，都是使用官方国际化方案进行国际化的，而且在本地进行操作不通过任何服务器——理论上除非故意钓鱼否则不会封你。
> 钓鱼：主动收集你是不是用了中文版国际化字段，而且，对比你并没有中文版权限。
> 
> 如果担心有问题，可以等待官方中文版，可以稍微学习网页开发，可以询问网页开发朋友，项目都是开源的。究竟做了什么操作，对notion 应用本体有什么影响，没有理由的担心只能体现对别人的不信任。
> 
> 该项目仅用于学习，如有侵权24h内会马上删除。

## 功能

- 支持 网页端 ( 油猴脚本 ) + 桌面端 ( win / mac ) + 安卓端 汉化脚本

- （很久没有维护）提供cloudflare worker 版本代理 notion.so 域名
   这是一个**平台无关**（IOS 上的safari也能直接使用）的汉化方式，只要你自己部署cloudflare worker，就可以使用。附带cf代理**加速**的能力。
   > 其实这里应该可以做域名映射到notion.so的访问的。(从而实现全平台汉化)

# 为什么要做这个项目？

Notion 已经有了中文语料，让用户能够提前使用中文语料

# 更新日志：
- 2.4.17 notion2.1.23更新，插件重构翻译逻辑`window.LOCALE_SETUP={locale: "ja-JP", messages: {…}, routes: {…}}`
- 2.4.13 日常语料更新 + 安卓版本更新 + 繁体中文补充
- 2.4.2 **翻译开始跟随着官方中文词条啦!!!!!**
- 2.4.1 支持 ios / macos user script
- 2.3.1 权衡后，安卓版本使用新的 runtime 注入方式，实现全部的（包括键盘都能够汉化的方式）但有首页白屏事件较长的问题。
- 2.3.0 支持使用 cloudflare worker 进行代理 notion.so 域名进行加速及国际化
- 2.2.0 支持 安卓版本notion，与官方版共存 的汉化！
- 2.1.0：支持中文版快捷命令！支持拼音输入的时候显示快捷命令！
  ![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/205477fc-c9df-48f2-a816-50c8809f244b/%E6%97%A0%E6%A0%87%E9%A2%98.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210821T053807Z&X-Amz-Expires=86400&X-Amz-Signature=916007db665a09560b8cde53c10480377a1f58eed05a57f99853496dfb6c8729&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E6%2597%25A0%25E6%25A0%2587%25E9%25A2%2598.png%22)
- 2.0.4: 彻底支持无论是默认英文还是韩文都会生效的汉化脚本（2021/08/19 油猴剧本 + win 客户端 + mac 客户端测试通过），统一 win mac 网页端实现。
- 2.0.3：支持切换到韩文之后帮助文档还原到默认英文版本
- 2.0.1：支持mac客户端（英文）
- 2.0.0: 支持win客户端（韩文） + 油猴脚本

# 如何使用?

网页端 以及 windows 端，能够**100% 汉化**，指的是**时间显示也有国际化的能力**，点击所有更新的时间轴中就能看出来，点击？悬浮按钮也能看到。

## 网页端
1. ### 安装油猴插件
    此处提供搜索到知乎的一篇教程：https://zhuanlan.zhihu.com/p/128453110
  
2. ### 安装油猴脚本
    打开链接：https://greasyfork.org/zh-CN/scripts/430116-notion-%E5%AE%8C%E5%85%A8%E4%B8%AD%E6%96%87%E5%8C%96-%E5%9F%BA%E4%BA%8E%E9%9F%A9%E8%AF%AD%E7%89%88%E6%9C%AC-%E4%BD%BF%E7%94%A8%E8%85%BE%E8%AE%AFapi%E6%9C%BA%E7%BF%BB 。然后点击安装。
    
3. ### 体验汉化效果
    https://www.notion.so

## 桌面端
### windows
#### 手动注入
1. （自**2.0.4**版本后，任意语言都等价于中文了）
2. notion 安装目录：`C:\Users\用户名\AppData\Local\Programs\Notion\`
3. 打开`C:\Users\用户名\AppData\Local\Programs\Notion\resources\app\renderer`文件夹
4. 下载 `notion-zh_CN.js` 到上述文件夹（renderer）
5. 打开 `preload.js`
6. 在最后一行添加
   ```js
   //# sourceMappingURL=preload.js.map
   require("./notion-zh_CN") // 添加该行
   ```
7. 重启

#### 自动导入
上述操作也可以使用 PowerShell 命令来完成。  
  命令执行完成后，在 Notion 中使用 <kbd>CTRL</kbd>+<kbd>R</kbd> 可以热更新界面。
   ```powershell
   Invoke-WebRequest -Uri "https://github.com/Reamd7/notion-zh_CN/releases/latest/download/notion-zh_CN.js" -OutFile "$HOME\AppData\Local\Programs\Notion\resources\app\renderer\notion-zh_CN.js"
   Add-Content "$HOME\AppData\Local\Programs\Notion\resources\app\renderer\preload.js" 'require("./notion-zh_CN")'
   ```

### Mac 
#### 手动注入
1. 打开Finder，应用程序，右键`notion.app`，显示应用包内容
2. （自2.0.4版本后，任意语言都等价于中文了）
3. 打开 Notion.app\Contents\Resources\app\renderer\
4. 下载 `notion-zh_CN.js` 到上述文件夹（renderer）
5. 打开 `preload.js`
6. 在最后一行加上
   ```js
   //# sourceMappingURL=preload.js.map
   require("./notion-zh_CN") // 添加该行
   ```
7. 重启
 
只是 同样打开 Notion.app\Contents\Resources\app\renderer\ 即可。。（安装包显示有同样目录结构）

#### 自动导入
终端输入以下代码即可
```bash
curl -o- -L https://github.com/Reamd7/notion-zh_CN/raw/main/update.sh | bash -s
```
若响应时间过长则可以选择以下命令使用gitee仓库
```bash
curl -o- -L https://gitee.com/hubzyy/notion-zh_CN/raw/main/update.sh | bash -s
```

## cloudflare worker

> 不建议使用。不希望推广。有风险。你需要知道你在干什么。

1. 首页：https://workers.cloudflare.com
2. 注册，登陆，`Start building`，取一个子域名，`Create a Worker`。
3. 复制 [worker.js](https://github.com/Reamd7/notion-zh_CN/blob/main/worker.js) 到左侧代码框，修改
   ```js
   const BaseUrl = "xxxx.子域名.workers.dev" // 修改为自己的子域名
   ```
4. `Save and deploy`。如果正常，右侧应显示提示框：
   Mismatch between origin and baseUrl (dev).
   好的（这里就证明汉化成功了）
   
6. 以后可直接访问 `https://xxxx.子域名.workers.dev`。

## 安卓端

- 下载apk：[https://github.com/Reamd7/notion-zh_CN/blob/main/apk/Notion_0.6.1122.beta(7122)_zh_cn.apk](https://github.com/Reamd7/notion-zh_CN/blob/main/apk/Notion_0.6.1122.beta(7122)_zh_cn.apk)

# 大家可以做什么？

1. **优化汉化语言**。都是机器翻译，看到不通畅的句子欢迎提issue/pr直接改了 （修改 **`json/zh.json`** 文件，了解之前，先找到原有的英文，韩文对照一下再更新翻译。）
2. **修复bug和改进功能**。如果你发现了任何bug或者有任何改进的意见，请在issue中提出。如果你有能力修复bug或者改进功能，请提交PR。
3. **测试和反馈**。我们需要您的帮助来测试汉化后的软件是否正常工作。如果您在使用过程中发现了任何问题，请在issue中提出。
4. **分享和推广**。如果您认为这个汉化项目很棒，请分享给你的朋友们。您可以在社交媒体上分享这个项目，也可以在其他社区中推广这个项目。
5. **贡献代码**。如果您是一名开发者，欢迎加入我们的开发团队。您可以在github上提交PR，或者联系我们加入开发团队。

# 呼吁：
我们鼓励提高付费率，以支持您钟爱的软件发展壮大。这将使国内市场受到更多重视，而不仅仅是依赖免费使用、购买淘宝或使用教育账户。珍惜您所支持的产品，共同助力其不断进步。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Reamd7/notion-zh_CN&type=Date)](https://star-history.com/#Reamd7/notion-zh_CN&Date)
