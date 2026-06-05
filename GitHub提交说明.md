# 📦 GitHub 提交指南

## 🎯 快速开始（推荐）

### 方法一：双击运行批处理脚本（最简单）

1. **确保已安装 Git**
   - 如果没有安装，先下载：https://git-scm.com/downloads
   - 安装后重启电脑

2. **双击运行脚本**
   - 找到项目目录下的 `提交到GitHub.bat`
   - 双击运行

3. **按提示操作**
   - 如果需要输入密码，请使用 GitHub Personal Access Token
   - Token 获取地址：https://github.com/settings/tokens

---

### 方法二：使用 Git Bash / 命令行

如果你习惯用命令行：

```bash
# 进入项目目录
cd "d:\Vibe Coding\MBTI"

# 初始化（如果需要）
git init

# 添加文件
git add .

# 提交
git commit -m "更新题库至72题，优化答题逻辑"

# 连接远程仓库
git remote add origin https://github.com/Peter-li-2077/MBTI2026.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

---

## 🔑 获取 GitHub Token

如果提示需要输入密码，请使用 Personal Access Token：

1. 访问 https://github.com/settings/tokens
2. 点击 **"Generate new token"** → **"Generate new token (classic)"**
3. 勾选 `repo` 权限（完全控制仓库）
4. 点击 **"Generate token"**
5. **重要**：复制生成的 token 并保存（只显示一次！）
6. 当推送提示输入密码时，粘贴这个 token

---

## ✅ 推送成功后

- Netlify 会**自动检测到更新**
- 等待 1-2 分钟，自动重新部署
- 你的站点就更新了！

---

## ❓ 常见问题

### 问题 1：提示 "git不是内部或外部命令"
**解决**：先安装 Git：https://git-scm.com/downloads

### 问题 2：推送时认证失败
**解决**：使用 Personal Access Token 代替密码

### 问题 3：提示 "fatal: remote origin already exists"
**解决**：没关系，这是正常的，继续执行 git push

### 问题 4：提示 "refusing to merge unrelated histories"
**解决**：执行 `git pull origin main --allow-unrelated-histories`，然后再 push

---

## 📝 本次更新内容

- ✅ 更新题库至 72 题
- ✅ 增加题目乱序功能
- ✅ 升级计分算法，支持中立结果
- ✅ 更新修改明细文档
