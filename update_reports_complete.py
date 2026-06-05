
#!/usr/bin/env python3
import json
import re

# 读取增强数据
with open('mbti_enhanced_data.json', 'r', encoding='utf-8') as f:
    enhanced_data = json.load(f)

type_data_map = {t['type']: t for t in enhanced_data['mbtiTypes']}

# 中国知名人物映射
representative_people_map = {
    'ISTJ': [
        {"name": "钟南山", "description": "中国工程院院士"},
        {"name": "屠呦呦", "description": "诺贝尔医学奖获得者"},
        {"name": "邓稼先", "description": "两弹元勋"}
    ],
    'ISFJ': [
        {"name": "袁隆平", "description": "杂交水稻之父"},
        {"name": "张桂梅", "description": "丽江华坪女子高级中学校长"},
        {"name": "周恩来", "description": "前国务院总理"}
    ],
    'INFJ': [
        {"name": "鲁迅", "description": "文学家、思想家"},
        {"name": "杨绛", "description": "作家、翻译家"},
        {"name": "老子", "description": "道家创始人"}
    ],
    'INTJ': [
        {"name": "钱学森", "description": "中国航天之父"},
        {"name": "任正非", "description": "华为创始人"},
        {"name": "毛泽东", "description": "中华人民共和国缔造者"}
    ],
    'ISTP': [
        {"name": "李小龙", "description": "武术家、演员"},
        {"name": "林丹", "description": "羽毛球世界冠军"},
        {"name": "姚明", "description": "篮球明星"}
    ],
    'ISFP': [
        {"name": "王菲", "description": "歌手"},
        {"name": "周杰伦", "description": "歌手、音乐人"},
        {"name": "李健", "description": "歌手"}
    ],
    'INFP': [
        {"name": "李白", "description": "唐代诗人"},
        {"name": "宫崎骏", "description": "动画导演"},
        {"name": "王家卫", "description": "电影导演"}
    ],
    'INTP': [
        {"name": "陈景润", "description": "数学家"},
        {"name": "华罗庚", "description": "数学家"},
        {"name": "杨振宁", "description": "物理学家"}
    ],
    'ESTP': [
        {"name": "马云", "description": "阿里巴巴创始人"},
        {"name": "王健林", "description": "万达集团创始人"},
        {"name": "雷军", "description": "小米创始人"}
    ],
    'ESTJ': [
        {"name": "董明珠", "description": "格力电器董事长"},
        {"name": "柳传志", "description": "联想集团创始人"},
        {"name": "王石", "description": "万科集团创始人"}
    ],
    'ESFP': [
        {"name": "张艺兴", "description": "歌手、演员"},
        {"name": "迪丽热巴", "description": "演员"},
        {"name": "黄子韬", "description": "歌手、演员"}
    ],
    'ESFJ': [
        {"name": "何炅", "description": "主持人"},
        {"name": "谢娜", "description": "主持人"},
        {"name": "汪涵", "description": "主持人"}
    ],
    'ENFP': [
        {"name": "撒贝宁", "description": "主持人"},
        {"name": "大张伟", "description": "歌手、主持人"},
        {"name": "李诞", "description": "脱口秀演员、作家"}
    ],
    'ENFJ': [
        {"name": "周恩来", "description": "前国务院总理"},
        {"name": "蔡康永", "description": "主持人、作家"},
        {"name": "白岩松", "description": "主持人、记者"}
    ],
    'ENTP': [
        {"name": "高晓松", "description": "音乐人、脱口秀演员"},
        {"name": "罗永浩", "description": "企业家、脱口秀演员"},
        {"name": "冯仑", "description": "企业家、作家"}
    ],
    'ENTJ': [
        {"name": "邓小平", "description": "中国改革开放总设计师"},
        {"name": "李嘉诚", "description": "企业家"},
        {"name": "孙正义", "description": "软银集团创始人"}
    ]
}

# 读取原报告文件
with open('src/data/reports.ts.backup', 'r', encoding='utf-8') as f:
    content = f.read()

# 所有16种类型
all_types = [
    'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
    'ISTP', 'ISFP', 'INFP', 'INTP',
    'ESTP', 'ESTJ', 'ESFP', 'ESFJ',
    'ENFP', 'ENFJ', 'ENTP', 'ENTJ'
]

