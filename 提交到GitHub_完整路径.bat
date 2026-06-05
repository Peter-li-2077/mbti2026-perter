@echo off
chcp 65001 >nul
echo ========================================
echo   MBTI 项目 - 使用完整路径的 Git 脚本
echo ========================================
echo.

set GIT_PATH=D:\Program Files\Git\bin\git.exe

echo [1/6] 检查 Git 是否存在...
if not exist "%GIT_PATH%" (
    echo ? 错误: Git 未找到
    echo    预期路径: %GIT_PATH%
    pause
    exit /b 1
)
echo ? Git 已找到: %GIT_PATH%
echo.

cd /d "%~dp0"

echo [2/6] 检查仓库状态...
if not exist ".git" (
    echo ?? 初始化 Git 仓库...
    "%GIT_PATH%" init
    if errorlevel 1 (
        echo ? 初始化失败
        pause
        exit /b 1
    )
)
echo.

echo [3/6] 添加文件...
"%GIT_PATH%" add .
echo.

echo [4/6] 提交更改...
"%GIT_PATH%" commit -m "更新题库至72题，优化答题逻辑" -m "- 更新题库至72题" -m "- 增加题目乱序功能" -m "- 升级计分算法，支持中立结果" -m "- 更新修改明细文档"
echo.

echo [5/6] 检查远程仓库...
"%GIT_PATH%" remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo ?? 添加远程仓库...
    "%GIT_PATH%" remote add origin https://github.com/Peter-li-2077/mbti2026-perter
)
"%GIT_PATH%" branch -M main
echo.

echo [6/6] 推送到 GitHub...
echo.
echo ========================================
echo   ??  重要提示
echo ========================================
echo   如果提示输入密码，请使用：
echo   1. GitHub Personal Access Token
echo   2. 创建地址: https://github.com/settings/tokens
echo   3. 请勾选 repo 权限
echo ========================================
echo.

"%GIT_PATH%" push -u origin main

if errorlevel 0 (
    echo.
    echo ? 成功！代码已推送到 GitHub！
    echo    访问: https://github.com/Peter-li-2077/mbti2026-perter
    echo.
    echo    Netlify 会自动检测到更新并重新部署！
) else (
    echo.
    echo ? 推送失败
    echo.
    echo ?? 解决方案：
    echo    1. 检查网络连接
    echo    2. 确认 GitHub 账号和 Token 正确
    echo    3. 如果是首次推送，可能需要先执行：
    echo       "%GIT_PATH%" pull origin main --allow-unrelated-histories
)

echo.
pause
