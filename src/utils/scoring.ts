import { Question, Score, ScoringResult } from '../types';

// 根据题目区分度设置动态阈值（保留原有函数向后兼容）
const DIMENSION_THRESHOLDS = {
  EI: 8,    // EI维度需要更明显的区分
  SN: 7,    // SN维度适中
  TF: 7,    // TF维度适中
  JP: 6     // JP维度可以稍低
};

// 原有的calculateScore函数保留向后兼容
export function calculateScore(questions: Question[], answers: ('A' | 'B')[]): Score {
  const score: Omit<Score, 'mbti_type' | 'border_flag' | 'answer_id'> = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // 按维度统计题目数量
  const dimensionCount = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
  };

  questions.forEach((question, index) => {
    dimensionCount[question.dim_main]++;
    
    const answer = answers[index];
    if (!answer) return;

    if (answer === 'A') {
      const dimension = question.score_a as keyof typeof score;
      const weight = question.weight_a || 1;
      score[dimension] += weight;
    } else {
      const dimension = question.score_b as keyof typeof score;
      const weight = question.weight_b || 1;
      score[dimension] += weight;
    }
  });

  const calcDimension = (dimKey: string, pos: string, neg: string, posScore: number, negScore: number) => {
    const diff = Math.abs(posScore - negScore);
    const threshold = DIMENSION_THRESHOLDS[dimKey as keyof typeof DIMENSION_THRESHOLDS] || 6;
    if (diff > threshold) {
      return { type: posScore > negScore ? pos : neg, isBorder: false };
    }
    return { type: posScore > negScore ? pos : neg, isBorder: true }; // 即使边界也给出明确类型
  };

  const ei = calcDimension('EI', 'E', 'I', score.E, score.I);
  const sn = calcDimension('SN', 'S', 'N', score.S, score.N);
  const tf = calcDimension('TF', 'T', 'F', score.T, score.F);
  const jp = calcDimension('JP', 'J', 'P', score.J, score.P);

  const mbti_type = `${ei.type}${sn.type}${tf.type}${jp.type}`;
  const border_flag = ei.isBorder || sn.isBorder || tf.isBorder || jp.isBorder;

  return {
    ...score,
    mbti_type,
    border_flag,
  };
}

// 新的计分算法：使用中立阈值，输出ScoringResult
export function calculateScoreWithNeutral(questions: Question[], answers: ('A' | 'B')[]): ScoringResult {
  const score = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // 按维度统计总权重
  const dimensionTotalWeight = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0
  };

  // 首先计算每个维度的总权重
  questions.forEach((question) => {
    const totalWeight = (question.weight_a || 1) + (question.weight_b || 1);
    dimensionTotalWeight[question.dim_main] += totalWeight;
  });

  // 然后计算用户得分
  questions.forEach((question, index) => {
    const answer = answers[index];
    if (!answer) return;

    if (answer === 'A') {
      const dimension = question.score_a as keyof typeof score;
      const weight = question.weight_a || 1;
      score[dimension] += weight;
    } else {
      const dimension = question.score_b as keyof typeof score;
      const weight = question.weight_b || 1;
      score[dimension] += weight;
    }
  });

  // 计算单个维度的类型（带中立判断）
  const calcDimensionWithNeutral = (
    dimKey: keyof typeof dimensionTotalWeight,
    pos: string,
    neg: string,
    posScore: number,
    negScore: number
  ) => {
    const totalWeight = dimensionTotalWeight[dimKey];
    const threshold = totalWeight * 0.1; // 中立阈值为总权重的10%
    const diff = Math.abs(posScore - negScore);
    
    if (diff < threshold) {
      return { [pos]: posScore, [neg]: negScore, type: 'Neutral' };
    }
    
    return { [pos]: posScore, [neg]: negScore, type: posScore > negScore ? pos : neg };
  };

  const ei = calcDimensionWithNeutral('EI', 'E', 'I', score.E, score.I);
  const sn = calcDimensionWithNeutral('SN', 'S', 'N', score.S, score.N);
  const tf = calcDimensionWithNeutral('TF', 'T', 'F', score.T, score.F);
  const jp = calcDimensionWithNeutral('JP', 'J', 'P', score.J, score.P);

  return {
    EI: ei as any,
    SN: sn as any,
    TF: tf as any,
    JP: jp as any
  };
}

export function validateTest(costSeconds: number, totalQuestions: number = 93): boolean {
  const MIN_TIME = 120; // 增加最小答题时间，确保认真作答
  return costSeconds >= MIN_TIME;
}
