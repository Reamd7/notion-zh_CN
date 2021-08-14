# notion-zh_CN 是什么？

notion-zh_CN 是对notion的汉化脚本。2.0版本支持网页端(油猴脚本)+桌面端。

# 为什么要做这个项目？

官方连机器翻译都不愿意做。

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

以windows为例子：
1. 修改notion 语言为**韩文**。（英文暂时不能汉化）
2. notion 安装目录：`C:\Users\用户名\AppData\Local\Programs\Notion\`

3. 打开`C:\Users\用户名\AppData\Local\Programs\Notion\resources\app\renderer`文件夹

4. 下载 `notion-zh_CN.js` 到上述文件夹（renderer）
5. 打开 `preload.js`
6. 在最后一行加上
   ```js
   //# sourceMappingURL=preload.js.map
    require("./notion-zh_CN") // 添加该行
   ```
7. 


# 大家可以做什么？

1. **优化汉化语言**。都是机器翻译，看到不通畅的句子欢迎提issue/pr直接改了
