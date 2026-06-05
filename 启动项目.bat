@echo off
echo ====================================
echo     MBTI 测试项目启动
echo ====================================
echo.
echo [1/2] 正在安装依赖...
call npm install
if errorlevel 1 (
    echo 依赖安装失败！
    pause
    exit /b 1
)

echo.
echo [2/2] 正在启动开发服务器...
echo.
call npm run dev
pause
