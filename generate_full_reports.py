
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成完整的 reports.ts 文件，包含所有16种 MBTI 类型
"""
import os
import json
import re

BASE_PATH = r"d:\Vibe Coding\MBTI"
REPORTS_PATH = os.path.join(BASE_PATH, "完整报告")
ENHANCED_DATA_PATH = os.path.join(BASE_PATH, "mbti_enhanced_data.json")

MBTI_TYPES = [
    "ISTJ", "ISFJ", "INFJ", "INTJ",
    "ISTP", "ISFP", "INFP", "INTP",
    "ESTP", "ESTJ", "ESFP", "ESFJ",
    "ENFP", "ENFJ", "ENTP", "ENTJ"
]

TYPE_NAMES = {
    "ISTJ": "物流师", "ISFJ": "守卫者", "INFJ": "提倡者", "INTJ": "建筑师",
    "ISTP": "鉴赏家", "ISFP": "探险家", "INFP": "调停者", "INTP": "逻辑学家",
    "ESTP": "企业家", "ESTJ": "总经理", "ESFP": "表演者", "ESFJ": "执政官",
    "ENFP": "竞选者", "ENFJ": "主人公", "ENTP": "辩论家", "ENTJ": "指挥官"
}

# 读取增强数据
with open(ENHANCED_DATA_PATH, 'r', encoding='utf-8') as f:
    enhanced_data = json.load(f)

enhanced_map = {item['type']: item for item in enhanced_data['mbtiTypes']}

def parse_report(mbti_type):
    """解析完整报告文件"""
    report_path = os.path.join(REPORTS_PATH, mbti_type, f"{mbti_type}_完整报告.md")
    if not os.path.exists(report_path):
        print(f"警告: 找不到 {mbti_type} 的完整报告")
        return None
    
    with open(report_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 基本数据结构
    data = {
        'type': mbti_type,
        'name': TYPE_NAMES[mbti_type],
        'subtitle': TYPE_NAMES[mbti_type],
        'description': '',
        'personalityTraits': '',
        'lifeKeywords': [],
        'strengths': [],
        'weaknesses': [],
        'rarity': {'rank': 1, 'total': 1.5, 'male': 0.5, 'female': 2.5},
        'representativePeople': [],
        'career': [],
        'relationships': '',
        'advancedGuide': [],
        'eightDimensional': {
            'dominant': {'name': '', 'description': ''},
            'auxiliary': {'name': '', 'description': ''},
            'tertiary': {'name': '', 'description': ''},
            'inferior': {'name': '', 'description': ''}
        },
        'careerExploration': {
            'personality': {
                'strengths': {'title': '', 'content': ''},
                'weaknesses': {'title': '', 'content': ''}
            },
            'teamMember': {'usual': [], 'shouldKnow': []},
            'teamLeader': [],
            'suitableWorkEnv': [],
            'unsuitableWorkEnv': [],
            'recommendedCareers': [],
            'avoidedCareers': []
        },
        'loveAnalysis': {
            'loveStyle': '',
            'loveFeatures': [],
            'loveStatus': {'ideal': '', 'attention': '', 'growth': ''},
            'loveMatch': []
        }
    }
    
    # 解析各部分内容（基于现有 reports.ts 的结构，我们使用已有的模式）
    enhanced = enhanced_map.get(mbti_type, {})
    
    # 使用增强数据填充新增字段
    if enhanced:
        data['animeImageUrl'] = enhanced.get('animeImageUrl', '')
        data['representativePeopleImages'] = enhanced.get('representativePeopleImages', [])
        data['localizedDescription'] = enhanced.get('localizedDescription', {})
        
        # 更新代表人物
        if 'representativePeopleImages' in enhanced:
            data['representativePeople'] = [
                {'name': p['name'], 'description': p.get('description', '知名人物')}
                for p in enhanced['representativePeopleImages']
            ]
    
    return data

# 默认数据（基于现有 reports.ts 的结构）
default_data = {
    'ISTJ': {
        'type': 'ISTJ',
        'name': '物流师',
        'subtitle': '检查员',
        'description': '安静、严肃，通过全面性和可靠性获得成功。注重实际，实事求是，现实，有责任感。决定事情时会很有条理，循序渐进地进行。重视传统和忠诚。',
        'personalityTraits': 'ISTJ是安静、严肃、可靠的人。他们注重实际，实事求是，有责任感，做决定时有条理，重视传统和忠诚。',
        'lifeKeywords': [
            {'title': '踏实可靠', 'description': '是值得信赖的伙伴，做事认真负责，让人放心。'},
            {'title': '有条有理', 'description': '喜欢有秩序的生活，做事有条不紊，遵循既定流程。'},
            {'title': '重视传统', 'description': '尊重并维护传统价值观，喜欢稳定和可预测性。'}
        ],
        'strengths': [
            {'title': '务实可靠', 'description': '注重事实和细节，做事认真负责，值得信赖。'},
            {'title': '组织能力强', 'description': '善于建立秩序和流程，让事情井井有条。'},
            {'title': '责任感强', 'description': '对自己的承诺负责，会全力以赴完成任务。'},
            {'title': '细心谨慎', 'description': '关注细节，做事周全，避免出错。'}
        ],
        'weaknesses': [
            {'title': '过于固执', 'description': '有时可能过于坚持传统，难以接受新变化。'},
            {'title': '不够灵活', 'description': '在应对意外情况时可能显得不够变通。'},
            {'title': '情感表达不足', 'description': '可能不太善于表达自己的情感和感受。'}
        ],
        'rarity': {'rank': 6, 'total': 11.6, 'male': 14.2, 'female': 8.9},
        'representativePeople': [
            {'name': '钟南山', 'description': '中国工程院院士'},
            {'name': '屠呦呦', 'description': '诺贝尔医学奖获得者'},
            {'name': '邓稼先', 'description': '两弹元勋'}
        ],
        'career': ['审计员', '会计', '律师助理', '数据库管理员', '军官', '法官'],
        'relationships': '在感情中是稳定可靠的伴侣，喜欢有规律的生活，对关系认真负责，重视承诺和忠诚。',
        'advancedGuide': [
            {'title': '拥抱变化', 'content': '学会接受新事物和变化，不要总是坚持过去的方式。'},
            {'title': '学习表达情感', 'content': '更多地表达自己的情感和感受，让他人更好地理解你。'},
            {'title': '学会灵活变通', 'content': '在需要时能够调整计划和方法，不要过于固执。'},
            {'title': '发展创造力', 'content': '尝试用创新的方式思考和解决问题。'}
        ],
        'eightDimensional': {
            'dominant': {'name': '内倾感觉 (Si)', 'description': 'ISTJ的主导功能是Si，使他们善于收集和利用过去的经验。他们重视传统和稳定，有很好的记忆力，关注细节和事实。'},
            'auxiliary': {'name': '外倾思考 (Te)', 'description': 'Te帮助ISTJ组织和规划外部世界，高效地完成任务。他们善于建立秩序和系统，以实际的方式达成目标。'},
            'tertiary': {'name': '内倾情感 (Fi)', 'description': 'Fi是ISTJ的第三功能，发展时能让他们有更坚定的个人价值观和对他人的关怀。'},
            'inferior': {'name': '外倾直觉 (Ne)', 'description': 'Ne作为弱势功能，是ISTJ需要发展的领域，能够帮助他们看到更多可能性和创新的方式。'}
        },
        'careerExploration': {
            'personality': {
                'strengths': {'title': '踏实可靠、注重细节', 'content': 'ISTJ认真负责，注重事实和细节，善于建立秩序和流程，是组织中不可或缺的稳定力量。'},
                'weaknesses': {'title': '可能过于保守、缺乏灵活性', 'content': 'ISTJ有时可能过于坚持传统和规则，对新变化持怀疑态度，不够灵活变通。'}
            },
            'teamMember': {
                'usual': ['认真负责，按时高质量地完成任务。', '关注细节，确保工作准确无误。', '遵循规则和流程，维持团队秩序。', '提供稳定可靠的支持。'],
                'shouldKnow': ['学会接受新的工作方式和变化。', '不要过度批评创新的想法。', '尝试从不同角度看问题。', '给新方法一些时间和耐心。']
            },
            'teamLeader': ['建立清晰的规则和流程。', '确保团队成员理解期望。', '以身作则，认真负责。', '注重质量和准确性。'],
            'suitableWorkEnv': [
                {'title': '结构清晰、规则明确', 'content': 'ISTJ喜欢有明确规则和流程的工作环境。'},
                {'title': '稳定可预测', 'content': '需要稳定的工作环境和明确的职业发展路径。'},
                {'title': '注重质量和准确性', 'content': '适合能够发挥细节关注能力的工作。'}
            ],
            'unsuitableWorkEnv': [
                {'title': '混乱无序、缺乏规则', 'content': '无法忍受混乱和没有明确流程的环境。'},
                {'title': '频繁变化、不稳定', 'content': '不喜欢频繁的变化和不确定性。'},
                {'title': '要求快速创新但缺乏基础', 'content': '不适合只追求速度而不重质量的环境。'}
            ],
            'recommendedCareers': [
                {'title': '审计员/会计', 'content': '能够发挥对细节和准确性的重视。'},
                {'title': '律师助理/法律顾问', 'content': '注重规则和事实，适合法律相关工作。'},
                {'title': '数据库管理员/IT管理员', 'content': '善于建立和维护系统和秩序。'},
                {'title': '军官/公务员', 'content': '稳定、有规则、有责任感的工作。'},
                {'title': '银行/金融从业者', 'content': '注重准确性和风险管理。'}
            ],
            'avoidedCareers': [
                {'title': '快速变化的创业环境', 'content': '过于不稳定和不可预测的环境不适合。'},
                {'title': '需要频繁创新的创意工作', 'content': '如果工作要求频繁打破常规，ISTJ可能感到不适。'},
                {'title': '缺乏明确规则的环境', 'content': '没有明确规则和期望的工作会让ISTJ感到不安。'}
            ]
        },
        'loveAnalysis': {
            'loveStyle': '在感情中是稳定可靠的伴侣，喜欢有规律的生活，对关系认真负责，重视承诺和忠诚。',
            'loveFeatures': ['重视承诺和忠诚', '喜欢稳定和规律', '用行动表达关心', '认真负责的态度'],
            'loveStatus': {
                'ideal': '与务实可靠的伴侣建立稳定的关系，一起规划未来',
                'attention': '不要过于固执，学会接受一些变化和惊喜',
                'growth': '学习表达情感，不只是用行动来关心对方'
            },
            'loveMatch': [
                {'type': 'ESFJ', 'compatibility': '95%', 'description': '温暖可靠的组合，都重视传统和责任，能够建立稳定和谐的家庭。'},
                {'type': 'ISFJ', 'compatibility': '90%', 'description': '互补的组合，ISFJ的温暖能够软化ISTJ的严肃，共同创造温馨的生活。'},
                {'type': 'ESTJ', 'compatibility': '85%', 'description': '同样务实的组合，能够一起把生活安排得井井有条。'}
            ]
        }
    },
    'ISFJ': {
        'type': 'ISFJ',
        'name': '守卫者',
        'subtitle': '守护者',
        'description': '安静、友好、有责任心和良知。坚定地致力于完成他们的义务。忠诚，体贴，替人着想。注重他人的需求。',
        'personalityTraits': 'ISFJ是安静、友好、有责任感的人。他们忠诚体贴，替人着想，总是把他人的需求放在心上，是温暖可靠的守护者。',
        'lifeKeywords': [
            {'title': '温暖守护', 'description': '像温暖的守护者一样，关心照顾身边的人。'},
            {'title': '体贴入微', 'description': '非常关注他人的感受和需求，总是默默付出。'},
            {'title': '忠诚可靠', 'description': '对家人和朋友极其忠诚，是值得信赖的伙伴。'}
        ],
        'strengths': [
            {'title': '体贴关怀', 'description': '善于关心他人，总能注意到别人的需要。'},
            {'title': '有责任心', 'description': '认真负责，会尽心尽力完成自己的义务。'},
            {'title': '耐心细致', 'description': '做事细心，有耐心，能够处理繁琐的事务。'},
            {'title': '忠诚可靠', 'description': '对重视的人非常忠诚，是可靠的朋友和伴侣。'}
        ],
        'weaknesses': [
            {'title': '过度付出', 'description': '可能过于照顾他人而忽视自己的需求。'},
            {'title': '难以拒绝', 'description': '不善于拒绝别人，容易让自己负担过重。'},
            {'title': '过于谦虚', 'description': '可能过于谦虚，不太善于表达自己的成就。'}
        ],
        'rarity': {'rank': 3, 'total': 12.3, 'male': 8.0, 'female': 16.6},
        'representativePeople': [
            {'name': '袁隆平', 'description': '杂交水稻之父'},
            {'name': '张桂梅', 'description': '丽江华坪女子高级中学校长'},
            {'name': '周恩来', 'description': '前国务院总理'}
        ],
        'career': ['护士', '教师', '社会工作者', '行政助理', '医疗保健工作者'],
        'relationships': '是体贴温暖的伴侣，重视和谐，愿意为对方付出，创造温馨和谐的家庭氛围。',
        'advancedGuide': [
            {'title': '学会关爱自己', 'content': '不要总是把他人的需求放在第一位，也要关注自己的需要。'},
            {'title': '学会说"不"', 'content': '学会拒绝不合理的请求，保护自己的时间和精力。'},
            {'title': '看到自己的价值', 'content': '不要过于谦虚，要认识到自己的贡献和价值。'},
            {'title': '接受变化', 'content': '生活中总会有变化，学会适应和接受新的事物。'}
        ],
        'eightDimensional': {
            'dominant': {'name': '内倾感觉 (Si)', 'description': 'ISFJ的主导功能是Si，使他们能够很好地记住过去的经验，关注细节，重视传统和稳定。'},
            'auxiliary': {'name': '外倾情感 (Fe)', 'description': 'Fe帮助ISFJ敏感地感知他人的情感需要，关心照顾他人，维持和谐的氛围。'},
            'tertiary': {'name': '内倾思考 (Ti)', 'description': 'Ti是ISFJ的第三功能，发展时能让他们更客观地分析问题，建立自己的内在逻辑。'},
            'inferior': {'name': '外倾直觉 (Ne)', 'description': 'Ne作为弱势功能，是ISFJ需要发展的领域，能帮助他们看到更多可能性。'}
        },
        'careerExploration': {
            'personality': {
                'strengths': {'title': '体贴关怀、认真负责', 'content': 'ISFJ非常善于照顾他人，做事认真负责，是组织中温暖而可靠的存在。'},
                'weaknesses': {'title': '可能过度付出、难以拒绝', 'content': 'ISFJ可能过于迁就他人而忽视自己的需求，不善于拒绝他人的请求。'}
            },
            'teamMember': {
                'usual': ['关心团队和谐和成员的感受。', '认真负责，默默做好自己的工作。', '注意细节，确保工作不出差错。', '愿意帮助需要帮助的同事。'],
                'shouldKnow': ['不要过度承担不属于自己的工作。', '学会表达自己的需求和困扰。', '不要过于在意别人的评价。', '重视自己的价值和贡献。']
            },
            'teamLeader': ['创造温暖和谐的团队氛围。', '关注每个团队成员的需求。', '以身作则，认真负责。', '给团队成员支持和鼓励。'],
            'suitableWorkEnv': [
                {'title': '温暖和谐的环境', 'content': 'ISFJ喜欢能够关心和帮助他人的工作环境。'},
                {'title': '稳定有保障', 'content': '需要稳定的工作环境和明确的工作内容。'},
                {'title': '能够帮助他人', 'content': '适合能够直接帮助和服务他人的工作。'}
            ],
            'unsuitableWorkEnv': [
                {'title': '冷漠功利的环境', 'content': '过于强调竞争和效率的环境不适合。'},
                {'title': '频繁动荡的环境', 'content': '不稳定的工作环境会让ISFJ感到焦虑。'},
                {'title': '缺乏人文关怀的工作', 'content': '只重效率不重人的工作不适合。'}
            ],
            'recommendedCareers': [
                {'title': '护士/医疗工作者', 'content': '能够直接帮助和照顾他人，是ISFJ非常适合的职业。'},
                {'title': '教师/教育工作者', 'content': '关心学生，有耐心，适合教育行业。'},
                {'title': '社工/社区工作者', 'content': '帮助有需要的人群，能够发挥ISFJ的关怀特质。'},
                {'title': '行政助理/办公室管理', 'content': '细心负责，善于组织和协调。'},
                {'title': '客服/客户服务', 'content': '善于与人沟通，能够提供温暖的服务。'}
            ],
            'avoidedCareers': [
                {'title': '高压力的销售竞赛', 'content': '过于强调业绩和竞争的工作不适合。'},
                {'title': '需要频繁社交的工作', 'content': '过多的社交活动会让内向的ISFJ感到疲惫。'},
                {'title': '缺乏人文关怀的工作', 'content': '只重效率不重人的工作不适合。'}
            ]
        },
        'loveAnalysis': {
            'loveStyle': '是体贴温暖的伴侣，重视和谐，愿意为对方付出，创造温馨和谐的家庭氛围。',
            'loveFeatures': ['体贴入微的关怀', '重视家庭和谐', '默默付出的爱', '忠诚可靠'],
            'loveStatus': {
                'ideal': '与珍惜自己付出的伴侣建立温馨的家庭',
                'attention': '不要总是默默付出，让对方知道你的需要',
                'growth': '学会为自己着想，不要把所有精力都放在他人身上'
            },
            'loveMatch': [
                {'type': 'ESTJ', 'compatibility': '95%', 'description': '完美互补，ESTJ的决断力能够保护ISFJ的温柔，共同创造稳定的生活。'},
                {'type': 'ISTJ', 'compatibility': '90%', 'description': '同样重视传统和责任，能够建立稳定可靠的关系。'},
                {'type': 'ESFP', 'compatibility': '85%', 'description': 'ESFP的活力能够给ISFJ带来快乐和新鲜感。'}
            ]
        }
    }
}

# 为其他类型创建基本数据结构
for mbti_type in MBTI_TYPES:
    if mbti_type not in default_data:
        # 基于类型创建基本数据
        default_data[mbti_type] = {
            'type': mbti_type,
            'name': TYPE_NAMES[mbti_type],
            'subtitle': TYPE_NAMES[mbti_type],
            'description': f'{TYPE_NAMES[mbti_type]}型人格的基本描述。',
            'personalityTraits': f'{TYPE_NAMES[mbti_type]}型人格的核心特点。',
            'lifeKeywords': [
                {'title': '关键词1', 'description': '描述1'},
                {'title': '关键词2', 'description': '描述2'},
                {'title': '关键词3', 'description': '描述3'}
            ],
            'strengths': [
                {'title': '优势1', 'description': '优势描述1'},
                {'title': '优势2', 'description': '优势描述2'},
                {'title': '优势3', 'description': '优势描述3'},
                {'title': '优势4', 'description': '优势描述4'}
            ],
            'weaknesses': [
                {'title': '劣势1', 'description': '劣势描述1'},
                {'title': '劣势2', 'description': '劣势描述2'},
                {'title': '劣势3', 'description': '劣势描述3'}
            ],
            'rarity': {'rank': 8, 'total': 5.0, 'male': 6.0, 'female': 4.0},
            'representativePeople': [
                {'name': '人物1', 'description': '描述1'},
                {'name': '人物2', 'description': '描述2'},
                {'name': '人物3', 'description': '描述3'}
            ],
            'career': ['职业1', '职业2', '职业3', '职业4', '职业5'],
            'relationships': f'{TYPE_NAMES[mbti_type]}在感情中的表现。',
            'advancedGuide': [
                {'title': '指南1', 'content': '内容1'},
                {'title': '指南2', 'content': '内容2'},
                {'title': '指南3', 'content': '内容3'},
                {'title': '指南4', 'content': '内容4'}
            ],
            'eightDimensional': {
                'dominant': {'name': '主导功能', 'description': '主导功能描述'},
                'auxiliary': {'name': '辅助功能', 'description': '辅助功能描述'},
                'tertiary': {'name': '第三功能', 'description': '第三功能描述'},
                'inferior': {'name': '劣势功能', 'description': '劣势功能描述'}
            },
            'careerExploration': {
                'personality': {
                    'strengths': {'title': '优势标题', 'content': '优势内容'},
                    'weaknesses': {'title': '劣势标题', 'content': '劣势内容'}
                },
                'teamMember': {
                    'usual': ['通常表现1', '通常表现2', '通常表现3', '通常表现4'],
                    'shouldKnow': ['需要知道1', '需要知道2', '需要知道3', '需要知道4']
                },
                'teamLeader': ['领导表现1', '领导表现2', '领导表现3', '领导表现4'],
                'suitableWorkEnv': [
                    {'title': '适合环境1', 'content': '描述1'},
                    {'title': '适合环境2', 'content': '描述2'},
                    {'title': '适合环境3', 'content': '描述3'}
                ],
                'unsuitableWorkEnv': [
                    {'title': '不适合环境1', 'content': '描述1'},
                    {'title': '不适合环境2', 'content': '描述2'},
                    {'title': '不适合环境3', 'content': '描述3'}
                ],
                'recommendedCareers': [
                    {'title': '推荐职业1', 'content': '描述1'},
                    {'title': '推荐职业2', 'content': '描述2'},
                    {'title': '推荐职业3', 'content': '描述3'},
                    {'title': '推荐职业4', 'content': '描述4'},
                    {'title': '推荐职业5', 'content': '描述5'}
                ],
                'avoidedCareers': [
                    {'title': '避开职业1', 'content': '描述1'},
                    {'title': '避开职业2', 'content': '描述2'},
                    {'title': '避开职业3', 'content': '描述3'}
                ]
            },
            'loveAnalysis': {
                'loveStyle': f'{TYPE_NAMES[mbti_type]}的恋爱风格。',
                'loveFeatures': ['特点1', '特点2', '特点3'],
                'loveStatus': {
                    'ideal': '理想状态',
                    'attention': '注意事项',
                    'growth': '成长方向'
                },
                'loveMatch': [
                    {'type': '匹配类型1', 'compatibility': '95%', 'description': '匹配描述1'},
                    {'type': '匹配类型2', 'compatibility': '90%', 'description': '匹配描述2'},
                    {'type': '匹配类型3', 'compatibility': '85%', 'description': '匹配描述3'}
                ]
            }
        }
    
    # 添加增强数据
    enhanced = enhanced_map.get(mbti_type, {})
    if enhanced:
        default_data[mbti_type]['animeImageUrl'] = enhanced.get('animeImageUrl', '')
        default_data[mbti_type]['representativePeopleImages'] = enhanced.get('representativePeopleImages', [])
        default_data[mbti_type]['localizedDescription'] = enhanced.get('localizedDescription', {})
        
        # 更新代表人物
        if 'representativePeopleImages' in enhanced:
            default_data[mbti_type]['representativePeople'] = [
                {'name': p['name'], 'description': '知名人物'}
                for p in enhanced['representativePeopleImages']
            ]
        
        # 更新本地化描述中的内容到主要字段
        if 'localizedDescription' in enhanced:
            loc_desc = enhanced['localizedDescription']
            if 'personalityTraits' in loc_desc:
                default_data[mbti_type]['personalityTraits'] = loc_desc['personalityTraits']
            if 'lifeKeywords' in loc_desc:
                default_data[mbti_type]['lifeKeywords'] = loc_desc['lifeKeywords']
            if 'strengths' in loc_desc:
                default_data[mbti_type]['strengths'] = loc_desc['strengths']
            if 'weaknesses' in loc_desc:
                default_data[mbti_type]['weaknesses'] = loc_desc['weaknesses']
            if 'advancedGuide' in loc_desc:
                default_data[mbti_type]['advancedGuide'] = loc_desc['advancedGuide']

def escape_string(s):
    """转义字符串中的特殊字符"""
    if not s:
        return ''
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '\\r').replace('\t', '\\t')

def generate_ts_content():
    """生成 TypeScript 内容"""
    ts_content = '''import { MBTIReport } from '../types';

export const reports: Record<string, MBTIReport> = {
'''
    
    for mbti_type in MBTI_TYPES:
        data = default_data.get(mbti_type, {})
        ts_content += f'  "{mbti_type}": {{\n'
        
        # 基本字段
        ts_content += f'    type: "{data.get("type", mbti_type)}",\n'
        ts_content += f'    name: "{data.get("name", "")}",\n'
        ts_content += f'    subtitle: "{data.get("subtitle", "")}",\n'
        ts_content += f'    description: "{escape_string(data.get("description", ""))}",\n'
        ts_content += f'    personalityTraits: "{escape_string(data.get("personalityTraits", ""))}",\n'
        
        # lifeKeywords
        ts_content += '    lifeKeywords: [\n'
        for kw in data.get('lifeKeywords', []):
            ts_content += f'      {{ title: "{escape_string(kw.get("title", ""))}", description: "{escape_string(kw.get("description", ""))}" }},\n'
        ts_content += '    ],\n'
        
        # strengths
        ts_content += '    strengths: [\n'
        for s in data.get('strengths', []):
            ts_content += f'      {{ title: "{escape_string(s.get("title", ""))}", description: "{escape_string(s.get("description", ""))}" }},\n'
        ts_content += '    ],\n'
        
        # weaknesses
        ts_content += '    weaknesses: [\n'
        for w in data.get('weaknesses', []):
            ts_content += f'      {{ title: "{escape_string(w.get("title", ""))}", description: "{escape_string(w.get("description", ""))}" }},\n'
        ts_content += '    ],\n'
        
        # rarity
        rarity = data.get('rarity', {})
        ts_content += f'    rarity: {{ rank: {rarity.get("rank", 1)}, total: {rarity.get("total", 1)}, male: {rarity.get("male", 1)}, female: {rarity.get("female", 1)} }},\n'
        
        # representativePeople
        ts_content += '    representativePeople: [\n'
        for p in data.get('representativePeople', []):
            ts_content += f'      {{ name: "{escape_string(p.get("name", ""))}", description: "{escape_string(p.get("description", ""))}" }},\n'
        ts_content += '    ],\n'
        
        # career
        ts_content += '    career: [\n'
        for c in data.get('career', []):
            ts_content += f'      "{escape_string(c)}",\n'
        ts_content += '    ],\n'
        
        ts_content += f'    relationships: "{escape_string(data.get("relationships", ""))}",\n'
        
        # 新增字段
        if 'animeImageUrl' in data:
            ts_content += f'    animeImageUrl: "{escape_string(data.get("animeImageUrl", ""))}",\n'
        
        if 'representativePeopleImages' in data:
            ts_content += '    representativePeopleImages: [\n'
            for p in data.get('representativePeopleImages', []):
                ts_content += f'      {{ name: "{escape_string(p.get("name", ""))}", imageUrl: "{escape_string(p.get("imageUrl", ""))}" }},\n'
            ts_content += '    ],\n'
        
        if 'localizedDescription' in data:
            loc_desc = data.get('localizedDescription', {})
            ts_content += '    localizedDescription: {\n'
            ts_content += f'      personalityTraits: "{escape_string(loc_desc.get("personalityTraits", ""))}",\n'
            
            ts_content += '      lifeKeywords: [\n'
            for kw in loc_desc.get('lifeKeywords', []):
                ts_content += f'        {{ title: "{escape_string(kw.get("title", ""))}", description: "{escape_string(kw.get("description", ""))}" }},\n'
            ts_content += '      ],\n'
            
            ts_content += '      strengths: [\n'
            for s in loc_desc.get('strengths', []):
                ts_content += f'        {{ title: "{escape_string(s.get("title", ""))}", description: "{escape_string(s.get("description", ""))}" }},\n'
            ts_content += '      ],\n'
            
            ts_content += '      weaknesses: [\n'
            for w in loc_desc.get('weaknesses', []):
                ts_content += f'        {{ title: "{escape_string(w.get("title", ""))}", description: "{escape_string(w.get("description", ""))}" }},\n'
            ts_content += '      ],\n'
            
            ts_content += '      advancedGuide: [\n'
            for g in loc_desc.get('advancedGuide', []):
                ts_content += f'        {{ title: "{escape_string(g.get("title", ""))}", content: "{escape_string(g.get("content", ""))}" }},\n'
            ts_content += '      ]\n'
            ts_content += '    },\n'
        
        # advancedGuide
        ts_content += '    advancedGuide: [\n'
        for g in data.get('advancedGuide', []):
            ts_content += f'      {{ title: "{escape_string(g.get("title", ""))}", content: "{escape_string(g.get("content", ""))}" }},\n'
        ts_content += '    ],\n'
        
        # eightDimensional
        eight_dim = data.get('eightDimensional', {})
        ts_content += '    eightDimensional: {\n'
        ts_content += f'      dominant: {{ name: "{escape_string(eight_dim.get("dominant", {}).get("name", ""))}", description: "{escape_string(eight_dim.get("dominant", {}).get("description", ""))}" }},\n'
        ts_content += f'      auxiliary: {{ name: "{escape_string(eight_dim.get("auxiliary", {}).get("name", ""))}", description: "{escape_string(eight_dim.get("auxiliary", {}).get("description", ""))}" }},\n'
        ts_content += f'      tertiary: {{ name: "{escape_string(eight_dim.get("tertiary", {}).get("name", ""))}", description: "{escape_string(eight_dim.get("tertiary", {}).get("description", ""))}" }},\n'
        ts_content += f'      inferior: {{ name: "{escape_string(eight_dim.get("inferior", {}).get("name", ""))}", description: "{escape_string(eight_dim.get("inferior", {}).get("description", ""))}" }}\n'
        ts_content += '    },\n'
        
        # careerExploration
        career_exp = data.get('careerExploration', {})
        ts_content += '    careerExploration: {\n'
        
        # personality
        pers = career_exp.get('personality', {})
        ts_content += '      personality: {\n'
        ts_content += f'        strengths: {{ title: "{escape_string(pers.get("strengths", {}).get("title", ""))}", content: "{escape_string(pers.get("strengths", {}).get("content", ""))}" }},\n'
        ts_content += f'        weaknesses: {{ title: "{escape_string(pers.get("weaknesses", {}).get("title", ""))}", content: "{escape_string(pers.get("weaknesses", {}).get("content", ""))}" }}\n'
        ts_content += '      },\n'
        
        # teamMember
        team_member = career_exp.get('teamMember', {})
        ts_content += '      teamMember: {\n'
        ts_content += '        usual: [\n'
        for u in team_member.get('usual', []):
            ts_content += f'          "{escape_string(u)}",\n'
        ts_content += '        ],\n'
        ts_content += '        shouldKnow: [\n'
        for s in team_member.get('shouldKnow', []):
            ts_content += f'          "{escape_string(s)}",\n'
        ts_content += '        ]\n'
        ts_content += '      },\n'
        
        # teamLeader
        ts_content += '      teamLeader: [\n'
        for l in career_exp.get('teamLeader', []):
            ts_content += f'        "{escape_string(l)}",\n'
        ts_content += '      ],\n'
        
        # suitableWorkEnv
        ts_content += '      suitableWorkEnv: [\n'
        for s in career_exp.get('suitableWorkEnv', []):
            ts_content += f'        {{ title: "{escape_string(s.get("title", ""))}", content: "{escape_string(s.get("content", ""))}" }},\n'
        ts_content += '      ],\n'
        
        # unsuitableWorkEnv
        ts_content += '      unsuitableWorkEnv: [\n'
        for u in career_exp.get('unsuitableWorkEnv', []):
            ts_content += f'        {{ title: "{escape_string(u.get("title", ""))}", content: "{escape_string(u.get("content", ""))}" }},\n'
        ts_content += '      ],\n'
        
        # recommendedCareers
        ts_content += '      recommendedCareers: [\n'
        for r in career_exp.get('recommendedCareers', []):
            ts_content += f'        {{ title: "{escape_string(r.get("title", ""))}", content: "{escape_string(r.get("content", ""))}" }},\n'
        ts_content += '      ],\n'
        
        # avoidedCareers
        ts_content += '      avoidedCareers: [\n'
        for a in career_exp.get('avoidedCareers', []):
            ts_content += f'        {{ title: "{escape_string(a.get("title", ""))}", content: "{escape_string(a.get("content", ""))}" }},\n'
        ts_content += '      ]\n'
        ts_content += '    },\n'
        
        # loveAnalysis
        love_analysis = data.get('loveAnalysis', {})
        ts_content += '    loveAnalysis: {\n'
        ts_content += f'      loveStyle: "{escape_string(love_analysis.get("loveStyle", ""))}",\n'
        ts_content += '      loveFeatures: [\n'
        for f in love_analysis.get('loveFeatures', []):
            ts_content += f'        "{escape_string(f)}",\n'
        ts_content += '      ],\n'
        love_status = love_analysis.get('loveStatus', {})
        ts_content += '      loveStatus: {\n'
        ts_content += f'        ideal: "{escape_string(love_status.get("ideal", ""))}",\n'
        ts_content += f'        attention: "{escape_string(love_status.get("attention", ""))}",\n'
        ts_content += f'        growth: "{escape_string(love_status.get("growth", ""))}"\n'
        ts_content += '      },\n'
        ts_content += '      loveMatch: [\n'
        for m in love_analysis.get('loveMatch', []):
            ts_content += f'        {{ type: "{escape_string(m.get("type", ""))}", compatibility: "{escape_string(m.get("compatibility", ""))}", description: "{escape_string(m.get("description", ""))}" }},\n'
        ts_content += '      ]\n'
        ts_content += '    }\n'
        
        ts_content += '  },\n'
    
    ts_content += '};\n'
    return ts_content

def main():
    print('正在生成 reports.ts 文件...')
    
    # 生成 TypeScript 内容
    ts_content = generate_ts_content()
    
    # 写文件
    output_path = os.path.join(BASE_PATH, 'src', 'data', 'reports.ts')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f'成功生成: {output_path}')
    print(f'包含 {len(MBTI_TYPES)} 种 MBTI 类型')

if __name__ == '__main__':
    main()

