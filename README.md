<<<<<<< HEAD
# MBTI 性格测试系统

一个完整的 MBTI 性格测试 Web 应用，包含 93 道专业题目、付费解锁功能和详细的结果报告。

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **状态管理**：Zustand
- **路由**：React Router DOM
- **图表库**：Recharts
- **图标库**：Lucide React

## 功能特性

1. **首页**：吸引人的英雄区域、功能介绍、MBTI 四维度说明
2. **测试页面**：93 道题目、进度展示、答题计时
3. **支付页面**：付费解锁完整报告（含演示模式）
4. **结果页面**：详细的性格分析、雷达图展示、职业建议、情感指南

## 项目结构

```
MBTI/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # 首页
│   │   ├── Test.tsx          # 测试页面
│   │   ├── Payment.tsx       # 支付页面
│   │   └── Result.tsx        # 结果页面
│   ├── data/
│   │   ├── questions.ts      # 93 道题目数据
│   │   └── reports.ts        # 16 种人格报告
│   ├── store/
│   │   └── useStore.ts       # Zustand 状态管理
│   ├── utils/
│   │   └── scoring.ts        # 计分逻辑
│   ├── types.ts              # TypeScript 类型定义
│   ├── App.tsx               # 主应用组件
│   ├── main.tsx              # 入口文件
│   └── index.css             # 全局样式
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── index.html
```

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000`

### 3. 构建生产版本

```bash
npm run build
```

## 如何发布到微信

### 微信小程序

1. 使用 Taro 或 UniApp 进行跨平台开发
2. 或者使用云开发构建小程序版本

### 微信公众号

1. 部署到 Web 服务器
2. 在公众号菜单或文章中添加链接
3. 配置微信支付（如果需要实际收费功能）

## 注意事项

- 当前支付功能为演示模式，实际使用需要对接微信支付或支付宝
- 建议添加用户系统和历史记录存储（使用 Firebase/Supabase）
- 可以添加分享功能和社交功能
- 免责声明：本测试仅供参考，不作为心理诊断依据

## 下一步改进

- 添加后端 API 和数据库
- 接入实际支付系统
- 添加用户认证和数据持久化
- 优化移动端体验
- 添加更多 MBTI 相关内容和测试

## License

MIT
=======
# MBTI2026
>>>>>>> 4b9e001d54d37ba2477162de2397f8546e7d1b22
