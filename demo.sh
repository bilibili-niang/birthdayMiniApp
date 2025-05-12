#!/bin/bash

echo "============================="
echo "[DEBUG] 脚本开始执行"
# 输出当前时间
date "+%Y-%m-%d %H:%M:%S"
echo "Start"

# 验证WebHook参数
echo "[DEBUG] 检查参数"
echo "WebHook参数：$1"
if [ -z "$1" ]; then
    echo "错误：缺少项目参数"
    echo "End"
    exit 1
fi

# 严格验证项目名称
if [ "$1" != "birthdayMiniApp" ]; then
    echo "错误：无效的项目名称，应为 'birthdayMiniApp'"
    echo "End"
    exit 1
fi

# Git项目配置
echo "[DEBUG] 设置Git配置"
gitPath="/www/wwwroot/$1"
gitHttp="https://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:x-oauth-basic@github.com/bilibili-niang/birthdayMiniApp.git"

echo "[DEBUG] Web站点路径：$gitPath"
echo "[DEBUG] Git URL：$gitHttp"

# 如果目录不存在则创建
echo "[DEBUG] 检查目录是否存在：$gitPath"
if [ ! -d "$gitPath" ]; then
    echo "[DEBUG] 该项目路径不存在"
    echo "[DEBUG] 尝试新建项目目录"
    mkdir -p "$gitPath" || {
        echo "错误：创建目录失败"
        echo "End"
        exit 1
    }
fi

# 切换到项目目录
echo "[DEBUG] 尝试切换到目录：$gitPath"
cd "$gitPath" || {
    echo "错误：无法切换到项目目录"
    echo "End"
    exit 1
}

# 初始化或更新git仓库
echo "[DEBUG] 检查是否存在.git目录"
if [ ! -d ".git" ]; then
    echo "[DEBUG] .git目录不存在，开始克隆"
    echo "[DEBUG] 执行: git clone $gitHttp ."
    git clone "$gitHttp" . || {
        echo "错误：Git克隆失败"
        echo "End"
        exit 1
    }
else
    # 获取最新代码并重置到master分支
    echo "[DEBUG] 仓库已存在，开始更新"
    echo "[DEBUG] 执行: git fetch origin"
    git fetch origin || {
        echo "错误：Git fetch失败"
        echo "End"
        exit 1
    }
    
    git reset --hard origin/master || {
        echo "错误：Git reset失败"
        echo "End"
        exit 1
    }
    
    git pull || {
        echo "错误：Git pull失败"
        echo "End"
        exit 1
    }
fi

# 设置目录权限
echo "设置目录权限"
chown -R www:www "$gitPath" || {
    echo "错误：设置权限失败"
    echo "End"
    exit 1
}

echo "End"
exit 0