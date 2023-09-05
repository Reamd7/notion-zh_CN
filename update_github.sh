#!/bin/sh
export ALL_PROXY="http://127.0.0.1:7890"

folder="/Applications/Notion.app/Contents/Resources/app/renderer"
preloadJs="/Applications/Notion.app/Contents/Resources/app/renderer/preload.js"
remoteUrl="https://raw.githubusercontent.com/Reamd7/notion-zh_CN/main/notion-zh_CN.js"

if [ -w "/Applications/Notion.app/Contents/Resources/app/renderer/preload.js" ]; then
    curl -# -o "$folder/Notion-zh_CN.js" "$remoteUrl"

    listLine="tail -n 1 $preloadJs"
    if [ "$($listLine)" != "require('./Notion-zh_CN')" ]; then 
      echo "require('./Notion-zh_CN')" >> $preloadJs
    fi
fi
