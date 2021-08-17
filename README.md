# notion-zh_CN 是什么？

notion-zh_CN 是对notion的汉化脚本。2.0版本支持网页端(油猴脚本)+桌面端。

# 为什么要做这个项目？

官方连机器翻译都不愿意做。

# 更新日志：

- 2.0.3：支持切换到韩文之后帮助文档还原到默认英文版本
- 2.0.1：支持mac客户端（英文）
- 2.0.0: 支持win客户端（韩文） + 油猴脚本

# 如何使用?

## 网页端
1. ### 安装油猴插件
    此处提供搜索到知乎的一篇教程：https://zhuanlan.zhihu.com/p/128453110
  
2. ### 安装油猴脚本
    打开链接：https://greasyfork.org/zh-CN/scripts/430116-notion-%E5%AE%8C%E5%85%A8%E4%B8%AD%E6%96%87%E5%8C%96-%E5%9F%BA%E4%BA%8E%E9%9F%A9%E8%AF%AD%E7%89%88%E6%9C%AC-%E4%BD%BF%E7%94%A8%E8%85%BE%E8%AE%AFapi%E6%9C%BA%E7%BF%BB 。然后点击安装。
    
3. ### 体验汉化效果
    https://www.notion.so

## 桌面端
**手动注入：**

### windows
> 缺点：route 跳转是韩文的 helper

1. 修改notion 语言为**韩文**。（英文暂时不能**触发**汉化）
2. notion 安装目录：`C:\Users\用户名\AppData\Local\Programs\Notion\`

3. 打开`C:\Users\用户名\AppData\Local\Programs\Notion\resources\app\renderer`文件夹

4. 下载 `notion-zh_CN.js` 到上述文件夹（renderer）
5. 打开 `preload.js`
6. 在最后一行加上
   ```js
   //# sourceMappingURL=preload.js.map
    require("./notion-zh_CN") // 添加该行
   ```
7. 重启

### Mac （2.0.1临时办法）

> 使用2.0.0版本，只有系统语言设置为韩文才生效，但是这个方法改动太大，
网页端 以及 windows 端，能够**100% 汉化**，指的是**时间显示也有国际化的能力**，点击所有更新的时间轴中就能看出来，点击？悬浮按钮也能看到。
2.0.1 版本的 mac 汉化方法，很抱歉暂时没找到时间国际化的能力，所以希望使用的语言是英文。能够更熟悉时间国际化的格式。

1. 打开Finder，应用程序，右键`notion.app`，显示应用包内容
2. 修改notion 语言为**英文**。
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

# 大家可以做什么？

1. **优化汉化语言**。都是机器翻译，看到不通畅的句子欢迎提issue/pr直接改了
2. 为什么windows需要使用韩文才能触发汉化
3. Mac 上有没有相对简单的办法也有时间国际化的能力
   > 我猜，有办法用electron的命令行主动指定--lang，从而使得2.0.0版本的方式生效
