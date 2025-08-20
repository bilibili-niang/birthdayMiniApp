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

# 自动获取并添加 GitHub 的主机密钥
echo "[DEBUG] 自动扫描并添加 GitHub 的主机密钥"
ssh-keyscan github.com >> ~/.ssh/known_hosts
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
    
    # 获取默认分支名称
    defaultBranch=$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')
    echo "[DEBUG] 默认分支：$defaultBranch"
    
    git reset --hard "origin/$defaultBranch" || {
        echo "错误：Git reset失败"
        echo "End"
        exit 1
    }
    
    echo "[DEBUG] 拉取分支：$defaultBranch"
    git pull origin "$defaultBranch" || {
        echo "错误：Git pull失败"
        echo "End"
        exit 1
    }
fi

# ==================================================================
# 构建和部署前端项目
# ==================================================================
echo "[DEBUG] 开始构建和部署前端项目"

# 定义前端和后端路径
frontendPath="admin/project"
backendStaticPath="koa-typeScript-sequlize-swagger/src/static/views"

# 切换到前端项目目录
echo "[DEBUG] 切换到目录: $gitPath/$frontendPath"
cd "$frontendPath" || {
    echo "错误：无法切换到 $frontendPath 目录"
    echo "End"
    exit 1
}

# 准备 Node 与 pnpm 环境（兼容宝塔面板的非交互Shell）
echo "[DEBUG] 初始化 nvm 与 pnpm 环境"
echo "[DEBUG] 当前执行用户: $(id -u -n), HOME: $HOME"

# 自动探测 NVM_DIR 并加载 nvm.sh
detect_and_load_nvm() {
  local candidates=(
    "$HOME/.nvm"
    "/root/.nvm"
    "/usr/local/nvm"
    "/opt/nvm"
    "/www/server/nvm"
    "/home/www/.nvm"
  )
  for dir in "${candidates[@]}"; do
    if [ -s "$dir/nvm.sh" ]; then
      export NVM_DIR="$dir"
      . "$dir/nvm.sh"
      [ -s "$dir/bash_completion" ] && . "$dir/bash_completion"
      echo "[DEBUG] 已加载 nvm: $dir"
      return 0
    fi
  done
  return 1
}

detect_and_load_nvm || echo "[WARN] 未找到 nvm.sh，请确认已安装 nvm"

# 使用更兼容老系统的 Node 版本（如 CentOS7）
if command -v nvm >/dev/null 2>&1; then
  nvm use --delete-prefix v16.20.2 >/dev/null 2>&1 || nvm install v16.20.2
else
  echo "[WARN] nvm 不可用，继续使用系统内的 node（若版本不兼容请安装 nvm）"
fi
hash -r

# 确保可用 pnpm（优先 corepack，其次 npm 全局）
if ! command -v pnpm >/dev/null 2>&1; then
  corepack enable || true
  corepack prepare pnpm@8.15.8 --activate || npm i -g pnpm@8.15.8
fi

# 将全局 bin 加入 PATH，避免找不到 pnpm
if command -v npm >/dev/null 2>&1; then
  export PATH="$(npm bin -g):$PATH"
fi
hash -r

# 切换更稳的 npm 源（可根据需要移除）
npm config set registry https://registry.npmmirror.com >/dev/null 2>&1 || true

# 打印版本确认
echo "[DEBUG] Node 版本: $(command -v node >/dev/null 2>&1 && node -v || echo '未找到')"
echo "[DEBUG] pnpm 版本: $(command -v pnpm >/dev/null 2>&1 && pnpm -v || echo '未找到')"
[ -x "$(command -v pnpm)" ] || { echo "错误：pnpm 未就绪"; echo "End"; exit 1; }

# 安装依赖
echo "[DEBUG] 执行: pnpm install"
pnpm install || {
    echo "错误：pnpm install 失败"
    echo "End"
    exit 1
}

# 打包项目
echo "[DEBUG] 执行: pnpm build"
pnpm build || {
    echo "错误：pnpm build 失败"
    echo "End"
    exit 1
}

# 移动打包后的文件到后端目录
echo "[DEBUG] 移动打包文件到 $gitPath/$backendStaticPath"
# 确保目标目录存在
mkdir -p "../../$backendStaticPath"
# 首先清空目标目录的内容
echo "[DEBUG] 清空目标目录: ../../$backendStaticPath/"
rm -rf "../../$backendStaticPath/"*
# 移动新文件
echo "[DEBUG] 移动 dist/* 到 ../../$backendStaticPath/"
mv -f dist/* "../../$backendStaticPath/" || {
    echo "错误：移动文件失败"
    echo "End"
    exit 1
}

# 返回项目根目录
echo "[DEBUG] 返回项目根目录"
cd ../../ || {
    echo "错误：无法返回项目根目录"
    echo "End"
    exit 1
}

# 设置目录权限
echo "设置目录权限"
chown -R www:www "$gitPath" || {
    echo "错误：设置权限失败"
    echo "End"
    exit 1
}

echo "End"
exit 0