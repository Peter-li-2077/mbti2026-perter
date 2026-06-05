import { Question, Score } from '../types';

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

  questions.forEach((question, index) => {
    const answer = answers[index];
    if (!answer) return;

    if (answer === 'A') {
      const dimension = question.score_a as keyof typeof score;
      score[dimension]++;
    } else {
      const dimension = question.score_b as keyof typeof score;
      score[dimension]++;
    }
  });

  const BORDER_THRESHOLD = 6;

  const calcDimension = (pos: string, neg: string, posScore: number, negScore: number) => {
    const diff = Math.abs(posScore - negScore);
    if (diff > BORDER_THRESHOLD) {
      return { type: posScore > negScore ? pos : neg, isBorder: false };
    }
    return { type: `${pos}/${neg}`, isBorder: true };
  };

  const ei = calcDimension('E', 'I', score.E, score.I);
  const sn = calcDimension('S', 'N', score.S, score.N);
  const tf = calcDimension('T', 'F', score.T, score.F);
  const jp = calcDimension('J', 'P', score.J, score.P);

  const mbti_type = `${ei.type}${sn.type}${tf.type}${jp.type}`;
  const border_flag = ei.isBorder || sn.isBorder || tf.isBorder || jp.isBorder;

  return {
    ...score,
    mbti_type,
    border_flag,
  };
}

export function validateTest(costSeconds: number, totalQuestions: number = 93): boolean {
  const MIN_TIME = 90;
  return costSeconds >= MIN_TIME;
}
