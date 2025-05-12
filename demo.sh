#!/bin/bash

echo "============================="
echo "[DEBUG] 脚本开始执行"
# 输出当前时间
date "+%Y-%m-%d %H:%M:%S"
echo "Start"

# 验证WebHook参数
# 定义项目名称
projectName="birthdayMiniApp"
echo "[DEBUG] 项目名称：$projectName"

# Git项目配置
echo "[DEBUG] 设置Git配置"

# 确保 .ssh 目录存在
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# 添加 GitHub 的主机密钥
echo "[DEBUG] 添加 GitHub 的主机密钥"
echo "github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==" >> ~/.ssh/known_hosts
chmod 644 ~/.ssh/known_hosts

gitPath="/www/wwwroot/$projectName"
gitHttp="git@github.com:bilibili-niang/birthdayMiniApp.git"

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
    # 添加 -v 参数来显示详细信息
    git clone -v "$gitHttp" . 2>&1 || {
        echo "[DEBUG] 克隆失败的详细错误信息："
        echo "$?"
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