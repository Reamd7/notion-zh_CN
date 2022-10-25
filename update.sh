#!/bin/sh

folder="/Applications/Notion.app/Contents/Resources/app/renderer"
preloadJs="$folder/preload.js"
remoteUrl="https://cdn.jsdelivr.net/gh/Reamd7/notion-zh_CN@master/update.sh"

if [ -w "$preloadJs" ]; then
    curl -L -# -o "$folder/notion-zh_CN.js" "$remoteUrl"
    listLine=$(tail -n 1 "$preloadJs") 
    if [ "$listLine" != "require(\"./notion-zh_CN\")" ]; then 
      echo "require(\"./notion-zh_CN\")" >> "$preloadJs"
    fi
fi
