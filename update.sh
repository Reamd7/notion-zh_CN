#!/bin/sh

folder="/Applications/Notion.app/Contents/Resources/app/renderer"
preloadJs="/Applications/Notion.app/Contents/Resources/app/renderer/preload.js"
remoteUrl="https://greasyfork.org/scripts/430116-notion-zh-cn-notion%E7%9A%84%E6%B1%89%E5%8C%96%E8%84%9A%E6%9C%AC/code/Notion-zh_CN%20notion%E7%9A%84%E6%B1%89%E5%8C%96%E8%84%9A%E6%9C%AC.user.js"

if [ -w "/Applications/Notion.app/Contents/Resources/app/renderer/preload.js" ]; then
    curl -# -o "$folder/Notion-zh_CN.js" "$remoteUrl"

    listLine="tail -n 1 $preloadJs"
    if [ "$($listLine)" != "require('./Notion-zh_CN')" ]; then 
      echo "require('./Notion-zh_CN')" >> $preloadJs
    fi
fi
