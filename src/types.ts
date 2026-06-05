export interface Question {
  q_id: number;
  title: string;
  dim_main: 'EI' | 'SN' | 'TF' | 'JP';
  opt_a: string;
  score_a: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  opt_b: string;
  score_b: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Answer {
  answer_id?: string;
  user_id?: string;
  ans_arr: ('A' | 'B')[];
  create_time?: Date;
  cost_sec: number;
  is_valid?: boolean;
}

export interface Score {
  answer_id?: string;
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
  mbti_type: string;
  border_flag: boolean;
}

export interface MBTIReport {
  type: string;
  name: string;
  subtitle?: string;
  description: string;
  personalityTraits: string;
  lifeKeywords: { title: string; description: string }[];
  strengths: { title: string; description: string }[];
  weaknesses: { title: string; description: string }[];
  rarity: { rank: number; total: number; male: number; female: number };
  representativePeople: { name: string; description: string }[];
  career: string[];
  relationships: string;
  
  // 新增字段：动漫风格图片URL
  animeImageUrl?: string;
  
  // 新增字段：代表人物图片
  representativePeopleImages?: { name: string; imageUrl: string }[];
  
  // 新增字段：本土化描述
  localizedDescription?: {
    personalityTraits: string;
    lifeKeywords: { title: string; description: string }[];
    strengths: { title: string; description: string }[];
    weaknesses: { title: string; description: string }[];
    advancedGuide: { title: string; content: string }[];
  };
  
  // 进阶指南
  advancedGuide: {
    title: string;
    content: string;
  }[];
  
  // 八维解读
  eightDimensional: {
    dominant: { name: string; description: string };
    auxiliary: { name: string; description: string };
    tertiary: { name: string; description: string };
    inferior: { name: string; description: string };
  };
  
  // 职业探索
  careerExploration: {
    personality: {
      strengths: { title: string; content: string };
      weaknesses: { title: string; content: string };
    };
    teamMember: {
      usual: string[];
      shouldKnow: string[];
    };
    teamLeader: string[];
    suitableWorkEnv: {
      title: string;
      content: string;
    }[];
    unsuitableWorkEnv: {
      title: string;
      content: string;
    }[];
    recommendedCareers: {
      title: string;
      content: string;
    }[];
    avoidedCareers: {
      title: string;
      content: string;
    }[];
  };
  
  // 恋爱分析
  loveAnalysis: {
    loveStyle: string;
    loveFeatures: string[];
    loveStatus: {
      ideal: string;
      attention: string;
      growth: string;
    };
    loveMatch: {
      type: string;
      compatibility: string;
      description: string;
    }[];
  };
}
