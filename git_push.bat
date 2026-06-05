@echo off
chcp 65001 >nul
echo ========================================
echo   MBTI - Git Push Script
echo ========================================
echo.

set GIT=D:\Program Files\Git\bin\git.exe

echo [1] Check Git...
if not exist "%GIT%" (
    echo Git NOT found!
    pause
    exit /b 1
)
echo OK: %GIT%
echo.

cd /d "%~dp0"

echo [2] Check repo...
if not exist ".git" (
    echo Init repo...
    "%GIT%" init
)
echo.

echo [3] Add files...
"%GIT%" add .
echo.

echo [4] Commit...
"%GIT%" commit -m "Update to 72 questions"
echo.

echo [5] Set remote...
"%GIT%" remote get-url origin >nul 2>&1
if errorlevel 1 (
    "%GIT%" remote add origin https://github.com/Peter-li-2077/MBTI2026.git
)
"%GIT%" branch -M main
echo.

echo [6] Push to GitHub...
echo.
echo IMPORTANT: Use GitHub Personal Access Token if asked for password!
echo.
"%GIT%" push -u origin main

if errorlevel 0 (
    echo.
    echo SUCCESS! Check https://github.com/Peter-li-2077/MBTI2026
    echo Netlify will auto deploy.
) else (
    echo.
    echo FAILED to push.
)
echo.
pause
