# Git 环境配置完整指南

## 📥 第一步：安装 Git

### Windows 系统安装

#### 方式一：官方安装包（推荐）
1. 访问 Git 官网：https://git-scm.com/downloads
2. 下载 Windows 版本安装包
3. 运行安装程序，使用默认选项一路"Next"
4. 安装完成后重启终端或电脑

#### 方式二：使用包管理器
如果你有包管理器，可以使用：

**使用 Chocolatey：**
```powershell
choco install git
```

**使用 Scoop：**
```powershell
scoop install git
```

---

## 🔧 第二步：配置 Git

安装完成后，打开 PowerShell 或 Git Bash，执行以下配置：

### 1. 设置用户信息
```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

**注意：** 这里的邮箱建议使用你 GitHub 账号绑定的邮箱

### 2. 检查配置
```bash
git config --global --list
```

### 3. 设置默认分支名（可选）
```bash
git config --global init.defaultBranch main
```

---

## 📝 第三步：初始化项目仓库

在你的项目目录下执行：

```bash
# 进入项目目录
cd "d:\Vibe Coding\MBTI"

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建第一次提交
git commit -m "Initial commit: MBTI 93题标准版测评系统"
```

---

## 🔐 第四步：配置 GitHub 认证

### 方式一：使用 Personal Access Token（推荐）

#### 1. 创建 Token
1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 点击 "Generate token"
5. **重要**：复制生成的token并保存（只显示一次！）

#### 2. 连接到 GitHub 仓库
```bash
# 添加远程仓库（将下面的地址替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

当提示输入密码时，粘贴刚才生成的 token。

---

### 方式二：使用 SSH Key（更安全、方便）

#### 1. 生成 SSH Key
```bash
# 生成 SSH Key（一路回车即可）
ssh-keygen -t ed25519 -C "你的邮箱@example.com"
```

#### 2. 查看并复制公钥
```bash
# 查看公钥内容
cat ~/.ssh/id_ed25519.pub
```

#### 3. 添加到 GitHub
1. 访问 https://github.com/settings/keys
2. 点击 "New SSH key"
3. 粘贴刚才复制的公钥内容
4. 点击 "Add SSH key"

#### 4. 使用 SSH 方式连接仓库
```bash
# 添加远程仓库（使用SSH地址）
git remote add origin git@github.com:你的用户名/你的仓库名.git

# 推送代码
git push -u origin main
```

---

## 🚀 快速部署到 Vercel 完整流程

### 1. 在 GitHub 创建新仓库
1. 访问 https://github.com/new
2. 填写仓库名称（如：mbti-test）
3. 选择 Public 或 Private
4. **不要**勾选 "Initialize this repository"
5. 点击 "Create repository"

### 2. 推送代码
```bash
# 初始化（如果还没初始化）
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

### 3. 部署到 Vercel
1. 访问 https://vercel.com
2. 用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择刚才的仓库
5. 点击 "Deploy"
6. 等待 1-2 分钟，完成！

---

## 📋 常用 Git 命令

```bash
# 查看状态
git status

# 查看提交历史
git log

# 添加文件
git add 文件名
git add .  # 添加所有文件

# 提交
git commit -m "提交说明"

# 拉取更新
git pull

# 推送代码
git push

# 创建分支
git branch 分支名

# 切换分支
git checkout 分支名

# 合并分支
git merge 分支名
```

---

## ⚠️ 常见问题

### 问题1：git 命令不识别
**解决**：确保 Git 已安装并重启终端

### 问题2：推送时认证失败
**解决**：使用 Personal Access Token 或 SSH Key

### 问题3：文件过大无法推送
**解决**：在 `.gitignore` 中忽略不必要的文件

---

## 📝 创建 .gitignore 文件

在项目根目录创建 `.gitignore` 文件，添加以下内容：

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Build output
dist/
build/

# Environment
.env
.env.local
.env.production

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

---

## 🎯 下一步

配置完成后：
1. 推送到 GitHub
2. 在 Vercel 中导入项目
3. 分享链接给微信用户！

---

**祝你配置顺利！如有问题请参考官方文档：https://git-scm.com/doc**