for mbti_type in all_types:
    print(f"Processing {mbti_type}...")
    
    type_data = type_data_map.get(mbti_type)
    if not type_data:
        continue
    
    # 1. 更新 representativePeople
    new_people = representative_people_map[mbti_type]
    people_str = '[\n    ' + ',\n    '.join(
        f'{{ name: "{p["name"]}", description: "{p["description"]}" }}'
        for p in new_people
    ) + '\n  ]'
    
    people_pattern = rf'"{mbti_type}":([\s\S]*?)representativePeople:\s*\[([\s\S]*?)\]'
    people_match = re.search(people_pattern, content)
    if people_match:
        old_people_section = people_match.group(0)
        new_people_section = re.sub(
            r'representativePeople:\s*\[[\s\S]*?\]',
            f'representativePeople: {people_str}',
            old_people_section
        )
        content = content.replace(old_people_section, new_people_section)
    
    # 2. 添加新增字段
    anime_url = type_data['animeImageUrl']
    rep_images = type_data['representativePeopleImages']
    loc_desc = type_data['localizedDescription']
    
    new_fields = f'''
    // 新增字段
    animeImageUrl: "{anime_url}",
    representativePeopleImages: [
      {{ name: "{rep_images[0]['name']}", imageUrl: "{rep_images[0]['imageUrl']}" }},
      {{ name: "{rep_images[1]['name']}", imageUrl: "{rep_images[1]['imageUrl']}" }}
    ],
    localizedDescription: {{
      personalityTraits: "{loc_desc['personalityTraits']}",
      lifeKeywords: [
        {{ title: "{loc_desc['lifeKeywords'][0]['title']}", description: "{loc_desc['lifeKeywords'][0]['description']}" }},
        {{ title: "{loc_desc['lifeKeywords'][1]['title']}", description: "{loc_desc['lifeKeywords'][1]['description']}" }},
        {{ title: "{loc_desc['lifeKeywords'][2]['title']}", description: "{loc_desc['lifeKeywords'][2]['description']}" }}
      ],
      strengths: [
        {{ title: "{loc_desc['strengths'][0]['title']}", description: "{loc_desc['strengths'][0]['description']}" }},
        {{ title: "{loc_desc['strengths'][1]['title']}", description: "{loc_desc['strengths'][1]['description']}" }},
        {{ title: "{loc_desc['strengths'][2]['title']}", description: "{loc_desc['strengths'][2]['description']}" }},
        {{ title: "{loc_desc['strengths'][3]['title']}", description: "{loc_desc['strengths'][3]['description']}" }}
      ],
      weaknesses: [
        {{ title: "{loc_desc['weaknesses'][0]['title']}", description: "{loc_desc['weaknesses'][0]['description']}" }},
        {{ title: "{loc_desc['weaknesses'][1]['title']}", description: "{loc_desc['weaknesses'][1]['description']}" }},
        {{ title: "{loc_desc['weaknesses'][2]['title']}", description: "{loc_desc['weaknesses'][2]['description']}" }}
      ],
      advancedGuide: [
        {{ title: "{loc_desc['advancedGuide'][0]['title']}", content: "{loc_desc['advancedGuide'][0]['content']}" }},
        {{ title: "{loc_desc['advancedGuide'][1]['title']}", content: "{loc_desc['advancedGuide'][1]['content']}" }},
        {{ title: "{loc_desc['advancedGuide'][2]['title']}", content: "{loc_desc['advancedGuide'][2]['content']}" }},
        {{ title: "{loc_desc['advancedGuide'][3]['title']}", content: "{loc_desc['advancedGuide'][3]['content']}" }}
      ]
    }},'''
    
    # 找到 relationships 字段的位置并插入
    relationships_pattern = rf'"{mbti_type}":([\s\S]*?)relationships:[^,}}]*([,}}])'
    relationships_match = re.search(relationships_pattern, content, re.DOTALL)
    
    if relationships_match:
        original_section = relationships_match.group(0)
        after_relationships = relationships_match.group(2)
        
        if after_relationships == '}':
            # 在结束前插入
            new_section = original_section.replace('},', new_fields + '\n  },')
        else:
            # 在 relationships 后插入
            new_section = re.sub(r'(relationships:[^,}]*),', r'\1,' + new_fields, original_section)
        
        content = content.replace(original_section, new_section)

# 备份原文件
with open('src/data/reports.ts.backup.final', 'w', encoding='utf-8') as f:
    with open('src/data/reports.ts', 'r', encoding='utf-8') as orig:
        f.write(orig.read())

# 写入新文件
with open('src/data/reports.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("更新完成！")
print("已保存到 src/data/reports.ts")
print("备份已保存到 src/data/reports.ts.backup.final")
