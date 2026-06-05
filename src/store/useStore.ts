import { create } from 'zustand';
import { Question, Answer, Score } from '../types';

interface TestState {
  currentStep: number;
  answers: ('A' | 'B')[];
  startTime: number | null;
  score: Score | null;
  hasPaid: boolean;
  shuffledQuestions: Question[]; // 打乱后的题目
  questionShuffleMap: number[]; // 打乱索引映射：shuffledIndex -> originalIndex
  
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
