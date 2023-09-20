#!/bin/bash

# 设置要检查的根目录
root_directory="c:/Users/pp/Desktop/cocos-editor-scripting/resources/3d/engine/"

# 找到所有的 .ts 文件
ts_files=$(find "$root_directory" -type f -name "*.ts" -not -path "*/node_modules/*")

# 遍历每个 .ts 文件并运行 ESLint
for file in $ts_files; do
  echo "Running ESLint on $file"
  npx eslint "$file" --fix # 使用你的 ESLint 配置文件和选项
done

echo "ESLint 检查完成"