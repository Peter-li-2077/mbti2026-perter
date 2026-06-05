import { MBTIReport } from '../types';

export const reports: Record<string, MBTIReport> = {
  "ISTJ": {
    type: "ISTJ",
    name: "物流师",
    subtitle: "检查员",
    description: "安静、严肃，通过全面性和可靠性获得成功。注重实际，实事求是，现实，有责任感。决定事情时会很有条理，循序渐进地进行。重视传统和忠诚。",
    personalityTraits: "ISTJ是安静、严肃、可靠的人。他们注重实际，实事求是，有责任感，做决定时有条理，重视传统和忠诚。",
    lifeKeywords: [
      { title: "踏实可靠", description: "是值得信赖的伙伴，做事认真负责，让人放心。" },
      { title: "有条有理", description: "喜欢有秩序的生活，做事有条不紊，遵循既定流程。" },
      { title: "重视传统", description: "尊重并维护传统价值观，喜欢稳定和可预测性。" }
    ],
    strengths: [
      { title: "务实可靠", description: "注重事实和细节，做事认真负责，值得信赖。" },
      { title: "组织能力强", description: "善于建立秩序和流程，让事情井井有条。" },
      { title: "责任感强", description: "对自己的承诺负责，会全力以赴完成任务。" },
      { title: "细心谨慎", description: "关注细节，做事周全，避免出错。" }
    ],
    weaknesses: [
      { title: "过于固执", description: "有时可能过于坚持传统，难以接受新变化。" },
      { title: "不够灵活", description: "在应对意外情况时可能显得不够变通。" },
      { title: "情感表达不足", description: "可能不太善于表达自己的情感和感受。" }
    ],
    rarity: { rank: 6, total: 11.6, male: 14.2, female: 8.9 },
    representativePeople: [
      { name: "钟南山", description: "中国工程院院士" },
      { name: "屠呦呦", description: "诺贝尔医学奖获得者" },
      { name: "乔治·华盛顿", description: "美国国父" }
    ],
    career: ["审计员", "会计", "律师助理", "数据库管理员", "军官", "法官"],
    relationships: "在感情中是稳定可靠的伴侣，喜欢有规律的生活，对关系认真负责，重视承诺和忠诚。",
    
    // 新增字段
    animeImageUrl: "https://images.unsplash.com/photo-1617791160505-6f00504e342e?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "钟南山", imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop" },
      { name: "屠呦呦", imageUrl: "https://images.unsplash.com/photo-1559839734-2b08b9a43273?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ISTJ是严谨踏实、值得信赖的人。他们重视传统和秩序，做事认真负责，言出必行。注重实际，不喜欢花哨，喜欢按规矩办事，是团队中最可靠的后盾。",
      lifeKeywords: [
        { title: "踏实可靠", description: "是值得信赖的伙伴，做事认真负责，让人放心" },
        { title: "有条有理", description: "喜欢有秩序的生活，做事有条不紊，遵循既定流程" },
        { title: "重视传统", description: "尊重并维护传统价值观，喜欢稳定和可预测性" }
      ],
      strengths: [
        { title: "务实可靠", description: "注重事实和细节，做事认真负责，值得信赖" },
        { title: "组织能力强", description: "善于建立秩序和流程，让事情井井有条" },
        { title: "责任感强", description: "对自己的承诺负责，会全力以赴完成任务" },
        { title: "细心谨慎", description: "关注细节，做事周全，避免出错" }
      ],
      weaknesses: [
        { title: "过于固执", description: "有时可能过于坚持传统，难以接受新变化" },
        { title: "不够灵活", description: "在应对意外情况时可能显得不够变通" },
        { title: "情感表达不足", description: "可能不太善于表达自己的情感和感受" }
      ],
      advancedGuide: [
        { title: "拥抱变化", content: "学会接受新事物和变化，不要总是坚持过去的方式" },
        { title: "学习表达情感", content: "更多地表达自己的情感和感受，让他人更好地理解你" },
        { title: "学会灵活变通", content: "在需要时能够调整计划和方法，不要过于固执" },
        { title: "发展创造力", content: "尝试用创新的方式思考和解决问题" }
      ]
    },
    advancedGuide: [
      { title: "拥抱变化", content: "学会接受新事物和变化，不要总是坚持过去的方式。" },
      { title: "学习表达情感", content: "更多地表达自己的情感和感受，让他人更好地理解你。" },
      { title: "学会灵活变通", content: "在需要时能够调整计划和方法，不要过于固执。" },
      { title: "发展创造力", content: "尝试用创新的方式思考和解决问题。" }
    ],
    eightDimensional: {
      dominant: { name: "内倾感觉 (Si)", description: "ISTJ的主导功能是Si，使他们善于收集和利用过去的经验。他们重视传统和稳定，有很好的记忆力，关注细节和事实。" },
      auxiliary: { name: "外倾思考 (Te)", description: "Te帮助ISTJ组织和规划外部世界，高效地完成任务。他们善于建立秩序和系统，以实际的方式达成目标。" },
      tertiary: { name: "内倾情感 (Fi)", description: "Fi是ISTJ的第三功能，发展时能让他们有更坚定的个人价值观和对他人的关怀。" },
      inferior: { name: "外倾直觉 (Ne)", description: "Ne作为弱势功能，是ISTJ需要发展的领域，能够帮助他们看到更多可能性和创新的方式。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "踏实可靠、注重细节", content: "ISTJ认真负责，注重事实和细节，善于建立秩序和流程，是组织中不可或缺的稳定力量。" },
        weaknesses: { title: "可能过于保守、缺乏灵活性", content: "ISTJ有时可能过于坚持传统和规则，对新变化持怀疑态度，不够灵活变通。" }
      },
      teamMember: {
        usual: [
          "认真负责，按时高质量地完成任务。",
          "关注细节，确保工作准确无误。",
          "遵循规则和流程，维持团队秩序。",
          "提供稳定可靠的支持。"
        ],
        shouldKnow: [
          "学会接受新的工作方式和变化。",
          "不要过度批评创新的想法。",
          "尝试从不同角度看问题。",
          "给新方法一些时间和耐心。"
        ]
      },
      teamLeader: [
        "建立清晰的规则和流程。",
        "确保团队成员理解期望。",
        "以身作则，认真负责。",
        "注重质量和准确性。"
      ],
      suitableWorkEnv: [
        { title: "结构清晰、规则明确", content: "ISTJ喜欢有明确规则和流程的工作环境。" },
        { title: "稳定可预测", content: "需要稳定的工作环境和明确的职业发展路径。" },
        { title: "注重质量和准确性", content: "适合能够发挥细节关注能力的工作。" }
      ],
      unsuitableWorkEnv: [
        { title: "混乱无序、缺乏规则", content: "无法忍受混乱和没有明确流程的环境。" },
        { title: "频繁变化、不稳定", content: "不喜欢频繁的变化和不确定性。" },
        { title: "要求快速创新但缺乏基础", content: "不适合只追求速度而不重质量的环境。" }
      ],
      recommendedCareers: [
        { title: "审计员/会计", content: "能够发挥对细节和准确性的重视。" },
        { title: "律师助理/法律顾问", content: "注重规则和事实，适合法律相关工作。" },
        { title: "数据库管理员/IT管理员", content: "善于建立和维护系统和秩序。" },
        { title: "军官/公务员", content: "稳定、有规则、有责任感的工作。" },
        { title: "银行/金融从业者", content: "注重准确性和风险管理。" }
      ],
      avoidedCareers: [
        { title: "快速变化的创业环境", content: "过于不稳定和不可预测的环境不适合。" },
        { title: "需要频繁创新的创意工作", content: "如果工作要求频繁打破常规，ISTJ可能感到不适。" },
        { title: "缺乏明确规则的环境", content: "没有明确规则和期望的工作会让ISTJ感到不安。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在感情中是稳定可靠的伴侣，喜欢有规律的生活，对关系认真负责，重视承诺和忠诚。",
      loveFeatures: ["重视承诺和忠诚", "喜欢稳定和规律", "用行动表达关心", "认真负责的态度"],
      loveStatus: {
        ideal: "与务实可靠的伴侣建立稳定的关系，一起规划未来",
        attention: "不要过于固执，学会接受一些变化和惊喜",
        growth: "学习表达情感，不只是用行动来关心对方"
      },
      loveMatch: [
        { type: "ESFJ", compatibility: "95%", description: "温暖可靠的组合，都重视传统和责任，能够建立稳定和谐的家庭。" },
        { type: "ISFJ", compatibility: "90%", description: "互补的组合，ISFJ的温暖能够软化ISTJ的严肃，共同创造温馨的生活。" },
        { type: "ESTJ", compatibility: "85%", description: "同样务实的组合，能够一起把生活安排得井井有条。" }
      ]
    }
  },
  "ISFJ": {
    type: "ISFJ",
    name: "守卫者",
    subtitle: "守护者",
    description: "安静、友好、有责任心和良知。坚定地致力于完成他们的义务。忠诚，体贴，替人着想。注重他人的需求。",
    personalityTraits: "ISFJ是安静、友好、有责任感的人。他们忠诚体贴，替人着想，总是把他人的需求放在心上，是温暖可靠的守护者。",
    lifeKeywords: [
      { title: "温暖守护", description: "像温暖的守护者一样，关心照顾身边的人。" },
      { title: "体贴入微", description: "非常关注他人的感受和需求，总是默默付出。" },
      { title: "忠诚可靠", description: "对家人和朋友极其忠诚，是值得信赖的伙伴。" }
    ],
    strengths: [
      { title: "体贴关怀", description: "善于关心他人，总能注意到别人的需要。" },
      { title: "有责任心", description: "认真负责，会尽心尽力完成自己的义务。" },
      { title: "耐心细致", description: "做事细心，有耐心，能够处理繁琐的事务。" },
      { title: "忠诚可靠", description: "对重视的人非常忠诚，是可靠的朋友和伴侣。" }
    ],
    weaknesses: [
      { title: "过度付出", description: "可能过于照顾他人而忽视自己的需求。" },
      { title: "难以拒绝", description: "不善于拒绝别人，容易让自己负担过重。" },
      { title: "过于谦虚", description: "可能过于谦虚，不太善于表达自己的成就。" }
    ],
    rarity: { rank: 3, total: 12.3, male: 8.0, female: 16.6 },
    representativePeople: [
      { name: "袁隆平", description: "杂交水稻之父" },
      { name: "张桂梅", description: "华坪女高校长" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "袁隆平", imageUrl: "https://images.unsplash.com/photo-1622279457481-cbc0e51e6f18?w=200&h=200&fit=crop" },
      { name: "张桂梅", imageUrl: "https://images.unsplash.com/photo-1598550475666-6a6ff29e5931?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ISFJ是温暖贴心、默默奉献的人。他们关心他人，善于照顾人，总是把别人的需求放在心上。忠诚可靠，是值得托付的人。",
      lifeKeywords: [
        { title: "温暖守护", description: "像温暖的守护者一样，关心照顾身边的人" },
        { title: "体贴入微", description: "非常关注他人的感受和需求，总是默默付出" },
        { title: "忠诚可靠", description: "对家人和朋友极其忠诚，是值得信赖的伙伴" }
      ],
      strengths: [
        { title: "体贴关怀", description: "善于关心他人，总能注意到别人的需要" },
        { title: "有责任心", description: "认真负责，会尽心尽力完成自己的义务" },
        { title: "耐心细致", description: "做事细心，有耐心，能够处理繁琐的事务" },
        { title: "忠诚可靠", description: "对重视的人非常忠诚，是可靠的朋友和伴侣" }
      ],
      weaknesses: [
        { title: "过度付出", description: "可能过于照顾他人而忽视自己的需求" },
        { title: "难以拒绝", description: "不善于拒绝别人，容易让自己负担过重" },
        { title: "过于谦虚", description: "可能过于谦虚，不太善于表达自己的成就" }
      ],
      advancedGuide: [
        { title: "学会关爱自己", content: "不要总是把他人的需求放在第一位，也要关注自己的需要" },
        { title: "学会说\"不\"", content: "学会拒绝不合理的请求，保护自己的时间和精力" },
        { title: "看到自己的价值", content: "不要过于谦虚，要认识到自己的贡献和价值" },
        { title: "接受变化", content: "生活中总会有变化，学会适应和接受新的事物" }
      ]
    },
    career: ["护士", "教师", "社会工作者", "行政助理", "医疗保健工作者"],
    relationships: "是体贴温暖的伴侣，重视和谐，愿意为对方付出，创造温馨和谐的家庭氛围。",
    advancedGuide: [
      { title: "学会关爱自己", content: "不要总是把他人的需求放在第一位，也要关注自己的需要。" },
      { title: "学会说\"不\"", content: "学会拒绝不合理的请求，保护自己的时间和精力。" },
      { title: "看到自己的价值", content: "不要过于谦虚，要认识到自己的贡献和价值。" },
      { title: "接受变化", content: "生活中总会有变化，学会适应和接受新的事物。" }
    ],
    eightDimensional: {
      dominant: { name: "内倾感觉 (Si)", description: "ISFJ的主导功能是Si，使他们能够很好地记住过去的经验，关注细节，重视传统和稳定。" },
      auxiliary: { name: "外倾情感 (Fe)", description: "Fe帮助ISFJ敏感地感知他人的情感需要，关心照顾他人，维持和谐的氛围。" },
      tertiary: { name: "内倾思考 (Ti)", description: "Ti是ISFJ的第三功能，发展时能让他们更客观地分析问题，建立自己的内在逻辑。" },
      inferior: { name: "外倾直觉 (Ne)", description: "Ne作为弱势功能，是ISFJ需要发展的领域，能帮助他们看到更多可能性。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "体贴关怀、认真负责", content: "ISFJ非常善于照顾他人，做事认真负责，是组织中温暖而可靠的存在。" },
        weaknesses: { title: "可能过度付出、难以拒绝", content: "ISFJ可能过于迁就他人而忽视自己的需求，不善于拒绝他人的请求。" }
      },
      teamMember: {
        usual: [
          "关心团队和谐和成员的感受。",
          "认真负责，默默做好自己的工作。",
          "注意细节，确保工作不出差错。",
          "愿意帮助需要帮助的同事。"
        ],
        shouldKnow: [
          "不要过度承担不属于自己的工作。",
          "学会表达自己的需求和困扰。",
          "不要过于在意别人的评价。",
          "重视自己的价值和贡献。"
        ]
      },
      teamLeader: [
        "创造温暖和谐的团队氛围。",
        "关注每个团队成员的需求。",
        "以身作则，认真负责。",
        "给团队成员支持和鼓励。"
      ],
      suitableWorkEnv: [
        { title: "温暖和谐的环境", content: "ISFJ喜欢能够关心和帮助他人的工作环境。" },
        { title: "稳定有保障", content: "需要稳定的工作环境和明确的工作内容。" },
        { title: "能够帮助他人", content: "适合能够直接帮助和服务他人的工作。" }
      ],
      unsuitableWorkEnv: [
        { title: "冷漠功利的环境", content: "过于强调竞争和效率的环境不适合。" },
        { title: "频繁动荡的环境", content: "不稳定的工作环境会让ISFJ感到焦虑。" },
        { title: "缺乏人文关怀的工作", content: "只重效率不重人的工作不适合。" }
      ],
      recommendedCareers: [
        { title: "护士/医疗工作者", content: "能够直接帮助和照顾他人，是ISFJ非常适合的职业。" },
        { title: "教师/教育工作者", content: "关心学生，有耐心，适合教育行业。" },
        { title: "社工/社区工作者", content: "帮助有需要的人群，能够发挥ISFJ的关怀特质。" },
        { title: "行政助理/办公室管理", content: "细心负责，善于组织和协调。" },
        { title: "客服/客户服务", content: "善于与人沟通，能够提供温暖的服务。" }
      ],
      avoidedCareers: [
        { title: "高压力的销售竞赛", content: "过于强调业绩和竞争的工作不适合。" },
        { title: "需要频繁社交的工作", content: "过多的社交活动会让内向的ISFJ感到疲惫。" },
        { title: "缺乏人文关怀的工作", content: "只重效率不重人的工作不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "是体贴温暖的伴侣，重视和谐，愿意为对方付出，创造温馨和谐的家庭氛围。",
      loveFeatures: ["体贴入微的关怀", "重视家庭和谐", "默默付出的爱", "忠诚可靠"],
      loveStatus: {
        ideal: "与珍惜自己付出的伴侣建立温馨的家庭",
        attention: "不要总是默默付出，让对方知道你的需要",
        growth: "学会为自己着想，不要把所有精力都放在他人身上"
      },
      loveMatch: [
        { type: "ESTJ", compatibility: "95%", description: "完美互补，ESTJ的决断力能够保护ISFJ的温柔，共同创造稳定的生活。" },
        { type: "ISTJ", compatibility: "90%", description: "同样重视传统和责任，能够建立稳定可靠的关系。" },
        { type: "ESFP", compatibility: "85%", description: "ESFP的活力能够给ISFJ带来快乐和新鲜感。" }
      ]
    }
  },
  "INFJ": {
    type: "INFJ",
    name: "提倡者",
    subtitle: "提倡者",
    description: "坚持原则，富有洞察力。寻求思想、关系和物质财产的意义和联系。希望了解什么能够激励人，对人有很强的洞察力。有责任心，坚持自己的价值观。",
    personalityTraits: "INFJ是富有洞察力和理想主义的人。他们寻求意义和联系，对人有很强的洞察力，坚持自己的价值观，希望为世界做出积极的贡献。",
    lifeKeywords: [
      { title: "洞察人心", description: "对人性有深刻的理解，能够洞察他人的内心。" },
      { title: "理想主义", description: "有坚定的价值观和理想，追求有意义的人生。" },
      { title: "富有使命感", description: "感觉自己有特殊的使命，要为世界做出贡献。" }
    ],
    strengths: [
      { title: "富有洞察力", description: "对人和事有深刻的理解，能够洞察本质。" },
      { title: "坚持原则", description: "有坚定的价值观，不会轻易妥协。" },
      { title: "有创造力", description: "能够用独特的方式思考和解决问题。" },
      { title: "有同情心", description: "关心他人，希望帮助别人成长和幸福。" }
    ],
    weaknesses: [
      { title: "过于完美主义", description: "对自己和他人可能要求过高。" },
      { title: "容易倦怠", description: "因为过度付出而容易感到疲惫。" },
      { title: "过于敏感", description: "可能对批评和冲突过于敏感。" }
    ],
    rarity: { rank: 16, total: 1.5, male: 0.6, female: 2.4 },
    representativePeople: [
      { name: "鲁迅", description: "文学家、思想家" },
      { name: "杨绛", description: "作家、翻译家" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "鲁迅", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" },
      { name: "杨绛", imageUrl: "https://images.unsplash.com/photo-1531746020798-fe6554d55d18?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "INFJ是富有洞察力和理想主义的人。他们深刻理解人性，追求有意义的人生，希望为世界做出积极贡献。",
      lifeKeywords: [
        { title: "洞察人心", description: "对人性有深刻的理解，能够洞察他人的内心" },
        { title: "理想主义", description: "有坚定的价值观和理想，追求有意义的人生" },
        { title: "富有使命感", description: "感觉自己有特殊的使命，要为世界做出贡献" }
      ],
      strengths: [
        { title: "富有洞察力", description: "对人和事有深刻的理解，能够洞察本质" },
        { title: "坚持原则", description: "有坚定的价值观，不会轻易妥协" },
        { title: "有创造力", description: "能够用独特的方式思考和解决问题" },
        { title: "有同情心", description: "关心他人，希望帮助别人成长和幸福" }
      ],
      weaknesses: [
        { title: "过于完美主义", description: "对自己和他人可能要求过高" },
        { title: "容易倦怠", description: "因为过度付出而容易感到疲惫" },
        { title: "过于敏感", description: "可能对批评和冲突过于敏感" }
      ],
      advancedGuide: [
        { title: "接受不完美", content: "不要对自己和他人期望过高，学会接受不完美" },
        { title: "学会休息", content: "不要过度付出，给自己留出休息和恢复的时间" },
        { title: "建立边界", content: "建立健康的边界，保护自己的时间和精力" },
        { title: "活在当下", content: "不要总是想着未来，学会享受现在的时刻" }
      ]
    },
    career: ["心理咨询师", "作家", "人力资源经理", "医生", "艺术家"],
    relationships: "在关系中寻求深度和意义，是忠诚体贴的伴侣，希望与对方建立深层次的精神连接。",
    advancedGuide: [
      { title: "接受不完美", content: "不要对自己和他人期望过高，学会接受不完美。" },
      { title: "学会休息", content: "不要过度付出，给自己留出休息和恢复的时间。" },
      { title: "建立边界", content: "建立健康的边界，保护自己的时间和精力。" },
      { title: "活在当下", content: "不要总是想着未来，学会享受现在的时刻。" }
    ],
    eightDimensional: {
      dominant: { name: "内倾直觉 (Ni)", description: "INFJ的主导功能是Ni，给他们深刻的洞察力和预见能力，能够看到事物的深层意义和未来的可能性。" },
      auxiliary: { name: "外倾情感 (Fe)", description: "Fe帮助INFJ理解和关心他人的情感，建立和谐的人际关系，为他人着想。" },
      tertiary: { name: "内倾思考 (Ti)", description: "Ti是INFJ的第三功能，发展时能让他们更客观地分析问题，建立内在的逻辑框架。" },
      inferior: { name: "外倾感觉 (Se)", description: "Se作为弱势功能，是INFJ需要发展的领域，能帮助他们更好地活在当下，感受现实世界。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "富有洞察力、理想主义", content: "INFJ有深刻的洞察力和坚定的理想，能够看到可能性并为之努力。" },
        weaknesses: { title: "可能过于理想化、容易倦怠", content: "INFJ可能对现实期望过高，并且因为过度付出而感到疲惫。" }
      },
      teamMember: {
        usual: [
          "提供深刻的见解和独特的视角。",
          "关心团队和谐和成员的感受。",
          "坚持做正确的事情，有原则。",
          "默默付出，为团队贡献自己的力量。"
        ],
        shouldKnow: [
          "不要对团队和同事期望过高。",
          "学会接受不同的观点和做法。",
          "不要把所有责任都扛在自己身上。",
          "表达自己的需求，寻求支持。"
        ]
      },
      teamLeader: [
        "有愿景，能够激励团队追求有意义的目标。",
        "关心团队成员的成长和发展。",
        "坚持原则，做正确的事情。",
        "创造和谐有意义的团队文化。"
      ],
      suitableWorkEnv: [
        { title: "有意义和目的感", content: "INFJ需要工作有意义，能够为他人带来价值。" },
        { title: "有深度和创造性", content: "适合能够发挥洞察力和创造力的工作。" },
        { title: "和谐有温度", content: "喜欢能够帮助和影响他人的工作环境。" }
      ],
      unsuitableWorkEnv: [
        { title: "缺乏意义的重复性工作", content: "没有意义、只为赚钱的工作不适合。" },
        { title: "过于功利的环境", content: "只讲利益不讲人情的环境让INFJ感到不适。" },
        { title: "无法发挥深度思考的工作", content: "过于表面和肤浅的工作无法满足INFJ。" }
      ],
      recommendedCareers: [
        { title: "心理咨询师/心理治疗师", content: "能够帮助他人成长，发挥INFJ的洞察力和同理心。" },
        { title: "作家/创意工作者", content: "能够表达自己的深度思考和独特视角。" },
        { title: "人力资源/组织发展", content: "帮助组织和个人发展，创造有意义的工作环境。" },
        { title: "教师/教育工作者", content: "启发和引导学生，关注他们的全面发展。" },
        { title: "非营利组织工作者", content: "为有意义的事业工作，帮助有需要的人群。" }
      ],
      avoidedCareers: [
        { title: "纯机械化的重复工作", content: "缺乏思考和意义的工作让INFJ感到压抑。" },
        { title: "高度功利的销售工作", content: "过于强调业绩和利益的工作不适合。" },
        { title: "缺乏人文关怀的工作", content: "只重效率不重人的工作环境不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中寻求深度和意义，是忠诚体贴的伴侣，希望与对方建立深层次的精神连接。",
      loveFeatures: ["追求精神共鸣", "深度情感连接", "忠诚体贴", "重视意义和价值"],
      loveStatus: {
        ideal: "与能够进行深度精神交流的灵魂伴侣相遇",
        attention: "不要过于理想化，接受现实中的不完美",
        growth: "平衡理想与现实，学会表达情感需求"
      },
      loveMatch: [
        { type: "ENFP", compatibility: "98%", description: "灵魂伴侣型，同属理想主义者，能深度理解彼此情感世界。" },
        { type: "INFP", compatibility: "92%", description: "心灵共鸣型，两个理想主义诗人的相遇，创造童话般浪漫。" },
        { type: "ENFJ", compatibility: "88%", description: "互相理解和支持，共同追求有意义的生活。" }
      ]
    }
  },
  "INTJ": {
    type: "INTJ",
    name: "建筑师",
    subtitle: "建筑师",
    description: "有创造性的思想，并有强大的动力去实现自己的想法和目标。很快能看到外部事物的规律，并形成长远的解释性远景。一旦决定做一件事，就会开始规划直到完成。",
    personalityTraits: "INTJ是有战略思维和远见的人。他们善于看到规律和趋势，形成长远的愿景，并有强大的动力去实现自己的目标。",
    lifeKeywords: [
      { title: "战略思维", description: "善于从全局和长远角度思考问题，制定战略。" },
      { title: "追求卓越", description: "对自己要求很高，不断追求更高的目标。" },
      { title: "独立自主", description: "有自己的想法，不轻易受他人影响。" }
    ],
    strengths: [
      { title: "战略思维", description: "善于系统思考，能够制定长远的计划。" },
      { title: "独立自主", description: "有独立的思想，不随波逐流。" },
      { title: "有远见", description: "能够预见未来的趋势和可能性。" },
      { title: "高效执行", description: "一旦确定目标，就会高效地去实现。" }
    ],
    weaknesses: [
      { title: "过于强势", description: "有时可能显得过于强势和固执。" },
      { title: "情感疏离", description: "可能显得不够关心他人的情感。" },
      { title: "不耐烦", description: "对效率低的情况可能缺乏耐心。" }
    ],
    rarity: { rank: 13, total: 2.1, male: 3.3, female: 0.9 },
    representativePeople: [
      { name: "钱学森", description: "中国航天之父" },
      { name: "任正非", description: "华为创始人" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "钱学森", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" },
      { name: "任正非", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "INTJ是有战略思维和远见的人。他们善于规划长远，追求卓越，独立自信，是天生的战略家。",
      lifeKeywords: [
        { title: "战略思维", description: "善于从全局和长远角度思考问题，制定战略" },
        { title: "追求卓越", description: "对自己要求很高，不断追求更高的目标" },
        { title: "独立自主", description: "有自己的想法，不轻易受他人影响" }
      ],
      strengths: [
        { title: "战略思维", description: "善于系统思考，能够制定长远的计划" },
        { title: "独立自主", description: "有独立的思想，不随波逐流" },
        { title: "有远见", description: "能够预见未来的趋势和可能性" },
        { title: "高效执行", description: "一旦确定目标，就会高效地去实现" }
      ],
      weaknesses: [
        { title: "过于强势", description: "有时可能显得过于强势和固执" },
        { title: "情感疏离", description: "可能显得不够关心他人的情感" },
        { title: "不耐烦", description: "对效率低的情况可能缺乏耐心" }
      ],
      advancedGuide: [
        { title: "发展同理心", content: "更多地关注和理解他人的情感和感受" },
        { title: "学会沟通情感", content: "不要只讲道理，也要表达自己的感受" },
        { title: "接受不同的方式", content: "认识到实现目标的方式不止一种" },
        { title: "学会放松", content: "不要总是那么严肃和紧张，学会享受生活" }
      ]
    },
    career: ["科学家", "系统分析师", "投资银行家", "建筑师", "企业战略顾问"],
    relationships: "在关系中需要智力上的连接，重视诚实和效率，希望伴侣能够理解和支持自己的目标。",
    advancedGuide: [
      { title: "发展同理心", content: "更多地关注和理解他人的情感和感受。" },
      { title: "学会沟通情感", content: "不要只讲道理，也要表达自己的感受。" },
      { title: "接受不同的方式", content: "认识到实现目标的方式不止一种。" },
      { title: "学会放松", content: "不要总是那么严肃和紧张，学会享受生活。" }
    ],
    eightDimensional: {
      dominant: { name: "内倾直觉 (Ni)", description: "INTJ的主导功能是Ni，给他们强大的战略洞察力和预见能力，能够看到未来的趋势和模式。" },
      auxiliary: { name: "外倾思考 (Te)", description: "Te帮助INTJ组织和规划外部世界，建立系统和结构，高效地实现目标。" },
      tertiary: { name: "内倾情感 (Fi)", description: "Fi是INTJ的第三功能，发展时能让他们有更坚定的个人价值观和深度的内在信念。" },
      inferior: { name: "外倾感觉 (Se)", description: "Se作为弱势功能，是INTJ需要发展的领域，能帮助他们更好地活在当下，享受现实。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "战略思维、追求卓越", content: "INTJ有卓越的战略思维能力，善于规划和实现长远目标，追求卓越和效率。" },
        weaknesses: { title: "可能过于强势、情感疏离", content: "INTJ可能过于专注目标而忽视他人的情感，显得冷漠和不近人情。" }
      },
      teamMember: {
        usual: [
          "提供战略视角和长远规划。",
          "推动事情高效进行，注重结果。",
          "看到问题的根本原因，提出解决方案。",
          "对低效率的情况感到不耐烦。"
        ],
        shouldKnow: [
          "多关注团队成员的感受。",
          "不要表现得过于强势和无所不知。",
          "给他人学习和成长的时间。",
          "倾听不同的观点和建议。"
        ]
      },
      teamLeader: [
        "有清晰的愿景和目标。",
        "建立高效的系统和流程。",
        "追求卓越，设定高标准。",
        "推动团队实现长远目标。"
      ],
      suitableWorkEnv: [
        { title: "能够发挥战略思考", content: "INTJ需要能够进行深度思考和战略规划的工作。" },
        { title: "有自主性和决策权", content: "需要有足够的自主权来执行自己的想法。" },
        { title: "有挑战性和成长空间", content: "喜欢有挑战性的工作，能够不断成长和进步。" }
      ],
      unsuitableWorkEnv: [
        { title: "过度依赖他人协作", content: "需要频繁依赖他人配合的工作可能不适合。" },
        { title: "缺乏自主性和决策权", content: "无法自主决策的环境让INTJ感到压抑。" },
        { title: "效率低下、官僚主义", content: "繁琐的流程和低效率会让INTJ感到沮丧。" }
      ],
      recommendedCareers: [
        { title: "科学家/研究员", content: "能够深度思考和探索，追求真理和知识。" },
        { title: "系统分析师/架构师", content: "设计和构建复杂的系统，发挥战略思维。" },
        { title: "企业战略顾问", content: "帮助企业制定战略，分析复杂问题。" },
        { title: "投资分析师/金融分析师", content: "分析趋势，做出战略决策。" },
        { title: "工程师/技术专家", content: "设计和优化复杂的技术系统。" }
      ],
      avoidedCareers: [
        { title: "需要大量社交应酬的工作", content: "过多的社交会让INTJ感到疲惫。" },
        { title: "缺乏技术深度的事务性工作", content: "过于表面和简单的工作无法满足INTJ。" },
        { title: "官僚主义严重的环境", content: "低效率的工作环境不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中需要智力上的连接，重视诚实和效率，希望伴侣能够理解和支持自己的目标。",
      loveFeatures: ["重视智力交流", "追求效率和成长", "独立自信", "直接坦诚"],
      loveStatus: {
        ideal: "与能够理解和支持自己目标的智慧伴侣建立关系",
        attention: "不要总是用逻辑分析感情，学会感受",
        growth: "表达关心和爱意，不只是在心里"
      },
      loveMatch: [
        { type: "ENTP", compatibility: "95%", description: "智力上的完美匹配，能够进行深度的思想交流。" },
        { type: "INFP", compatibility: "90%", description: "互补的组合，INFP的温暖能够平衡INTJ的理性。" },
        { type: "ENFJ", compatibility: "85%", description: "ENFJ的热情能够帮助INTJ更好地表达情感。" }
      ]
    }
  },
  "ISTP": {
    type: "ISTP",
    name: "鉴赏家",
    subtitle: "鉴赏家",
    description: "宽容、灵活。是冷静的观察者，直到有问题出现，才会行动。找出问题的核心，找到实用的解决方法。分析事物运作的原理，能从大量的信息中很快找到关键。",
    personalityTraits: "ISTP是务实、灵活的人。他们善于分析事物的运作原理，快速找到问题的核心并给出实用的解决方案，喜欢动手实践。",
    lifeKeywords: [
      { title: "务实解决", description: "遇到问题时能够冷静分析，找到实用的解决方案。" },
      { title: "动手能力强", description: "喜欢动手实践，善于操作各种工具和设备。" },
      { title: "灵活应变", description: "适应能力强，能够灵活应对各种情况。" }
    ],
    strengths: [
      { title: "务实灵活", description: "能够灵活应对各种情况，找到实际的解决方法。" },
      { title: "善于分析", description: "能够快速分析问题，找到核心所在。" },
      { title: "适应力强", description: "在新环境中能够快速适应。" },
      { title: "冷静理性", description: "遇事冷静，不容易被情绪左右。" }
    ],
    weaknesses: [
      { title: "显得冷漠", description: "可能显得不太关心他人的情感。" },
      { title: "缺乏耐心", description: "对重复性的工作可能缺乏耐心。" },
      { title: "难以承诺", description: "可能不太喜欢做出长期承诺。" }
    ],
    rarity: { rank: 10, total: 5.4, male: 8.5, female: 2.4 },
    representativePeople: [
      { name: "李小龙", description: "武术家、演员" },
      { name: "林丹", description: "羽毛球世界冠军" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1507591070756-2f401e67e771?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "李小龙", imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=200&fit=crop" },
      { name: "林丹", imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba821?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ISTP是务实灵活、动手能力强的人。他们善于解决实际问题，适应能力强，是天生的实干家。",
      lifeKeywords: [
        { title: "务实解决", description: "遇到问题时能够冷静分析，找到实用的解决方案" },
        { title: "动手能力强", description: "喜欢动手实践，善于操作各种工具和设备" },
        { title: "灵活应变", description: "适应能力强，能够灵活应对各种情况" }
      ],
      strengths: [
        { title: "务实灵活", description: "能够灵活应对各种情况，找到实际的解决方法" },
        { title: "善于分析", description: "能够快速分析问题，找到核心所在" },
        { title: "适应力强", description: "在新环境中能够快速适应" },
        { title: "冷静理性", description: "遇事冷静，不容易被情绪左右" }
      ],
      weaknesses: [
        { title: "显得冷漠", description: "可能显得不太关心他人的情感" },
        { title: "缺乏耐心", description: "对重复性的工作可能缺乏耐心" },
        { title: "难以承诺", description: "可能不太喜欢做出长期承诺" }
      ],
      advancedGuide: [
        { title: "关注情感连接", content: "不仅要一起做事，也要培养情感上的连接" },
        { title: "学会表达情感", content: "让对方知道你的感受，不要总是藏在心里" },
        { title: "做出承诺", content: "在适当的时候做出承诺，给对方安全感" },
        { title: "规划未来", content: "一起规划一下未来，不要总是活在当下" }
      ]
    },
    career: ["工程师", "机械师", "飞行员", "程序员", "运动员"],
    relationships: "在关系中给对方空间，喜欢通过共同活动建立连接，重视彼此的独立性。",
    advancedGuide: [
      { title: "关注情感连接", content: "不仅要一起做事，也要培养情感上的连接。" },
      { title: "学会表达情感", content: "让对方知道你的感受，不要总是藏在心里。" },
      { title: "做出承诺", content: "在适当的时候做出承诺，给对方安全感。" },
      { title: "规划未来", content: "一起规划一下未来，不要总是活在当下。" }
    ],
    eightDimensional: {
      dominant: { name: "内倾思考 (Ti)", description: "ISTP的主导功能是Ti，使他们善于分析和理解事物的运作原理，追求逻辑的精确性。" },
      auxiliary: { name: "外倾感觉 (Se)", description: "Se帮助ISTP敏锐地感知当下的环境，善于动手实践，灵活应对现实情况。" },
      tertiary: { name: "内倾直觉 (Ni)", description: "Ni是ISTP的第三功能，发展时能让他们有更长远的视野，看到深层的模式。" },
      inferior: { name: "外倾情感 (Fe)", description: "Fe作为弱势功能，是ISTP需要发展的领域，能帮助他们更好地关注他人的情感。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "务实灵活、善于解决问题", content: "ISTP非常善于找到实际问题的解决方案，动手能力强，灵活应变。" },
        weaknesses: { title: "可能缺乏长远规划、情感疏离", content: "ISTP可能过于关注当下而缺乏长远规划，在情感表达上也可能显得不足。" }
      },
      teamMember: {
        usual: [
          "快速发现并解决实际问题。",
          "灵活应对各种突发情况。",
          "善于动手操作和调试。",
          "保持冷静，不慌不乱。"
        ],
        shouldKnow: [
          "更多地参与团队讨论和规划。",
          "关注团队氛围和他人的感受。",
          "及时沟通进展和想法。",
          "考虑事情的长远影响。"
        ]
      },
      teamLeader: [
        "快速响应问题，灵活解决。",
        "给团队成员自主空间。",
        "注重实际结果和效率。",
        "以身作则，动手解决问题。"
      ],
      suitableWorkEnv: [
        { title: "能够动手实践", content: "ISTP喜欢能够实际操作和动手的工作。" },
        { title: "灵活自主", content: "需要有自主空间和灵活性的工作环境。" },
        { title: "解决实际问题", content: "适合能够解决具体问题的工作。" }
      ],
      unsuitableWorkEnv: [
        { title: "过于理论和抽象的工作", content: "离实际太远的工作不适合ISTP。" },
        { title: "严格死板的环境", content: "缺乏灵活性的工作环境不适合。" },
        { title: "需要大量社交和情感工作", content: "过多的情感交流让ISTP感到疲惫。" }
      ],
      recommendedCareers: [
        { title: "工程师/机械工程师", content: "能够动手设计和制造，解决实际问题。" },
        { title: "技术员/维修人员", content: "善于调试和修复各种设备和系统。" },
        { title: "飞行员/驾驶员", content: "善于应对各种情况，操作复杂设备。" },
        { title: "程序员/开发人员", content: "分析和解决技术问题，灵活应对需求变化。" },
        { title: "运动员/体育教练", content: "身体协调性好，追求技艺的精通。" }
      ],
      avoidedCareers: [
        { title: "纯理论研究的工作", content: "过于抽象和理论的工作不适合ISTP。" },
        { title: "需要大量文书工作的职业", content: "过多的文案和文书工作不适合。" },
        { title: "需要频繁情感交流的工作", content: "过多的情感关怀工作让ISTP感到压力。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中给对方空间，喜欢通过共同活动建立连接，重视彼此的独立性。",
      loveFeatures: ["重视独立空间", "用行动表达爱", "灵活随性", "动手能力强"],
      loveStatus: {
        ideal: "与同样独立的伴侣一起做喜欢的事情",
        attention: "偶尔用言语表达感受，不只是行动",
        growth: "在对方需要时，学会倾听和陪伴"
      },
      loveMatch: [
        { type: "ESFP", compatibility: "95%", description: "充满活力的组合，都喜欢体验和行动，能够一起享受生活。" },
        { type: "ESTP", compatibility: "90%", description: "同样务实和灵活，能够理解彼此对自由的需求。" },
        { type: "ISFP", compatibility: "85%", description: "互补的艺术组合，ISFP的敏感能够平衡ISTP的冷静。" }
      ]
    }
  },
  "ISFP": {
    type: "ISFP",
    name: "探险家",
    subtitle: "探险家",
    description: "安静、敏感、和善。享受当下。不喜欢争论和冲突，不会把自己的观念和价值观强加于人。忠实于自己和自己重视的人。",
    personalityTraits: "ISFP是温和、敏感的人。他们享受当下，热爱生活中的美好事物，善良体贴，重视和谐，忠实于自己和重视的人。",
    lifeKeywords: [
      { title: "活在当下", description: "充分享受当下的每一刻，感受生活中的美好。" },
      { title: "温和善良", description: "性格温和，心地善良，不喜欢冲突。" },
      { title: "艺术气质", description: "有艺术天赋，善于用各种方式表达自己。" }
    ],
    strengths: [
      { title: "温和体贴", description: "性格温和，关心他人的感受。" },
      { title: "有艺术天赋", description: "有审美能力，善于用艺术表达自己。" },
      { title: "灵活适应", description: "能够灵活适应不同的情况和环境。" },
      { title: "善良真诚", description: "内心善良，待人真诚。" }
    ],
    weaknesses: [
      { title: "过于敏感", description: "可能对批评和冲突过于敏感。" },
      { title: "回避冲突", description: "不喜欢面对冲突，可能过于妥协。" },
      { title: "缺乏规划", description: "可能不太善于做长期规划。" }
    ],
    rarity: { rank: 8, total: 8.8, male: 7.6, female: 9.9 },
    representativePeople: [
      { name: "王菲", description: "歌手" },
      { name: "周杰伦", description: "音乐人" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "王菲", imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" },
      { name: "周杰伦", imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ISFP是温和敏感、有艺术气质的人。他们活在当下，善于发现生活中的美好，用艺术表达自己。",
      lifeKeywords: [
        { title: "活在当下", description: "充分享受当下的每一刻，感受生活中的美好" },
        { title: "温和善良", description: "性格温和，心地善良，不喜欢冲突" },
        { title: "艺术气质", description: "有艺术天赋，善于用各种方式表达自己" }
      ],
      strengths: [
        { title: "温和体贴", description: "性格温和，关心他人的感受" },
        { title: "有艺术天赋", description: "有审美能力，善于用艺术表达自己" },
        { title: "灵活适应", description: "能够灵活适应不同的情况和环境" },
        { title: "善良真诚", description: "内心善良，待人真诚" }
      ],
      weaknesses: [
        { title: "过于敏感", description: "可能对批评和冲突过于敏感" },
        { title: "回避冲突", description: "不喜欢面对冲突，可能过于妥协" },
        { title: "缺乏规划", description: "可能不太善于做长期规划" }
      ],
      advancedGuide: [
        { title: "面对冲突", content: "不要总是回避冲突，学会建设性地解决问题" },
        { title: "表达想法", content: "勇敢地表达自己的想法和需求" },
        { title: "规划未来", content: "为未来做一些规划，不要只活在当下" },
        { title: "建立边界", content: "建立健康的边界，不要总是妥协" }
      ]
    },
    career: ["艺术家", "设计师", "兽医", "理疗师", "摄影师"],
    relationships: "是温柔体贴的伴侣，重视和谐，避免冲突，喜欢与伴侣一起享受生活中的美好时光。",
    advancedGuide: [
      { title: "面对冲突", content: "不要总是回避冲突，学会建设性地解决问题。" },
      { title: "表达想法", content: "勇敢地表达自己的想法和需求。" },
      { title: "规划未来", content: "为未来做一些规划，不要只活在当下。" },
      { title: "建立边界", content: "建立健康的边界，不要总是妥协。" }
    ],
    eightDimensional: {
      dominant: { name: "内倾情感 (Fi)", description: "ISFP的主导功能是Fi，使他们有强烈的个人价值观，忠于自己，能够深切地感受到美和情感。" },
      auxiliary: { name: "外倾感觉 (Se)", description: "Se帮助ISFP敏锐地感知当下的世界，享受生活中的美好，有很好的审美能力。" },
      tertiary: { name: "内倾直觉 (Ni)", description: "Ni是ISFP的第三功能，发展时能让他们有更深的洞见和对未来的感知。" },
      inferior: { name: "外倾思考 (Te)", description: "Te作为弱势功能，是ISFP需要发展的领域，能帮助他们更有条理地组织生活。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "温和体贴、富有艺术感", content: "ISFP有很好的审美能力，待人温和体贴，善于创造和谐美好的氛围。" },
        weaknesses: { title: "可能回避冲突、缺乏规划", content: "ISFP可能过于回避冲突，并且在长期规划方面有所欠缺。" }
      },
      teamMember: {
        usual: [
          "创造和谐的团队氛围。",
          "用美感和艺术感提升工作品质。",
          "灵活适应变化，不固执己见。",
          "对需要帮助的人给予支持。"
        ],
        shouldKnow: [
          "不要总是回避必要的讨论和冲突。",
          "更积极地表达自己的观点和建议。",
          "参与到规划和决策中来。",
          "学会处理压力和困难的对话。"
        ]
      },
      teamLeader: [
        "创造温暖和谐的团队氛围。",
        "给团队成员自主和空间。",
        "注重美感和品质。",
        "灵活应对各种情况。"
      ],
      suitableWorkEnv: [
        { title: "有美感和创造性", content: "ISFP喜欢能够发挥审美和创造力的工作。" },
        { title: "和谐无压力", content: "适合人际关系和谐、压力适中的工作环境。" },
        { title: "灵活自主", content: "需要有一定的自主性和灵活性。" }
      ],
      unsuitableWorkEnv: [
        { title: "充满冲突和竞争的环境", content: "过于激烈的竞争环境不适合ISFP。" },
        { title: "过于死板的规定", content: "缺乏灵活性的工作环境不适合。" },
        { title: "缺乏美感和温度的工作", content: "过于功利和冰冷的工作不适合。" }
      ],
      recommendedCareers: [
        { title: "艺术家/设计师", content: "能够发挥创造力和审美能力。" },
        { title: "兽医/动物护理", content: "关心动物，有耐心，适合与动物相关的工作。" },
        { title: "理疗师/按摩师", content: "通过身体接触帮助他人，温和体贴。" },
        { title: "摄影师/视觉创作者", content: "善于发现和捕捉美的瞬间。" },
        { title: "厨师/美食工作者", content: "创造美味和美观的食物，带来愉悦感。" }
      ],
      avoidedCareers: [
        { title: "高压力的销售工作", content: "过于强调业绩和竞争的工作不适合。" },
        { title: "充满冲突的工作环境", content: "需要频繁处理冲突的工作不适合。" },
        { title: "过于刻板的事务性工作", content: "缺乏创造性的重复性工作不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "是温柔体贴的伴侣，重视和谐，避免冲突，喜欢与伴侣一起享受生活中的美好时光。",
      loveFeatures: ["温柔体贴", "重视和谐", "享受当下", "有艺术气质"],
      loveStatus: {
        ideal: "与能够保护自己敏感的温柔伴侣一起享受生活",
        attention: "不要总是回避问题，及时沟通解决",
        growth: "表达不满和需求，不要总是忍耐"
      },
      loveMatch: [
        { type: "ESFP", compatibility: "95%", description: "温暖快乐的组合，都能享受生活中的美好时光。" },
        { type: "ISTP", compatibility: "90%", description: "互补的艺术组合，ISTP的务实能够给ISFP安全感。" },
        { type: "ESTP", compatibility: "85%", description: "ESTP的活力能够给ISFP带来更多快乐。" }
      ]
    }
  },
  "INFP": {
    type: "INFP",
    name: "调停者",
    subtitle: "调停者",
    description: "理想主义，忠于自己的价值观和对自己重要的人。希望外部生活和自己的内心世界是统一的。好奇，能很快看到事情的可能性，能够成为实现想法的催化剂。",
    personalityTraits: "INFP是理想主义、忠于价值观的人。他们寻求内心与外部世界的统一，富有想象力和创造力，希望让世界变得更美好。",
    lifeKeywords: [
      { title: "理想主义", description: "有崇高的理想和价值观，追求有意义的人生。" },
      { title: "内心丰富", description: "内心世界非常丰富，有深刻的思考和感受。" },
      { title: "追求真实", description: "忠于自己的内心，追求真实和真诚。" }
    ],
    strengths: [
      { title: "理想主义", description: "有坚定的价值观，追求有意义的生活。" },
      { title: "富有创造力", description: "想象力丰富，能够用独特的方式表达自己。" },
      { title: "有同理心", description: "能够深切理解他人的感受。" },
      { title: "坚持价值观", description: "忠于自己的价值观，不轻易妥协。" }
    ],
    weaknesses: [
      { title: "过于理想化", description: "可能对现实和他人期望过高。" },
      { title: "容易拖延", description: "可能因为追求完美而拖延。" },
      { title: "回避冲突", description: "可能过于回避冲突和批评。" }
    ],
    rarity: { rank: 14, total: 4.4, male: 3.1, female: 5.8 },
    representativePeople: [
      { name: "李白", description: "唐代诗人" },
      { name: "宫崎骏", description: "动画导演" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1531746020798-fe6554d55d18?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "李白", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
      { name: "宫崎骏", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "INFP是理想主义、忠于内心的人。他们追求真实和意义，富有想象力，追求有价值的人生。",
      lifeKeywords: [
        { title: "理想主义", description: "有崇高的理想和价值观，追求有意义的人生" },
        { title: "内心丰富", description: "内心世界非常丰富，有深刻的思考和感受" },
        { title: "追求真实", description: "忠于自己的内心，追求真实和真诚" }
      ],
      strengths: [
        { title: "理想主义", description: "有坚定的价值观，追求有意义的生活" },
        { title: "富有创造力", description: "想象力丰富，能够用独特的方式表达自己" },
        { title: "有同理心", description: "能够深切理解他人的感受" },
        { title: "坚持价值观", description: "忠于自己的价值观，不轻易妥协" }
      ],
      weaknesses: [
        { title: "过于理想化", description: "可能对现实和他人期望过高" },
        { title: "容易拖延", description: "可能因为追求完美而拖延" },
        { title: "回避冲突", description: "可能过于回避冲突和批评" }
      ],
      advancedGuide: [
        { title: "接受现实", content: "不要让理想遮蔽了现实，接受生活中的不完美" },
        { title: "行动起来", content: "不要总是停留在思考，要付诸行动" },
        { title: "面对冲突", content: "不要回避冲突，学会建设性地处理" },
        { title: "接受不完美", content: "不要等到完美才开始，在行动中完善" }
      ]
    },
    career: ["作家", "艺术家", "心理学家", "非营利组织工作者", "心理咨询师"],
    relationships: "在关系中寻求深度和真实，追求有意义的连接，希望与伴侣在精神层面产生共鸣。",
    advancedGuide: [
      { title: "接受现实", content: "不要让理想遮蔽了现实，接受生活中的不完美。" },
      { title: "行动起来", content: "不要总是停留在思考，要付诸行动。" },
      { title: "面对冲突", content: "不要回避冲突，学会建设性地处理。" },
      { title: "接受不完美", content: "不要等到完美才开始，在行动中完善。" }
    ],
    eightDimensional: {
      dominant: { name: "内倾情感 (Fi)", description: "INFP的主导功能是Fi，使他们有强烈的个人价值观和深刻的内心世界，忠于自己。" },
      auxiliary: { name: "外倾直觉 (Ne)", description: "Ne帮助INFP看到各种可能性，富有想象力和创造力，能够发现新的想法和机会。" },
      tertiary: { name: "内倾感觉 (Si)", description: "Si是INFP的第三功能，发展时能让他们更接地气，从过去的经验中学习。" },
      inferior: { name: "外倾思考 (Te)", description: "Te作为弱势功能，是INFP需要发展的领域，能帮助他们更有条理地实现目标。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "理想主义、富有创造力", content: "INFP有丰富的内心世界和创造力，忠于自己的价值观，追求有意义的工作。" },
        weaknesses: { title: "可能过于理想化、拖延", content: "INFP可能对现实期望过高，并且在行动方面可能有所拖延。" }
      },
      teamMember: {
        usual: [
          "带来创新的想法和独特的视角。",
          "关心团队的和谐和人文关怀。",
          "坚持做符合自己价值观的事情。",
          "有同理心，能够理解他人的感受。"
        ],
        shouldKnow: [
          "不要对团队和工作环境期望过高。",
          "更积极地参与执行和落地。",
          "及时完成任务，避免拖延。",
          "学会面对必要的冲突和批评。"
        ]
      },
      teamLeader: [
        "创造有意义和有价值的愿景。",
        "关注团队成员的成长和发展。",
        "营造真诚和信任的氛围。",
        "用创造力启发团队。"
      ],
      suitableWorkEnv: [
        { title: "有意义和价值观一致", content: "INFP需要工作与自己的价值观一致，有意义。" },
        { title: "有创造性和想象力", content: "适合能够发挥创造力的工作环境。" },
        { title: "有深度和真诚的人际", content: "喜欢真诚、有深度的人际关系。" }
      ],
      unsuitableWorkEnv: [
        { title: "缺乏意义和价值观冲突", content: "与自己价值观不符的工作不适合。" },
        { title: "过于功利和商业化", content: "只讲利益不讲价值的工作不适合。" },
        { title: "缺乏创造空间", content: "无法发挥创造力的工作不适合。" }
      ],
      recommendedCareers: [
        { title: "作家/创意写作", content: "能够用文字表达自己的内心世界和价值观。" },
        { title: "艺术家/设计师", content: "用艺术表达内心世界和独特视角。" },
        { title: "心理咨询师/社工", content: "帮助他人成长，符合帮助他人的价值观。" },
        { title: "非营利组织工作者", content: "为有意义的事业工作。" },
        { title: "教师/教育工作者", content: "启发和引导学生，关注他们的成长。" }
      ],
      avoidedCareers: [
        { title: "过于功利的销售工作", content: "只讲业绩不讲价值的工作不适合。" },
        { title: "缺乏人文关怀的工作", content: "只重效率不重人的工作不适合。" },
        { title: "过于机械和重复的工作", content: "缺乏意义和创造性的工作不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中寻求深度和真实，追求有意义的连接，希望与伴侣在精神层面产生共鸣。",
      loveFeatures: ["追求精神共鸣", "理想主义", "深度情感", "追求真实"],
      loveStatus: {
        ideal: "与能够深度理解自己的灵魂伴侣相遇",
        attention: "不要用理想中的标准要求对方",
        growth: "接受关系中的不完美和摩擦"
      },
      loveMatch: [
        { type: "ENFP", compatibility: "95%", description: "理想主义的完美组合，能够深度理解彼此的内心世界。" },
        { type: "INFJ", compatibility: "92%", description: "灵魂伴侣型，两个深刻的理想主义者相遇。" },
        { type: "ENFJ", compatibility: "88%", description: "ENFJ的热情能够激发INFP的行动力。" }
      ]
    }
  },
  "INTP": {
    type: "INTP",
    name: "逻辑学家",
    subtitle: "逻辑学家",
    description: "对任何感兴趣的事情都寻求逻辑的解释。喜欢理论和抽象的概念，热衷于思考，不喜欢聚会。喜欢独处，安静、内向、灵活。",
    personalityTraits: "INTP是逻辑思维强、喜欢思考的人。他们对感兴趣的事情寻求逻辑解释，喜欢理论和抽象概念，享受独立思考的过程。",
    lifeKeywords: [
      { title: "逻辑思辨", description: "喜欢用逻辑分析问题，寻求事物的本质。" },
      { title: "爱思考", description: "热衷于思考各种理论和抽象概念。" },
      { title: "追求真理", description: "对知识和真理有强烈的好奇心。" }
    ],
    strengths: [
      { title: "逻辑思维强", description: "善于用逻辑分析和解决问题。" },
      { title: "有创造力", description: "能够用独特的方式思考问题。" },
      { title: "客观公正", description: "能够客观地看待问题，不受情绪影响。" },
      { title: "学习能力强", description: "对感兴趣的东西学习很快。" }
    ],
    weaknesses: [
      { title: "过于理论", description: "可能过于关注理论而忽视实际应用。" },
      { title: "社交困难", description: "可能不善于社交和表达情感。" },
      { title: "拖延", description: "可能因为追求完美而拖延。" }
    ],
    rarity: { rank: 15, total: 3.2, male: 4.5, female: 1.9 },
    representativePeople: [
      { name: "陈景润", description: "数学家" },
      { name: "华罗庚", description: "数学家" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "陈景润", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
      { name: "华罗庚", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "INTP是逻辑思维强、热爱思考的人。他们对知识有强烈好奇心，喜欢分析和理解事物的本质。",
      lifeKeywords: [
        { title: "逻辑思辨", description: "喜欢用逻辑分析问题，寻求事物的本质" },
        { title: "爱思考", description: "热衷于思考各种理论和抽象概念" },
        { title: "追求真理", description: "对知识和真理有强烈的好奇心" }
      ],
      strengths: [
        { title: "逻辑思维强", description: "善于用逻辑分析和解决问题" },
        { title: "有创造力", description: "能够用独特的方式思考问题" },
        { title: "客观公正", description: "能够客观地看待问题，不受情绪影响" },
        { title: "学习能力强", description: "对感兴趣的东西学习很快" }
      ],
      weaknesses: [
        { title: "过于理论", description: "可能过于关注理论而忽视实际应用" },
        { title: "社交困难", description: "可能不善于社交和表达情感" },
        { title: "拖延", description: "可能因为追求完美而拖延" }
      ],
      advancedGuide: [
        { title: "关注现实应用", content: "不要只停留在理论思考，关注实际应用" },
        { title: "发展社交技能", content: "学习更好地与人交流和表达情感" },
        { title: "完成项目", content: "不要总是开始新项目，要把已有的做完" },
        { title: "接受情感", content: "不要总是用逻辑分析情感，学会感受" }
      ]
    },
    career: ["科学家", "程序员", "数学家", "哲学家", "研究员"],
    relationships: "在关系中需要智力上的连接，给彼此空间，重视诚实和直接的沟通。",
    advancedGuide: [
      { title: "关注现实应用", content: "不要只停留在理论思考，关注实际应用。" },
      { title: "发展社交技能", content: "学习更好地与人交流和表达情感。" },
      { title: "完成项目", content: "不要总是开始新项目，要把已有的做完。" },
      { title: "接受情感", content: "不要总是用逻辑分析情感，学会感受。" }
    ],
    eightDimensional: {
      dominant: { name: "内倾思考 (Ti)", description: "INTP的主导功能是Ti，使他们善于构建内在的逻辑框架，分析和理解复杂的系统。" },
      auxiliary: { name: "外倾直觉 (Ne)", description: "Ne帮助INTP看到各种可能性，连接不同的想法，发现新的视角。" },
      tertiary: { name: "内倾感觉 (Si)", description: "Si是INTP的第三功能，发展时能让他们更重视细节和经验。" },
      inferior: { name: "外倾情感 (Fe)", description: "Fe作为弱势功能，是INTP需要发展的领域，能帮助他们更好地理解他人的情感。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "逻辑思维强、善于分析", content: "INTP有卓越的逻辑分析能力，善于理解复杂的系统和概念。" },
        weaknesses: { title: "可能过于理论、社交困难", content: "INTP可能过于关注理论，在社交和情感表达方面有所欠缺。" }
      },
      teamMember: {
        usual: [
          "提供深刻的分析和创新的解决方案。",
          "发现系统中的逻辑问题。",
          "独立工作，不喜欢过多打扰。",
          "对感兴趣的问题深入研究。"
        ],
        shouldKnow: [
          "更积极地与团队成员沟通。",
          "关注工作的实际应用和落地。",
          "及时分享自己的想法和发现。",
          "参与一些团队社交活动。"
        ]
      },
      teamLeader: [
        "鼓励创新和独立思考。",
        "建立合理的逻辑框架。",
        "给团队成员自主空间。",
        "用理性和分析解决问题。"
      ],
      suitableWorkEnv: [
        { title: "能够深度思考和研究", content: "INTP需要能够进行深度思考的工作环境。" },
        { title: "有自主和灵活的空间", content: "需要有自主安排时间和方式的自由。" },
        { title: "有智力挑战", content: "适合有智力挑战的工作内容。" }
      ],
      unsuitableWorkEnv: [
        { title: "需要大量社交的工作", content: "过多的社交让INTP感到疲惫。" },
        { title: "过于结构化和死板", content: "缺乏灵活性的工作环境不适合。" },
        { title: "缺乏智力挑战的工作", content: "过于简单和重复的工作不适合。" }
      ],
      recommendedCareers: [
        { title: "科学家/研究员", content: "能够进行深度研究和探索。" },
        { title: "程序员/软件工程师", content: "设计和构建复杂的软件系统。" },
        { title: "数学家/统计学家", content: "探索数学和逻辑的奥秘。" },
        { title: "学术研究者/教授", content: "在学术领域进行探索和教学。" },
        { title: "系统分析师/架构师", content: "分析和设计复杂的系统。" }
      ],
      avoidedCareers: [
        { title: "需要大量面对面销售的工作", content: "过多的社交和推销让INTP不适。" },
        { title: "高度重复的事务性工作", content: "缺乏思考深度的工作不适合。" },
        { title: "需要频繁情感关怀的工作", content: "过多的情感投入让INTP感到压力。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中需要智力上的连接，给彼此空间，重视诚实和直接的沟通。",
      loveFeatures: ["重视智力交流", "独立思考", "直接坦诚", "给彼此空间"],
      loveStatus: {
        ideal: "与能够进行智力交流的智慧伴侣建立关系",
        attention: "不要总是用逻辑分析情感，学会感受",
        growth: "主动表达关心和爱意，不只是在心里"
      },
      loveMatch: [
        { type: "ENTP", compatibility: "95%", description: "智力上的完美搭档，能够进行精彩的思想碰撞。" },
        { type: "INTJ", compatibility: "90%", description: "同样理性和独立，能够理解彼此对空间的需求。" },
        { type: "ENFP", compatibility: "85%", description: "ENFP的热情能够激发INTP的情感表达。" }
      ]
    }
  },
  "ESTP": {
    type: "ESTP",
    name: "企业家",
    subtitle: "企业家",
    description: "灵活、宽容，务实。注重直接的结果。对理论和概念解释感到不耐烦，喜欢积极地采取行动解决问题。专注于当下，享受与他人在一起的时光。",
    personalityTraits: "ESTP是务实、行动力强的人。他们喜欢直接采取行动解决问题，注重当下的现实，善于社交，享受生活中的各种体验。",
    lifeKeywords: [
      { title: "行动至上", description: "喜欢直接采取行动，而不是停留在思考。" },
      { title: "活在当下", description: "充分享受当下的每一刻，不纠结过去未来。" },
      { title: "灵活应变", description: "能够快速适应变化，灵活应对各种情况。" }
    ],
    strengths: [
      { title: "行动力强", description: "能够快速采取行动解决问题。" },
      { title: "适应力强", description: "能够快速适应新的环境和情况。" },
      { title: "善于社交", description: "善于与人交往，有魅力。" },
      { title: "务实解决", description: "能够找到实际的解决方案。" }
    ],
    weaknesses: [
      { title: "缺乏规划", description: "可能不太善于做长期规划。" },
      { title: "容易冲动", description: "可能过于冲动，没有充分思考就行动。" },
      { title: "忽视深度", description: "可能过于关注表面而忽视深度。" }
    ],
    rarity: { rank: 7, total: 5.6, male: 8.1, female: 3.2 },
    representativePeople: [
      { name: "马云", description: "阿里巴巴创始人" },
      { name: "王健林", description: "万达集团董事长" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1507591070756-2f401e67e771?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "马云", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" },
      { name: "王健林", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ESTP是精力充沛、善于行动的人。他们灵活应变，享受当下，善于抓住机会。",
      lifeKeywords: [
        { title: "灵活应变", description: "适应能力强，能够快速应对各种变化" },
        { title: "行动力强", description: "想到就做，善于抓住机会" },
        { title: "享受当下", description: "活在当下，充分享受生活" }
      ],
      strengths: [
        { title: "灵活应变", description: "适应能力强，能够快速应对变化" },
        { title: "行动力强", description: "想到就做，善于抓住机会" },
        { title: "善于观察", description: "观察力敏锐，能够注意到细节" },
        { title: "精力充沛", description: "充满活力，能够持续行动" }
      ],
      weaknesses: [
        { title: "缺乏规划", description: "可能不太善于做长期规划" },
        { title: "容易冲动", description: "可能过于追求刺激而冲动行事" },
        { title: "不耐烦", description: "对理论和抽象的东西可能缺乏耐心" }
      ],
      advancedGuide: [
        { title: "规划未来", content: "不仅要活在当下，也要为未来做一些规划" },
        { title: "三思而后行", content: "行动前多思考一下后果" },
        { title: "培养耐心", content: "学会对理论和抽象的东西" },
        { title: "关注情感", content: "多关注他人的感受和情感" }
      ]
    },
    career: ["销售", "企业家", "运动员", "演员", "紧急救援人员"],
    relationships: "在关系中充满活力，喜欢一起体验新事物，给关系带来兴奋和乐趣。",
    advancedGuide: [
      { title: "思考再行动", content: "不要总是那么冲动，行动前先思考一下。" },
      { title: "规划未来", content: "为未来做一些规划，不要只活在当下。" },
      { title: "深入思考", content: "不要只停留在表面，深入思考一些问题。" },
      { title: "学会承诺", content: "在关系中学会做出承诺，保持忠诚。" }
    ],
    eightDimensional: {
      dominant: { name: "外倾感觉 (Se)", description: "ESTP的主导功能是Se，使他们敏锐地感知当下的环境，喜欢体验和行动，活在当下。" },
      auxiliary: { name: "内倾思考 (Ti)", description: "Ti帮助ESTP分析问题，找到实际的解决方案，用逻辑快速应对情况。" },
      tertiary: { name: "外倾情感 (Fe)", description: "Fe是ESTP的第三功能，发展时能让他们更关注他人的感受和社会和谐。" },
      inferior: { name: "内倾直觉 (Ni)", description: "Ni作为弱势功能，是ESTP需要发展的领域，能帮助他们看到长远的意义和愿景。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "行动力强、灵活务实", content: "ESTP行动迅速，能够灵活应对各种情况，善于找到实际的解决方案。" },
        weaknesses: { title: "可能缺乏规划、容易冲动", content: "ESTP可能过于关注当下而缺乏长远规划，有时可能过于冲动。" }
      },
      teamMember: {
        usual: [
          "快速采取行动，推动事情进展。",
          "灵活应对变化，解决突发问题。",
          "给团队带来能量和活力。",
          "善于处理实际问题。"
        ],
        shouldKnow: [
          "在行动前多思考一下后果。",
          "参与团队的规划和决策过程。",
          "考虑事情的长远影响。",
          "不要总是寻求刺激和变化。"
        ]
      },
      teamLeader: [
        "快速行动，解决问题。",
        "灵活应对变化。",
        "给团队带来能量和干劲。",
        "注重实际结果。"
      ],
      suitableWorkEnv: [
        { title: "快节奏有活力", content: "ESTP喜欢快节奏、有活力的工作环境。" },
        { title: "能够采取行动", content: "适合能够快速采取行动的工作。" },
        { title: "有变化和多样性", content: "喜欢有变化和多样化的工作内容。" }
      ],
      unsuitableWorkEnv: [
        { title: "过于缓慢和死板", content: "太慢和太死板的工作不适合。" },
        { title: "需要长期规划", content: "过于强调长远规划的工作不适合。" },
        { title: "缺乏变化的重复工作", content: "过于重复和缺乏变化的工作不适合。" }
      ],
      recommendedCareers: [
        { title: "销售/业务开发", content: "行动迅速，有说服力，适合销售工作。" },
        { title: "企业家/创业者", content: "喜欢冒险和行动，适合创业。" },
        { title: "运动员/体育教练", content: "身体协调性好，喜欢竞争和挑战。" },
        { title: "演员/表演者", content: "有表现力，喜欢在聚光灯下。" },
        { title: "紧急救援/急救人员", content: "能够冷静快速地处理紧急情况。" }
      ],
      avoidedCareers: [
        { title: "过于理论和抽象的研究工作", content: "离实际太远的工作不适合。" },
        { title: "需要长期规划的战略工作", content: "过于长远的规划不适合ESTP。" },
        { title: "缓慢而重复的工作", content: "缺乏变化和刺激的工作不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中充满活力，喜欢一起体验新事物，给关系带来兴奋和乐趣。",
      loveFeatures: ["充满活力", "喜欢体验新事物", "活在当下", "有魅力"],
      loveStatus: {
        ideal: "与同样喜欢体验生活的伴侣一起冒险",
        attention: "偶尔放慢脚步，享受一些安静的时光",
        growth: "一起为未来做一些规划，让关系更稳定"
      },
      loveMatch: [
        { type: "ISFP", compatibility: "95%", description: "充满活力的艺术组合，都能享受生活中的美好。" },
        { type: "ISTP", compatibility: "90%", description: "同样务实和爱冒险，能够一起做有趣的事情。" },
        { type: "ESFP", compatibility: "88%", description: "两个活力四射的人在一起，永远不会无聊。" }
      ]
    }
  },
  "ESTJ": {
    type: "ESTJ",
    name: "总经理",
    subtitle: "总经理",
    description: "务实、现实，注重事实。果断，迅速做出决定。善于组织项目和人员完成任务，注重效率。喜欢清晰的规则和层次结构。",
    personalityTraits: "ESTJ是务实、有条理的人。他们善于组织和管理，注重效率和结果，喜欢清晰的规则和结构，有很强的责任感。",
    lifeKeywords: [
      { title: "组织管理", description: "善于组织和管理人和事，让事情高效运转。" },
      { title: "务实高效", description: "注重实际结果，追求效率。" },
      { title: "传统可靠", description: "重视传统和规则，是可靠的人。" }
    ],
    strengths: [
      { title: "组织能力强", description: "善于组织和管理，让事情有条理。" },
      { title: "务实高效", description: "注重实际，追求效率和结果。" },
      { title: "果断决策", description: "能够快速做出决定，不犹豫。" },
      { title: "责任感强", description: "认真负责，值得信赖。" }
    ],
    weaknesses: [
      { title: "过于固执", description: "可能过于坚持自己的方式。" },
      { title: "不够灵活", description: "可能不够灵活，不善于适应变化。" },
      { title: "忽视情感", description: "可能过于关注效率而忽视情感。" }
    ],
    rarity: { rank: 4, total: 8.7, male: 11.7, female: 5.8 },
    representativePeople: [
      { name: "董明珠", description: "格力电器董事长" },
      { name: "柳传志", description: "联想集团创始人" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "董明珠", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
      { name: "柳传志", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ESTJ是务实高效、有组织能力的人。他们善于管理和执行，注重效率和结果。",
      lifeKeywords: [
        { title: "务实高效", description: "注重实际，追求效率和结果" },
        { title: "组织能力强", description: "善于组织和管理，让事情有序进行" },
        { title: "责任感强", description: "对工作和责任认真负责" }
      ],
      strengths: [
        { title: "务实高效", description: "注重实际，追求效率和结果" },
        { title: "组织能力强", description: "善于组织和管理，让事情有序进行" },
        { title: "果断决策", description: "能够快速做出决定，不拖泥带水" },
        { title: "责任感强", description: "对工作和责任认真负责" }
      ],
      weaknesses: [
        { title: "过于固执", description: "可能过于坚持自己的方式" },
        { title: "不够灵活", description: "在应对变化时可能不够灵活" },
        { title: "忽视情感", description: "可能过于关注结果而忽视情感" }
      ],
      advancedGuide: [
        { title: "学会灵活", content: "不要总是坚持一种方式，学会灵活应对" },
        { title: "关注情感", content: "不仅要关注结果，也要关注人的感受" },
        { title: "倾听他人", content: "学会倾听他人的意见和建议" },
        { title: "放松自己", content: "不要总是那么紧张，学会放松" }
      ]
    },
    career: ["经理", "军官", "法官", "教师", "公务员"],
    relationships: "在关系中是稳定可靠的伴侣，重视承诺和责任，善于组织和规划家庭生活。",
    advancedGuide: [
      { title: "学习灵活", content: "不要过于固执，学会接受不同的方式。" },
      { title: "关注情感", content: "不要只关注效率，也要关注情感。" },
      { title: "接受新想法", content: "对新的想法和方式保持开放。" },
      { title: "学会放松", content: "不要总是那么紧张和严肃，学会放松。" }
    ],
    eightDimensional: {
      dominant: { name: "外倾思考 (Te)", description: "ESTJ的主导功能是Te，使他们善于组织和管理外部世界，追求效率和结果，建立秩序和结构。" },
      auxiliary: { name: "内倾感觉 (Si)", description: "Si帮助ESTJ记住过去的经验，重视传统和稳定，关注细节和事实。" },
      tertiary: { name: "外倾情感 (Fe)", description: "Fe是ESTJ的第三功能，发展时能让他们更关注他人的感受和社会和谐。" },
      inferior: { name: "内倾直觉 (Ni)", description: "Ni作为弱势功能，是ESTJ需要发展的领域，能帮助他们看到更多可能性和愿景。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "组织能力强、务实高效", content: "ESTJ善于组织管理，注重效率和结果，是很好的执行者和管理者。" },
        weaknesses: { title: "可能过于固执、忽视情感", content: "ESTJ可能过于坚持自己的方式，对他人的情感关注不够。" }
      },
      teamMember: {
        usual: [
          "组织和协调团队工作。",
          "注重效率和结果。",
          "遵循规则和流程。",
          "认真负责，可靠完成任务。"
        ],
        shouldKnow: [
          "不要过于固执己见，倾听不同观点。",
          "关注团队成员的感受和情绪。",
          "对新的方式和想法保持开放。",
          "不要过于强调规则和程序。"
        ]
      },
      teamLeader: [
        "建立清晰的结构和规则。",
        "分配任务，明确责任。",
        "注重效率和结果。",
        "以身作则，认真负责。"
      ],
      suitableWorkEnv: [
        { title: "结构清晰、规则明确", content: "ESTJ喜欢有明确规则和流程的工作环境。" },
        { title: "注重效率和结果", content: "适合以结果为导向的工作环境。" },
        { title: "有明确的责任分工", content: "需要责任分工明确的工作环境。" }
      ],
      unsuitableWorkEnv: [
        { title: "混乱无序的环境", content: "缺乏结构和规则的工作环境会让ESTJ感到不安。" },
        { title: "缺乏效率的工作", content: "过于强调过程而非结果的工作不适合ESTJ。" },
        { title: "不切实际的工作环境", content: "过于理想化、不切实际的工作环境不适合。" }
      ],
      recommendedCareers: [
        { title: "经理/企业高管", content: "善于组织和管理，能够建立高效的工作体系。" },
        { title: "军官/警察", description: "重视规则和纪律，适合需要责任感的工作。" },
        { title: "法官/律师", content: "尊重法律和秩序，公正客观地做决策。" },
        { title: "教师/教育管理者", content: "负责任、有条理，善于建立秩序。" },
        { title: "公务员/政府官员", content: "适合有明确规则和责任的工作。" }
      ],
      avoidedCareers: [
        { title: "缺乏结构的工作", content: "没有明确规则和责任的工作不适合。" },
        { title: "需要频繁变化的工作", content: "过于动荡和不确定的工作不适合。" },
        { title: "过于艺术化的工作", content: "缺乏实际意义的工作不适合ESTJ。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中是稳定可靠的伴侣，重视承诺和责任，善于组织和规划家庭生活。",
      loveFeatures: ["稳定可靠", "重视承诺", "有条理", "责任感强"],
      loveStatus: {
        ideal: "与同样重视责任和传统的伴侣建立稳定的家庭",
        attention: "不要过于执着于规则和秩序，接受一些变化",
        growth: "多表达情感，不只是用行动来关心对方"
      },
      loveMatch: [
        { type: "ISFJ", compatibility: "95%", description: "完美互补，ISFJ的温柔能够平衡ESTJ的严肃，共同创造温馨的家庭。" },
        { type: "ESFJ", compatibility: "90%", description: "同样重视传统和责任，能够建立稳定和谐的关系。" },
        { type: "ISTJ", compatibility: "85%", description: "同样务实可靠，能够一起把生活安排得井井有条。" }
      ]
    }
  },
  "ESFJ": {
    type: "ESFJ",
    name: "执政官",
    subtitle: "执政官",
    description: "热心肠、有责任感、合作。希望周遭环境温馨而和谐，并愿意为此花精力实现。喜欢与他人一起精确及时地完成任务。忠诚，即使在小事中也很认真。",
    personalityTraits: "ESFJ是热心肠、负责任的人。他们希望周遭环境温馨和谐，喜欢与他人合作完成任务，忠诚认真，重视人际关系。",
    lifeKeywords: [
      { title: "热心关怀", description: "关心他人，愿意为周围的人付出。" },
      { title: "合作友好", description: "喜欢与他人合作，营造和谐氛围。" },
      { title: "忠诚负责", description: "对待人和事都非常认真负责。" }
    ],
    strengths: [
      { title: "热心关怀", description: "关心他人，善于照顾他人的需要。" },
      { title: "合作友好", description: "善于与人合作，营造和谐氛围。" },
      { title: "忠诚负责", description: "认真负责，值得信赖。" },
      { title: "有组织能力", description: "善于组织和协调，让事情井井有条。" }
    ],
    weaknesses: [
      { title: "过于在意他人的评价", description: "可能过于在意别人的看法。" },
      { title: "回避冲突", description: "不喜欢冲突，可能过于妥协。" },
      { title: "难以拒绝", description: "不善于拒绝他人的请求。" }
    ],
    rarity: { rank: 3, total: 12.3, male: 8.0, female: 16.6 },
    representativePeople: [
      { name: "何炅", description: "主持人" },
      { name: "谢娜", description: "主持人" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "何炅", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
      { name: "谢娜", imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ESFJ是热心肠、善于照顾人的人。他们关心他人，善于组织社交活动，维护和谐。",
      lifeKeywords: [
        { title: "热心肠", description: "关心他人，乐于助人" },
        { title: "善于社交", description: "善于与人交往，维护和谐" },
        { title: "有责任感", description: "对家人和朋友有责任感" }
      ],
      strengths: [
        { title: "热心肠", description: "关心他人，乐于助人" },
        { title: "善于社交", description: "善于与人交往，维护和谐" },
        { title: "有责任感", description: "对家人和朋友有责任感" },
        { title: "组织能力强", description: "善于组织活动，让大家开心" }
      ],
      weaknesses: [
        { title: "过于在意他人", description: "可能过于在意他人的看法" },
        { title: "难以拒绝", description: "不善于拒绝别人" },
        { title: "过于传统", description: "可能过于坚持传统" }
      ],
      advancedGuide: [
        { title: "关注自己", content: "不要总是关注他人，也要关注自己的需求" },
        { title: "学会拒绝", content: "学会拒绝不合理的请求" },
        { title: "接受变化", content: "不要总是坚持传统，学会接受变化" },
        { title: "表达自己", content: "勇敢地表达自己的想法和感受" }
      ]
    },
    career: ["护士", "教师", "社工", "销售", "人力资源"],
    relationships: "在关系中是体贴温暖的伴侣，重视和谐，愿意为对方付出，喜欢营造温馨的家庭氛围。",
    advancedGuide: [
      { title: "学会为自己着想", content: "不要总是优先考虑他人，也要关注自己的需要。" },
      { title: "面对冲突", content: "不要总是回避冲突，学会建设性地处理。" },
      { title: "接受批评", content: "不要把批评看得太重，学会从中成长。" },
      { title: "相信自己", content: "不要过度依赖他人的认可，相信自己的判断。" }
    ],
    eightDimensional: {
      dominant: { name: "外倾情感 (Fe)", description: "ESFJ的主导功能是Fe，使他们敏感地感知他人的情感需要，关心照顾他人，维持和谐的人际关系。" },
      auxiliary: { name: "内倾感觉 (Si)", description: "Si帮助ESFJ记住过去的经验，重视传统和稳定，关注细节和事实。" },
      tertiary: { name: "外倾直觉 (Ne)", description: "Ne是ESFJ的第三功能，发展时能让他们看到更多可能性，对新事物更开放。" },
      inferior: { name: "内倾思考 (Ti)", description: "Ti作为弱势功能，是ESFJ需要发展的领域，能帮助他们更客观地分析问题。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "热心关怀、合作友好", content: "ESFJ善于关心他人，与人合作，营造和谐的工作氛围。" },
        weaknesses: { title: "可能过于在意他人、回避冲突", content: "ESFJ可能过于在意他人的看法，并且回避必要的冲突。" }
      },
      teamMember: {
        usual: [
          "关心团队成员的感受和需要。",
          "积极合作，维护团队和谐。",
          "认真负责，可靠完成任务。",
          "帮助需要帮助的同事。"
        ],
        shouldKnow: [
          "不要过度在意他人的评价。",
          "学会面对必要的冲突和分歧。",
          "不要总是承担不属于自己的责任。",
          "对不合理的请求学会说不。"
        ]
      },
      teamLeader: [
        "创造温暖和谐的团队氛围。",
        "关心团队成员的个人发展。",
        "组织大家合作完成任务。",
        "以身作则，认真负责。"
      ],
      suitableWorkEnv: [
        { title: "和谐友好的环境", content: "ESFJ喜欢人际关系和谐的工作环境。" },
        { title: "能够帮助他人", content: "适合能够帮助和服务他人的工作。" },
        { title: "有明确的规则和期望", content: "需要清楚的规则和责任分工。" }
      ],
      unsuitableWorkEnv: [
        { title: "冷漠竞争的环境", content: "过于强调竞争和效率的环境不适合。" },
        { title: "缺乏人情味的工作", content: "只重效率不重人的工作不适合。" },
        { title: "频繁冲突的工作环境", content: "充满冲突和紧张的环境不适合ESFJ。" }
      ],
      recommendedCareers: [
        { title: "护士/医疗工作者", content: "能够关心照顾他人，发挥ESFJ的长处。" },
        { title: "教师/教育工作者", content: "关心学生，有耐心，适合教育行业。" },
        { title: "社工/社区工作者", content: "帮助他人，服务社区，有意义的工作。" },
        { title: "销售/客户服务", content: "善于与人沟通，有服务精神。" },
        { title: "人力资源/行政", content: "关心员工，善于组织和协调。" }
      ],
      avoidedCareers: [
        { title: "过于冷漠的技术工作", content: "缺乏人文关怀的纯技术工作不适合。" },
        { title: "高压力的竞争工作", content: "过于强调竞争和结果的工作不适合。" },
        { title: "需要频繁处理冲突的工作", content: "充满冲突的工作会让ESFJ感到不适。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中是体贴温暖的伴侣，重视和谐，愿意为对方付出，喜欢营造温馨的家庭氛围。",
      loveFeatures: ["体贴温暖", "重视和谐", "愿意付出", "温馨周到"],
      loveStatus: {
        ideal: "与懂得珍惜自己付出的伴侣建立温馨的家庭",
        attention: "不要总是为对方付出一切，也要照顾自己",
        growth: "有不满时及时沟通，不要积累情绪"
      },
      loveMatch: [
        { type: "ESTJ", compatibility: "95%", description: "完美互补，ESTJ的决断力能够保护ESFJ的温柔，共同创造稳定的生活。" },
        { type: "ISFJ", compatibility: "90%", description: "同样重视和谐和家庭，能够建立温馨的关系。" },
        { type: "ESFP", compatibility: "85%", description: "ESFP的活力能够给ESFJ带来快乐和新鲜感。" }
      ]
    }
  },
  "ENFJ": {
    type: "ENFJ",
    name: "主人公",
    subtitle: "主人公",
    description: "热心肠、负责任、有同情心。非常在意他人的感受和需要。善于发现他人的潜能，希望帮助他人发挥自己的潜能。在团队中往往是催化剂，激励他人前进。",
    personalityTraits: "ENFJ是热心肠、有同情心的人。他们非常在意他人的感受，善于发现他人的潜能，希望帮助他人成长，是天生的激励者。",
    lifeKeywords: [
      { title: "激励他人", description: "善于发现他人的潜能，激励他们成长。" },
      { title: "热情关怀", description: "热心肠，关心他人的感受和需要。" },
      { title: "有使命感", description: "感觉自己有使命帮助他人变得更好。" }
    ],
    strengths: [
      { title: "有感染力", description: "能够激励和鼓舞他人。" },
      { title: "有同情心", description: "关心他人，理解他人的感受。" },
      { title: "善于沟通", description: "善于与人交流，建立连接。" },
      { title: "有领导能力", description: "天生的领导者，能够带领团队。" }
    ],
    weaknesses: [
      { title: "过于理想化", description: "可能对他人和自己期望过高。" },
      { title: "过度承担", description: "可能承担过多不属于自己的责任。" },
      { title: "忽视自己的需要", description: "过于关注他人而忽视自己。" }
    ],
    rarity: { rank: 12, total: 2.5, male: 1.5, female: 3.6 },
    representativePeople: [
      { name: "周恩来", description: "中华人民共和国总理" },
      { name: "蔡康永", description: "主持人、作家" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "周恩来", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" },
      { name: "蔡康永", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ENFJ是有魅力和感染力的人。他们善于理解他人，激励他人成长，是天生的领导者。",
      lifeKeywords: [
        { title: "有魅力", description: "有个人魅力，能够吸引他人" },
        { title: "善于理解", description: "善于理解他人的感受和需求" },
        { title: "激励他人", description: "能够激励和帮助他人成长" }
      ],
      strengths: [
        { title: "有魅力", description: "有个人魅力，能够吸引他人" },
        { title: "善于理解", description: "善于理解他人的感受和需求" },
        { title: "善于沟通", description: "善于与人沟通和交流" },
        { title: "激励他人", description: "能够激励和帮助他人成长" }
      ],
      weaknesses: [
        { title: "过于照顾他人", description: "可能过于照顾他人而忽视自己" },
        { title: "过于理想", description: "可能对他人期望过高" },
        { title: "难以处理冲突", description: "可能不善于处理冲突" }
      ],
      advancedGuide: [
        { title: "关注自己", content: "不要总是关注他人，也要关注自己的需求" },
        { title: "接受不完美", content: "不要对他人期望过高，接受不完美" },
        { title: "面对冲突", content: "学会面对和处理冲突" },
        { title: "学会放松", content: "不要总是那么紧张，学会放松" }
      ]
    },
    career: ["教师", "心理咨询师", "人力资源", "作家", "政治家"],
    relationships: "在关系中是热情支持的伴侣，善于理解和鼓励对方，希望帮助伴侣成长，重视深度的情感连接。",
    advancedGuide: [
      { title: "接受不完美", content: "不要对自己和他人期望过高，接受不完美。" },
      { title: "保护自己的边界", content: "不要过度承担，学会说不。" },
      { title: "关注自己的需要", content: "不要总是把他人放在第一位。" },
      { title: "接受他人的选择", content: "不要试图过度影响和改变他人。" }
    ],
    eightDimensional: {
      dominant: { name: "外倾情感 (Fe)", description: "ENFJ的主导功能是Fe，使他们敏感地感知他人的情感需要，关心照顾他人，激励和鼓舞他人。" },
      auxiliary: { name: "内倾直觉 (Ni)", description: "Ni帮助ENFJ看到他人的潜能，有远见，能够洞察深层的意义和联系。" },
      tertiary: { name: "外倾感觉 (Se)", description: "Se是ENFJ的第三功能，发展时能让他们更接地气，活在当下。" },
      inferior: { name: "内倾思考 (Ti)", description: "Ti作为弱势功能，是ENFJ需要发展的领域，能帮助他们更客观地分析问题。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "有感染力、有同情心", content: "ENFJ善于激励他人，关心他人的成长和发展。" },
        weaknesses: { title: "可能过于理想化、过度承担", content: "ENFJ可能对他人期望过高，并且过度承担责任。" }
      },
      teamMember: {
        usual: [
          "激励团队成员，发挥他们的潜能。",
          "关心团队和谐和成员的感受。",
          "帮助需要帮助的同事。",
          "积极沟通，促进合作。"
        ],
        shouldKnow: [
          "不要过度干预他人的工作。",
          "接受团队成员可能有自己的工作方式。",
          "不要过度承担责任。",
          "关注自己的需要和发展。"
        ]
      },
      teamLeader: [
        "有愿景，能够激励团队。",
        "关心团队成员的成长和发展。",
        "创造积极向上的团队氛围。",
        "帮助每个人发挥自己的优势。"
      ],
      suitableWorkEnv: [
        { title: "能够帮助他人成长", content: "ENFJ喜欢能够帮助他人发展的工作。" },
        { title: "有意义和目的", content: "需要工作有意义和社会价值。" },
        { title: "积极向上的氛围", content: "适合充满正能量的工作环境。" }
      ],
      unsuitableWorkEnv: [
        { title: "缺乏人文关怀的工作", content: "只重利益不重人的工作不适合。" },
        { title: "冷漠竞争的环境", content: "过于强调竞争的环境不适合。" },
        { title: "缺乏发展机会的工作", content: "不能帮助他人成长的工作不适合。" }
      ],
      recommendedCareers: [
        { title: "教师/教育工作者", content: "启发和帮助学生成长，发挥ENFJ的激励能力。" },
        { title: "心理咨询师/教练", content: "帮助他人发现潜能，促进个人成长。" },
        { title: "人力资源/组织发展", content: "帮助组织和个人发展，创造积极的工作环境。" },
        { title: "作家/内容创作者", content: "用文字启发和影响他人。" },
        { title: "政治家/社会活动家", content: "为社会做出积极的改变，帮助更多人。" }
      ],
      avoidedCareers: [
        { title: "缺乏人文关怀的工作", content: "只重效率不重人的工作不适合。" },
        { title: "过于冷漠的工作环境", content: "缺乏温暖和关怀的环境不适合。" },
        { title: "缺乏意义的重复性工作", content: "不能带来积极影响的工作不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中是热情支持的伴侣，善于理解和鼓励对方，希望帮助伴侣成长，重视深度的情感连接。",
      loveFeatures: ["热情支持", "善于理解", "重视成长", "深度连接"],
      loveStatus: {
        ideal: "与同样重视成长和发展的伴侣建立有意义的关系",
        attention: "不要试图改变对方，接受他们本来的样子",
        growth: "给对方一些空间，不要过度关心"
      },
      loveMatch: [
        { type: "INFP", compatibility: "95%", description: "理想主义的完美组合，能够深度理解彼此的内心世界。" },
        { type: "INFJ", compatibility: "92%", description: "灵魂伴侣型，两个深刻的理想主义者相互理解和支持。" },
        { type: "ENFP", compatibility: "88%", description: "同样热情和理想主义，一起追求有意义的生活。" }
      ]
    }
  },
  "ENFP": {
    type: "ENFP",
    name: "竞选者",
    subtitle: "竞选者",
    description: "热情洋溢、富有想象力。认为生活充满可能性。能很快地将事情和信息联系起来，然后很自信地根据自己的判断解决问题。总是需要得到别人的认可，也总是准备着给与他人赏识和支持。灵活、自然不做作，有很强的即兴发挥的能力。",
    personalityTraits: "ENFP是热情洋溢、富有想象力的人。他们认为生活充满可能性，善于连接事物和信息，有很强的即兴发挥能力，需要得到认可也乐于给予支持。",
    lifeKeywords: [
      { title: "热情洋溢", description: "充满热情，能够感染周围的人。" },
      { title: "富有想象力", description: "有丰富的想象力和创造力。" },
      { title: "追求可能性", description: "对各种可能性充满好奇和探索欲。" }
    ],
    strengths: [
      { title: "热情有魅力", description: "能够感染和吸引他人。" },
      { title: "富有创造力", description: "想象力丰富，有创意。" },
      { title: "善于沟通", description: "善于与人交流，建立连接。" },
      { title: "适应力强", description: "能够灵活适应各种情况。" }
    ],
    weaknesses: [
      { title: "容易分心", description: "可能容易被新事物吸引而分心。" },
      { title: "缺乏规划", description: "可能不太善于做长期规划。" },
      { title: "过于理想主义", description: "可能对现实期望过高。" }
    ],
    rarity: { rank: 9, total: 8.1, male: 6.4, female: 9.7 },
    representativePeople: [
      { name: "撒贝宁", description: "主持人" },
      { name: "大张伟", description: "音乐人" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1531746020798-fe6554d55d18?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "撒贝宁", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
      { name: "大张伟", imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ENFP是热情洋溢、富有感染力的人。他们充满创意，善于激励他人，追求有意义的人生。",
      lifeKeywords: [
        { title: "热情洋溢", description: "充满热情，能够感染他人" },
        { title: "富有创意", description: "有丰富的想象力和创造力" },
        { title: "追求意义", description: "追求有意义和价值的人生" }
      ],
      strengths: [
        { title: "热情洋溢", description: "充满热情，能够感染他人" },
        { title: "富有创意", description: "有丰富的想象力和创造力" },
        { title: "善于沟通", description: "善于与人交流和沟通" },
        { title: "激励他人", description: "能够激励和鼓舞他人" }
      ],
      weaknesses: [
        { title: "容易分心", description: "可能容易被新事物吸引" },
        { title: "过于理想化", description: "可能对现实期望过高" },
        { title: "缺乏规划", description: "可能不太善于做规划" }
      ],
      advancedGuide: [
        { title: "专注坚持", content: "学会专注和坚持，不要总是开始新的事情" },
        { title: "接受现实", content: "不要对现实期望过高，接受不完美" },
        { title: "规划行动", content: "不仅要有想法，也要有行动" },
        { title: "照顾自己", content: "不要总是为他人，也要照顾自己" }
      ]
    },
    career: ["记者", "演员", "咨询师", "创意工作者", "教师"],
    relationships: "在关系中是热情浪漫的伴侣，充满创意和惊喜，重视情感连接和共同成长。",
    advancedGuide: [
      { title: "学会专注", content: "不要总是被新事物吸引，学会专注完成事情。" },
      { title: "规划未来", content: "为未来做一些规划，不要只活在当下。" },
      { title: "接受现实", content: "不要过于理想化，接受生活中的不完美。" },
      { title: "坚持承诺", content: "说到要做到，保持一致性。" }
    ],
    eightDimensional: {
      dominant: { name: "外倾直觉 (Ne)", description: "ENFP的主导功能是Ne，使他们看到各种可能性，有丰富的想象力，喜欢探索新想法和概念。" },
      auxiliary: { name: "内倾情感 (Fi)", description: "Fi帮助ENFP有强烈的个人价值观，忠于自己，能够深切地感受到美和情感。" },
      tertiary: { name: "外倾思考 (Te)", description: "Te是ENFP的第三功能，发展时能让他们更有条理地组织生活和实现目标。" },
      inferior: { name: "内倾感觉 (Si)", description: "Si作为弱势功能，是ENFP需要发展的领域，能帮助他们更稳定，从过去的经验中学习。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "热情有魅力、富有创造力", content: "ENFP充满热情，富有创造力，能够感染和吸引他人。" },
        weaknesses: { title: "可能容易分心、缺乏规划", content: "ENFP可能容易被新事物吸引，并且在长期规划方面有所欠缺。" }
      },
      teamMember: {
        usual: [
          "带来热情和创意，激发团队活力。",
          "善于沟通，促进团队合作。",
          "看到各种可能性，提出新想法。",
          "灵活适应变化。"
        ],
        shouldKnow: [
          "不要总是被新事物吸引，学会专注。",
          "完成已经开始的项目。",
          "关注执行的细节。",
          "考虑事情的实际影响。"
        ]
      },
      teamLeader: [
        "用热情和创意激励团队。",
        "看到各种可能性和机会。",
        "创造积极开放的团队氛围。",
        "鼓励创新和尝试。"
      ],
      suitableWorkEnv: [
        { title: "有创意和变化", content: "ENFP喜欢有创意和变化的工作环境。" },
        { title: "能够与人互动", content: "适合能够与人交流和互动的工作。" },
        { title: "有意义和有趣", content: "需要工作有意义并且有趣。" }
      ],
      unsuitableWorkEnv: [
        { title: "过于重复和单调", content: "缺乏变化和创意的工作不适合。" },
        { title: "过于结构化和死板", content: "缺乏灵活性的工作环境不适合。" },
        { title: "缺乏人际互动", content: "不能与人交流的工作不适合。" }
      ],
      recommendedCareers: [
        { title: "记者/媒体工作者", content: "善于与人沟通，有好奇心和探索欲。" },
        { title: "演员/表演者", content: "有表现力，喜欢在聚光灯下。" },
        { title: "咨询师/教练", content: "善于理解他人，帮助他人成长。" },
        { title: "创意工作者/设计师", content: "有丰富的想象力和创意。" },
        { title: "教师/教育工作者", content: "热情有感染力，能够启发学生。" }
      ],
      avoidedCareers: [
        { title: "过于重复单调的工作", content: "缺乏变化和创意的工作不适合。" },
        { title: "过于结构化的工作", content: "缺乏灵活性的工作不适合。" },
        { title: "缺乏人际互动的工作", content: "不能与人交流的工作不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中是热情浪漫的伴侣，充满创意和惊喜，重视情感连接和共同成长。",
      loveFeatures: ["热情浪漫", "富有创意", "重视连接", "追求成长"],
      loveStatus: {
        ideal: "与同样热情有趣的伴侣一起探索生活的可能性",
        attention: "不要总是追求新鲜感，学会在平淡中找到美好",
        growth: "坚持承诺，给关系一些稳定性"
      },
      loveMatch: [
        { type: "INFJ", compatibility: "98%", description: "灵魂伴侣型，同属理想主义者，能深度理解彼此情感世界。" },
        { type: "INFP", compatibility: "95%", description: "心灵共鸣型，两个理想主义诗人的相遇，创造童话般浪漫。" },
        { type: "ENFJ", compatibility: "90%", description: "相互理解和支持，一起追求有意义的生活。" }
      ]
    }
  },
  "ENTJ": {
    type: "ENTJ",
    name: "指挥官",
    subtitle: "指挥官",
    description: "有创造性的思想，并有强大的动力去实现自己的想法和目标。很快能看到外部事物的规律，并形成长远的解释性远景。一旦决定做一件事，就会开始规划直到完成。",
    personalityTraits: "ENTJ被称为\"指挥官\"，他们是天生的领导者，具有强大的决心和组织能力。他们目标明确，行动果断，总是朝着自己的目标坚定前进。ENTJ善于看清大局，制定战略，然后调动资源把想法变成现实。他们自信、果断，有强烈的成就欲，不惧怕挑战和困难。",
    lifeKeywords: [
      { title: "追求卓越", description: "不满足于平庸，总是追求最高的标准，努力成为最好的自己，实现最大的价值。" },
      { title: "战略思维", description: "善于从全局角度思考问题，制定长期战略，预见未来的挑战和机遇。" },
      { title: "领导与影响", description: "天生具有领导力，善于组织和激励他人，带领团队共同实现目标。" }
    ],
    strengths: [
      { title: "战略眼光", description: "能够从宏观角度看待问题，看到事物的长远发展趋势，制定出富有远见的战略计划。" },
      { title: "决断力强", description: "一旦做出决定，会迅速采取行动，不犹豫、不拖延。能够在信息不完整的情况下做出合理的判断。" },
      { title: "组织能力出色", description: "擅长组织资源、分配任务、建立系统，让复杂的项目有序进行。" },
      { title: "意志力坚定", description: "有强大的内心力量，能够在困难面前坚持不懈，不轻易放弃目标。" }
    ],
    weaknesses: [
      { title: "缺乏耐心", description: "对效率的追求可能导致对他人缺乏耐心，无法容忍缓慢和低效。" },
      { title: "过于强势", description: "自信和果断有时会表现为强势和控制欲，让他人感到被压迫。" },
      { title: "忽略情感", description: "过于关注效率和结果，可能会忽略人际情感和他人的感受。" }
    ],
    rarity: { rank: 2, total: 1.8, male: 2.7, female: 0.9 },
    representativePeople: [
      { name: "邓小平", description: "改革开放总设计师" },
      { name: "李嘉诚", description: "企业家" }
    ],
    career: ["企业高管", "管理咨询顾问", "创业者", "律师", "投资银行家", "项目经理"],
    relationships: "ENTJ的恋爱是务实而坚定的。他们把爱情也看作一个需要管理和经营的项目，会认真地寻找适合自己的伴侣，然后投入精力去建设关系。",
    animeImageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "邓小平", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" },
      { name: "李嘉诚", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ENTJ是天生的领导者和战略家。他们果断决策，追求效率，善于实现目标。",
      lifeKeywords: [
        { title: "领导力强", description: "天生的领导者，能够带领团队" },
        { title: "战略思维", description: "有战略思维和远见" },
        { title: "果断决策", description: "能够快速果断地做出决策" }
      ],
      strengths: [
        { title: "领导力强", description: "天生的领导者，能够带领团队" },
        { title: "战略思维", description: "有战略思维和远见" },
        { title: "果断决策", description: "能够快速果断地做出决策" },
        { title: "高效执行", description: "能够高效地实现目标" }
      ],
      weaknesses: [
        { title: "过于强势", description: "可能过于强势" },
        { title: "缺乏耐心", description: "可能对他人缺乏耐心" },
        { title: "忽视情感", description: "可能过于关注目标而忽视情感" }
      ],
      advancedGuide: [
        { title: "学会倾听", content: "学会倾听他人的意见" },
        { title: "关注情感", content: "不仅要关注目标，也要关注情感" },
        { title: "培养耐心", content: "对他人要有耐心" },
        { title: "学会放松", content: "不要总是那么紧张" }
      ]
    },
    advancedGuide: [
      { title: "培养耐心", content: "学习放慢脚步，给予他人和自己更多的耐心。" },
      { title: "增强同理心", content: "学习关注他人的感受和需求，意识到人际关系也是成功的重要因素。" },
      { title: "学会欣赏", content: "需要学会欣赏他人的贡献，认可他们的努力和成就。" },
      { title: "平衡工作与生活", content: "意识到生活不仅仅是工作，需要给自己留出休息和充电的时间。" }
    ],
    eightDimensional: {
      dominant: { name: "外倾思考 (Te)", description: "ENTJ的主导功能Te让他们善于组织、规划和执行，追求效率和结果。" },
      auxiliary: { name: "内倾直觉 (Ni)", description: "Ni为ENTJ提供了对未来的洞察力和深度理解，让他们能够看到潜在的模式和趋势。" },
      tertiary: { name: "外倾感觉 (Se)", description: "Se帮助ENTJ关注当下的现实，获取具体的信息，让他们的战略更加脚踏实地。" },
      inferior: { name: "内倾情感 (Fi)", description: "Fi是ENTJ的盲点功能，发展Fi可以帮助ENTJ更好地理解自己和他人，建立更加真诚的人际关系。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "领导力、战略思维、执行力", content: "ENTJ天生具有领导才能，能够激励和带领团队；他们有出色的战略思维，能够从全局角度规划；执行力强，能够把想法变成现实。" },
        weaknesses: { title: "过于强势、缺乏耐心、忽略情感", content: "ENTJ可能过于强势，让他人感到压迫；可能缺乏耐心，对他人的要求过高；可能忽略人际情感，影响团队氛围。" }
      },
      teamMember: {
        usual: ["主动承担责任", "提出战略建议", "推动项目前进", "设定高标准", "解决复杂问题"],
        shouldKnow: ["不要过于主导讨论", "对队友的想法缺乏耐心", "忽略他人的感受", "需要学会倾听和尊重不同意见"]
      },
      teamLeader: ["设定明确的目标", "制定清晰的战略", "高效组织资源", "推动团队执行", "高标准要求结果"],
      suitableWorkEnv: [
        { title: "具有挑战和成长", content: "ENTJ需要能够不断挑战自己、学习成长的工作环境，不喜欢一成不变。" },
        { title: "有影响力和责任", content: "他们希望能够对组织产生影响，承担重要责任，看到自己的工作成果。" },
        { title: "高效和结果导向", content: "ENTJ喜欢注重效率和结果的工作文化，不喜欢繁文缛节和低效率。" }
      ],
      unsuitableWorkEnv: [
        { title: "过于官僚和僵化", content: "过多的规则、缓慢的决策、僵化的结构会让ENTJ感到窒息。" },
        { title: "缺乏挑战和成长", content: "简单重复、没有挑战性的工作会让ENTJ感到无聊和不满足。" },
        { title: "人际关系复杂、效率低下", content: "政治斗争严重、效率低下的工作环境不是ENTJ的理想选择。" }
      ],
      recommendedCareers: [
        { title: "企业高管/CEO", content: "天生适合领导组织，制定战略，推动企业发展，实现商业目标。" },
        { title: "管理咨询顾问", content: "能够分析复杂的商业问题，提供战略建议，帮助企业改进效率和绩效。" },
        { title: "创业者/企业家", content: "喜欢从零开始创建事业，制定愿景，组建团队，把想法变成成功的企业。" },
        { title: "律师（诉讼/商业法）", content: "善于辩论，有很强的逻辑思维能力，能够在复杂的法律环境中找到最佳路径。" },
        { title: "投资银行家/风险投资家", content: "有出色的商业洞察力，能够评估机会，做出投资决策，创造财务回报。" }
      ],
      avoidedCareers: [
        { title: "数据录入员", content: "这种简单重复性的工作无法发挥ENTJ的才能，会让他们感到极度无聊和沮丧。" },
        { title: "客服代表", content: "需要处理大量情绪问题、缺乏自主权的工作不适合ENTJ的性格。" },
        { title: "档案管理员", content: "独自整理档案、缺乏挑战和影响力的工作不是ENTJ的理想选择。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "ENTJ的恋爱是务实而坚定的。他们把爱情也看作一个需要管理和经营的项目，会认真地寻找适合自己的伴侣，然后投入精力去建设关系。",
      loveFeatures: ["务实可靠", "目标导向", "保护与支持"],
      loveStatus: {
        ideal: "与同样有志向和能力的伴侣建立共同成长的关系",
        attention: "不要总是用逻辑分析感情，学会感受和表达爱",
        growth: "平衡工作和感情，给关系更多的时间和关注"
      },
      loveMatch: [
        { type: "INTP", compatibility: "95%", description: "智力上的完美匹配，INTP的创新思维能够补充ENTJ的战略规划。" },
        { type: "INTJ", compatibility: "90%", description: "同样有战略眼光的组合，能够一起实现伟大的目标。" },
        { type: "ENTP", compatibility: "85%", description: "两个思维敏捷的人在一起，能够激发彼此的创造力。" }
      ]
    }
  },
  "ENTP": {
    type: "ENTP",
    name: "辩论家",
    subtitle: "辩论家",
    description: "反应快、思维敏捷、善于激发。喜欢智力游戏和辩论。对很多事情都有自己的见解。善于随机应变，能够快速适应新情况。",
    personalityTraits: "ENTP是思维敏捷、善于激发的人。他们喜欢智力游戏和辩论，对很多事情都有独特见解，随机应变，适应能力强。",
    lifeKeywords: [
      { title: "思维敏捷", description: "头脑灵活，反应快，善于辩论。" },
      { title: "创新求变", description: "喜欢创新，追求变化，不喜欢一成不变。" },
      { title: "探索可能性", description: "对各种可能性充满好奇，喜欢探索。" }
    ],
    strengths: [
      { title: "思维敏捷", description: "头脑灵活，反应快，能快速理解事物。" },
      { title: "创新能力", description: "善于提出新想法，有创造力。" },
      { title: "适应力强", description: "能够快速适应新情况和新环境。" },
      { title: "善于辩论", description: "喜欢辩论，能从多角度看问题。" }
    ],
    weaknesses: [
      { title: "缺乏持续性", description: "可能难以持续专注一件事情。" },
      { title: "过于争论", description: "可能喜欢辩论而忽视和谐。" },
      { title: "忽视细节", description: "可能过于注重大局而忽视细节。" }
    ],
    rarity: { rank: 11, total: 3.2, male: 4.5, female: 1.9 },
    representativePeople: [
      { name: "高晓松", description: "音乐人、导演" },
      { name: "罗永浩", description: "企业家" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "高晓松", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" },
      { name: "罗永浩", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ENTP是聪明好奇、善于辩论的人。他们思维敏捷，喜欢挑战，善于发现新的可能性。",
      lifeKeywords: [
        { title: "聪明好奇", description: "对新事物充满好奇心，喜欢探索" },
        { title: "善于辩论", description: "思维敏捷，善于辩论" },
        { title: "创新思维", description: "能够发现新的可能性" }
      ],
      strengths: [
        { title: "聪明好奇", description: "对新事物充满好奇心，喜欢探索" },
        { title: "善于辩论", description: "思维敏捷，善于辩论" },
        { title: "创新思维", description: "能够发现新的可能性" },
        { title: "适应力强", description: "能够快速适应新情况" }
      ],
      weaknesses: [
        { title: "容易争论", description: "可能过于喜欢争论" },
        { title: "缺乏坚持", description: "可能缺乏坚持性" },
        { title: "不够专注", description: "可能不够专注" }
      ],
      advancedGuide: [
        { title: "学会倾听", content: "不要总是争论，学会倾听他人" },
        { title: "坚持完成", content: "不要总是开始新的，要学会完成" },
        { title: "专注深入", content: "学会专注和深入" },
        { title: "关注细节", content: "不仅要有想法，也要关注细节" }
      ]
    },
    career: ["企业家", "律师", "产品经理", "顾问", "发明家"],
    relationships: "在关系中充满乐趣和创意，喜欢智力交流，给对方空间，重视彼此的独立性和自由。",
    advancedGuide: [
      { title: "培养专注力", content: "学习持续完成一件事情，不要经常转移目标。" },
      { title: "关注细节", content: "不要总是注重大局，也要注意细节。" },
      { title: "选择和缓的沟通方式", content: "不要总是用辩论的方式交流。" },
      { title: "兑现承诺", content: "说到要做到，保持一致性。" }
    ],
    eightDimensional: {
      dominant: { name: "外倾直觉 (Ne)", description: "ENTP的主导功能是Ne，使他们看到各种可能性，有丰富的想象力，喜欢探索新想法和概念。" },
      auxiliary: { name: "内倾思考 (Ti)", description: "Ti帮助ENTP分析问题，构建逻辑框架，理解复杂的概念和系统。" },
      tertiary: { name: "外倾情感 (Fe)", description: "Fe是ENTP的第三功能，发展时能让他们更关注他人的感受和人际关系。" },
      inferior: { name: "内倾感觉 (Si)", description: "Si作为弱势功能，是ENTP需要发展的领域，能帮助他们更稳定，从经验中学习。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "思维敏捷、创新求变", content: "ENTP头脑灵活，善于创新，能够快速适应变化，提出新想法。" },
        weaknesses: { title: "可能缺乏持续、过于争论", content: "ENTP可能难以持续专注，并且可能过于喜欢辩论而忽视和谐。" }
      },
      teamMember: {
        usual: [
          "提出创新的想法和解决方案。",
          "喜欢讨论和辩论，激发思考。",
          "快速适应变化，灵活应对。",
          "看到各种可能性。"
        ],
        shouldKnow: [
          "不要总是唱反调，学会认同他人的观点。",
          "持续跟进项目，不要中途转移注意力。",
          "关注项目的执行细节。",
          "考虑他人的感受。"
        ]
      },
      teamLeader: [
        "提出创新的愿景和方向。",
        "激发团队的思考和讨论。",
        "灵活应对变化和挑战。",
        "鼓励创新和尝试。"
      ],
      suitableWorkEnv: [
        { title: "鼓励创新和试错", content: "ENTP喜欢能够探索新想法的工作环境。" },
        { title: "变化和多样性", content: "需要工作内容有变化和多样性。" },
        { title: "智力挑战", content: "适合有智力挑战的工作。" }
      ],
      unsuitableWorkEnv: [
        { title: "过于刻板的工作", content: "太死板、缺乏创新空间的工作不适合。" },
        { title: "重复单调的工作", content: "过于重复和单调的工作不适合。" },
        { title: "过于僵化的环境", content: "缺乏灵活性的工作环境不适合。" }
      ],
      recommendedCareers: [
        { title: "企业家/创业者", content: "喜欢创新和冒险，能够发现新机会。" },
        { title: "律师/法律工作者", content: "善于辩论，思维敏捷，适合法律工作。" },
        { title: "产品经理/产品设计师", content: "有创新思维，能够发现新的产品可能性。" },
        { title: "顾问/咨询师", content: "能够快速理解问题，提出创新的解决方案。" },
        { title: "发明家/研发人员", content: "喜欢探索和创新，发明新东西。" }
      ],
      avoidedCareers: [
        { title: "过于重复的工作", content: "缺乏变化和挑战的工作不适合。" },
        { title: "过于刻板的环境", content: "太死板、缺乏自由的工作不适合。" },
        { title: "需要持续专注的工作", content: "要求高度持续专注的工作可能不适合ENTP。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中充满乐趣和创意，喜欢智力交流，给对方空间，重视彼此的独立性和自由。",
      loveFeatures: ["充满乐趣", "智力交流", "重视自由", "独立思考"],
      loveStatus: {
        ideal: "与同样喜欢智力交流的伴侣一起探索想法",
        attention: "不要总是用辩论的方式沟通，学会倾听",
        growth: "持续投入关系，不要新鲜感过了就冷淡"
      },
      loveMatch: [
        { type: "INTP", compatibility: "95%", description: "智力上的完美搭档，能够进行精彩的思想碰撞。" },
        { type: "INTJ", compatibility: "90%", description: "同样理性和独立，能够理解彼此对空间的需求。" },
        { type: "ENFP", compatibility: "85%", description: "两个充满创意的人在一起，永远不会无聊。" }
      ]
    }
  },
  "ESFP": {
    type: "ESFP",
    name: "表演者",
    subtitle: "表演者",
    description: "外向、友好、接受力强。热爱生活、人类和物质上的享受。喜欢和别人一起将事情做成功。在工作中讲究常识和实用性，并使工作变得有趣。灵活、自然不做作，对于新的任何事物都能很快地适应。学习新事物最快的办法是通过和别人一起干。",
    personalityTraits: "ESFP是外向、友好的人。他们热爱生活，喜欢与人交往，讲究常识和实用性，灵活自然不做作，能够快速适应新事物。",
    lifeKeywords: [
      { title: "热爱生活", description: "享受生活中的美好时光，乐观积极。" },
      { title: "善于社交", description: "喜欢与人交往，有魅力。" },
      { title: "活在当下", description: "充分享受当下，不纠结过去未来。" }
    ],
    strengths: [
      { title: "热情友好", description: "善于与人交往，有魅力。" },
      { title: "适应力强", description: "能够快速适应新环境和新情况。" },
      { title: "注重实际", description: "讲究常识和实用性。" },
      { title: "乐观积极", description: "总是看到事情的好的一面。" }
    ],
    weaknesses: [
      { title: "缺乏长远规划", description: "可能不太善于做长期规划。" },
      { title: "容易冲动", description: "可能过于冲动，没有充分思考就行动。" },
      { title: "避免深入思考", description: "可能过于关注表面而忽视深度。" }
    ],
    rarity: { rank: 5, total: 8.5, male: 6.8, female: 10.1 },
    representativePeople: [
      { name: "张艺兴", description: "歌手、演员" },
      { name: "迪丽热巴", description: "演员" }
    ],
    animeImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    representativePeopleImages: [
      { name: "张艺兴", imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop" },
      { name: "迪丽热巴", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" }
    ],
    localizedDescription: {
      personalityTraits: "ESFP是热情开朗、善于社交的人。他们喜欢成为焦点，给身边的人带来快乐。",
      lifeKeywords: [
        { title: "热情开朗", description: "性格外向，热情开朗，给人带来快乐" },
        { title: "善于社交", description: "善于与人交往，喜欢热闹" },
        { title: "活在当下", description: "享受当下，充分体验生活" }
      ],
      strengths: [
        { title: "热情开朗", description: "性格外向，热情开朗，给人带来快乐" },
        { title: "善于社交", description: "善于与人交往，喜欢热闹" },
        { title: "适应力强", description: "能够快速适应新环境" },
        { title: "善于观察", description: "观察力敏锐，能够注意到细节" }
      ],
      weaknesses: [
        { title: "容易分心", description: "可能容易被新事物吸引而分心" },
        { title: "缺乏规划", description: "可能不太善于做长期规划" },
        { title: "容易冲动", description: "可能过于追求当下快乐而忽视长期" }
      ],
      advancedGuide: [
        { title: "规划未来", content: "不仅要享受当下，也要为未来做一些规划" },
        { title: "培养专注", content: "学会专注于一件事，不要容易分心" },
        { title: "三思而后行", content: "行动前多思考一下" },
        { title: "深度思考", content: "不仅要体验生活，也要学会深度思考" }
      ]
    },
    career: ["销售", "演员", "活动策划", "客户服务", "旅游行业"],
    relationships: "在关系中是热情有趣的伴侣，喜欢一起体验和享受生活，给关系带来快乐和活力。",
    advancedGuide: [
      { title: "思考再行动", content: "不要总是那么冲动，行动前先思考一下。" },
      { title: "规划未来", content: "为未来做一些规划，不要只活在当下。" },
      { title: "深入思考", content: "不要只停留在表面，深入思考一些问题。" },
      { title: "学会承诺", content: "在关系中学会做出承诺，保持忠诚。" }
    ],
    eightDimensional: {
      dominant: { name: "外倾感觉 (Se)", description: "ESFP的主导功能是Se，使他们敏锐地感知当下的环境，喜欢体验和行动，活在当下。" },
      auxiliary: { name: "内倾情感 (Fi)", description: "Fi帮助ESFP有强烈的个人价值观，忠于自己，能够深切地感受到美和情感。" },
      tertiary: { name: "外倾思考 (Te)", description: "Te是ESFP的第三功能，发展时能让他们更有条理地组织生活和实现目标。" },
      inferior: { name: "内倾直觉 (Ni)", description: "Ni作为弱势功能，是ESFP需要发展的领域，能帮助他们看到长远的意义和愿景。" }
    },
    careerExploration: {
      personality: {
        strengths: { title: "热情友好、适应力强", content: "ESFP善于与人交往，能够快速适应各种情况，给周围带来活力。" },
        weaknesses: { title: "可能缺乏规划、容易冲动", content: "ESFP可能过于关注当下而缺乏长远规划，有时可能过于冲动。" }
      },
      teamMember: {
        usual: [
          "给团队带来活力和乐趣。",
          "快速适应变化，灵活应对。",
          "善于与人互动，营造轻松氛围。",
          "注重实际结果。"
        ],
        shouldKnow: [
          "在行动前多思考一下后果。",
          "参与团队的规划和决策过程。",
          "考虑事情的长远影响。",
          "不要总是寻求刺激和变化。"
        ]
      },
      teamLeader: [
        "给团队带来活力和干劲。",
        "创造轻松愉快的团队氛围。",
        "灵活应对变化。",
        "注重实际结果。"
      ],
      suitableWorkEnv: [
        { title: "能够与人互动", content: "ESFP喜欢能够与人交流和互动的工作环境。" },
        { title: "有趣和有活力", content: "需要工作有趣和有活力。" },
        { title: "能够实际体验", content: "适合能够动手体验和行动的工作。" }
      ],
      unsuitableWorkEnv: [
        { title: "过于缓慢和死板", content: "太慢和太死板的工作不适合。" },
        { title: "需要长期规划", content: "过于强调长远规划的工作不适合。" },
        { title: "缺乏变化的重复工作", content: "过于重复和缺乏变化的工作不适合。" }
      ],
      recommendedCareers: [
        { title: "销售/业务开发", content: "善于与人交往，有魅力，适合销售工作。" },
        { title: "演员/表演者", content: "有表现力，喜欢在聚光灯下。" },
        { title: "活动策划/组织者", content: "善于组织活动，营造愉快氛围。" },
        { title: "客户服务/接待", content: "善于与人沟通，有服务精神。" },
        { title: "旅游/酒店行业", content: "喜欢与人交往，享受体验新事物。" }
      ],
      avoidedCareers: [
        { title: "过于理论和抽象的研究工作", content: "离实际太远的工作不适合。" },
        { title: "需要长期规划的战略工作", content: "过于长远的规划不适合ESFP。" },
        { title: "缓慢而重复的工作", content: "缺乏变化和刺激的工作不适合。" }
      ]
    },
    loveAnalysis: {
      loveStyle: "在关系中是热情有趣的伴侣，喜欢一起体验和享受生活，给关系带来快乐和活力。",
      loveFeatures: ["热情有趣", "享受生活", "活在当下", "有魅力"],
      loveStatus: {
        ideal: "与同样喜欢享受生活的伴侣一起体验美好时光",
        attention: "偶尔放慢脚步，享受一些安静的时光",
        growth: "一起为未来做一些规划，让关系更稳定"
      },
      loveMatch: [
        { type: "ISFP", compatibility: "95%", description: "温暖快乐的组合，都能享受生活中的美好时光。" },
        { type: "ISTP", compatibility: "90%", description: "ISTP的务实能够给ESFP带来稳定感。" },
        { type: "ESTP", compatibility: "88%", description: "两个活力四射的人在一起，永远不会无聊。" }
      ]
    }
  }
};

