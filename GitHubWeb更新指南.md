# 📋 GitHub Web 界面更新指南

## 🎯 快速开始

由于当前环境无法使用 Git，请在浏览器中直接操作：

### 步骤 1：打开你的仓库
访问：https://github.com/Peter-li-2077/MBTI2026

---

## 📁 需要更新的文件列表

按以下顺序逐个更新文件：

| 序号 | 文件路径 | 操作 |
|------|---------|------|
| 1 | `src/data/questions.ts` | ⭐ 完全替换 |
| 2 | `src/store/useStore.ts` | 完全替换 |
| 3 | `src/pages/Test.tsx` | 完全替换 |
| 4 | `src/pages/Payment.tsx` | 完全替换 |
| 5 | `src/utils/scoring.ts` | 完全替换 |
| 6 | `src/types.ts` | 完全替换 |
| 7 | `修改明细.md` | 完全替换 |

---

## 📝 如何在 GitHub 中更新文件

### 对每个文件执行以下操作：

1. **在 GitHub 仓库中找到该文件**
2. **点击右上角的 ✏️ Edit this file 按钮**
3. **删除所有原有内容**
4. **粘贴新内容（下面我为你准备好了）**
5. **在页面底部填写提交信息：
   - **Commit message：** `更新题库至72题，优化答题逻辑`
   - **Extended description（可选）：** 
     ```
     - 更新题库至72题
     - 增加题目乱序功能
     - 升级计分算法，支持中立结果
     - 更新修改明细文档
     ```
6. **点击 Commit changes 按钮**

---

## 📄 文件内容

下面是每个文件的完整内容，请复制粘贴：

---

### 文件 1: src/data/questions.ts

[查看本地文件](file:///d:/Vibe%20Coding/MBTI/src/data/questions.ts)

**内容太长，建议直接复制本地文件内容**

---

### 文件 2: src/store/useStore.ts

```typescript
import { create } from 'zustand';
import { Question, Answer, Score } from '../types';

interface TestState {
  currentStep: number;
  answers: ('A' | 'B')[];
  startTime: number | null;
  score: Score | null;
  hasPaid: boolean;
  shuffledQuestions: Question[];
  questionShuffleMap: number[];
  
  setCurrentStep: (step: number) => void;
  setAnswer: (index: number, answer: 'A' | 'B') => void;
  setStartTime: (time: number) => void;
  setScore: (score: Score) => void;
  setHasPaid: (hasPaid: boolean) => void;
  setShuffledQuestions: (questions: Question[], shuffleMap: number[]) => void;
  resetTest: () => void;
}

export const useStore = create<TestState>((set) => ({
  currentStep: 0,
  answers: [],
  startTime: null,
  score: null,
  hasPaid: false,
  shuffledQuestions: [],
  questionShuffleMap: [],
  
  setCurrentStep: (step) => set({ currentStep: step }),
  setAnswer: (index, answer) => set((state) => {
    const newAnswers = [...state.answers];
    newAnswers[index] = answer;
    return { answers: newAnswers };
  }),
  setStartTime: (time) => set({ startTime: time }),
  setScore: (score) => set({ score }),
  setHasPaid: (hasPaid) => set({ hasPaid }),
  setShuffledQuestions: (questions, shuffleMap) => set({ 
    shuffledQuestions: questions,
    questionShuffleMap: shuffleMap
  }),
  resetTest: () => set({
    currentStep: 0,
    answers: [],
    startTime: null,
    score: null,
    shuffledQuestions: [],
    questionShuffleMap: [],
  }),
}));
```

---

### 文件 3: src/pages/Test.tsx

[查看本地文件](file:///d:/Vibe%20Coding/MBTI/src/pages/Test.tsx)

**建议直接复制本地文件内容**

---

### 文件 4: src/pages/Payment.tsx

[查看本地文件](file:///d:/Vibe%20Coding/MBTI/src/pages/Payment.tsx)

**建议直接复制本地文件内容**

---

### 文件 5: src/utils/scoring.ts

[查看本地文件](file:///d:/Vibe%20Coding/MBTI/src/utils/scoring.ts)

**建议直接复制本地文件内容**

---

### 文件 6: src/types.ts

[查看本地文件](file:///d:/Vibe%20Coding/MBTI/src/types.ts)

**建议直接复制本地文件内容**

---

### 文件 7: 修改明细.md

[查看本地文件](file:///d:/Vibe%20Coding/MBTI/修改明细.md)

**建议直接复制本地文件内容**

---

## ✅ 完成更新后

- 所有文件更新完成后
- Netlify 会**自动检测到更新**
- 等待 1-2 分钟，自动重新部署
- 你的网站就更新了！

---

## 💡 提示

- 可以从你的本地项目文件夹中直接打开这些文件复制全部内容
- 操作有问题随时告诉我！
