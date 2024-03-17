# 注意事项



1. ==强烈建议汉化之前登录账号==

2. 如果汉化后无法启动Notion，双击start-notion.bat脚本启动（一般出现这种情况是未登录账号）

3. 如果你没有登录账号，汉化后的Notion窗口关闭后从任务栏打不开是正常现象，从==桌面打开或者开始菜单打开==![image-20240316184430201](C:\Users\Y\AppData\Roaming\Typora\typora-user-images\image-20240316184430201.png)

4. ==汉化成功后，不要在短时间内再次汉化==

5. ==执行汉化程序时，确保你的后台没有 浏览器和Typora等electron框架软件== 

6. 出现`2024-03-16 20:03:42,153 - ERROR - 热重载操作未成功
   NoneType: None`的原因是网络问题  ==这个问题不要反馈== ，下面是==解决办法==

   1. 尝试再次运行
   2. 手动在Notion窗口按 强制重载`ctrl+shift+r`或 重载`ctrl+r` 出现`C:\Users\你的用户名\AppData\Roaming\Notion\notionAssetCache-v2\latestVersion.json` 之后再次运行汉化程序
   3. 查看https://www.notionfaster.org/获得解决办法，如果电脑打不开，用手机看

7. 出现下面这种情况，重新运行汉化程序即可![image-20240317162022663](C:\Users\Y\AppData\Roaming\Typora\typora-user-images\image-20240317162022663.png)

   ![error](C:\Users\Y\Pictures\Saved Pictures\error.png)

# 更新日志

## 1.0.1

1. 增加了图形窗口
2. 增加了异常错误的日志
   1. 正常执行没有错误日志信息，发生异常后生成 `notion_chinesization_error.log`文件
   2. 路径为./notion_chinesization_error.log
3. 解决了概率程序不运行的bug

## 1.0.2



1. 优化了冗余代码
2. 增加了重试机制
3. 优化了窗口获取逻辑
4. 给出了更为明显的异常信息

# 下载连接



https://share.feijipan.com/s/ciAMoazh

