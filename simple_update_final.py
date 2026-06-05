
import json

# 读取增强数据
with open('mbti_enhanced_data.json', 'r', encoding='utf-8') as f:
    enhanced_data = json.load(f)

type_map = {t['type']: t for t in enhanced_data['mbtiTypes']}

# 中国代表人物数据
chinese_reps = {
    'ESFP': [
        {'name': '张艺兴', 'description': '歌手、演员'},
        {'name': '迪丽热巴', 'description': '演员'}
    ],
    'ESFJ': [
        {'name': '何炅', 'description': '主持人'},
        {'name': '谢娜', 'description': '主持人'}
    ],
    'ENFP': [
        {'name': '撒贝宁', 'description': '主持人'},
        {'name': '大张伟', 'description': '音乐人'}
    ],
    'ENFJ': [
        {'name': '周恩来', 'description': '中华人民共和国总理'},
        {'name': '蔡康永', 'description': '主持人、作家'}
    ],
    'ENTP': [
        {'name': '高晓松', 'description': '音乐人、导演'},
        {'name': '罗永浩', 'description': '企业家'}
    ],
    'ENTJ': [
        {'name': '邓小平', 'description': '改革开放总设计师'},
        {'name': '李嘉诚', 'description': '企业家'}
    ]
}

# 读取原始文件
with open('src/data/reports.ts.backup', 'r', encoding='utf-8') as f:
    content = f.read()

# 逐个类型手动更新 - 这样更可靠
# 先找到ESFP类型并更新
print("Updating ESFP...")
esfp_start = content.find('"ESFP": {')
if esfp_start != -1:
    # 找到ESFJ开始的地方作为结束
    esfj_start = content.find('"ESFJ": {', esfp_start)
    esfp_content = content[esfp_start:esfj_start]
    
    # 更新代表人物
    old_rep = 'representativePeople: [\n      { name: "Donald Trump", description: "American President" },\n      { name: "Madonna", description: "Singer" },\n      { name: "Jack Nicholson", description: "Actor" }\n    ]'
    if old_rep in esfp_content:
        new_rep = '''representativePeople: [
      { name: "张艺兴", description: "歌手、演员" },
      { name: "迪丽热巴", description: "演员" }
    ]'''
        esfp_content = esfp_content.replace(old_rep, new_rep)
    
    # 添加新字段
    data = type_map['ESFP']
    insert_str = f'''
    animeImageUrl: "{data['animeImageUrl']}",
    representativePeopleImages: [
      {{ name: "{data['representativePeopleImages'][0]['name']}", imageUrl: "{data['representativePeopleImages'][0]['imageUrl']}" }},
      {{ name: "{data['representativePeopleImages'][1]['name']}", imageUrl: "{data['representativePeopleImages'][1]['imageUrl']}" }}
    ],
    localizedDescription: {{
      personalityTraits: "{data['localizedDescription']['personalityTraits']}",
      lifeKeywords: [
        {{ title: "{data['localizedDescription']['lifeKeywords'][0]['title']}", description: "{data['localizedDescription']['lifeKeywords'][0]['description']}" }},
        {{ title: "{data['localizedDescription']['lifeKeywords'][1]['title']}", description: "{data['localizedDescription']['lifeKeywords'][1]['description']}" }},
        {{ title: "{data['localizedDescription']['lifeKeywords'][2]['title']}", description: "{data['localizedDescription']['lifeKeywords'][2]['description']}" }}
      ],
      strengths: [
        {{ title: "{data['localizedDescription']['strengths'][0]['title']}", description: "{data['localizedDescription']['strengths'][0]['description']}" }},
        {{ title: "{data['localizedDescription']['strengths'][1]['title']}", description: "{data['localizedDescription']['strengths'][1]['description']}" }},
        {{ title: "{data['localizedDescription']['strengths'][2]['title']}", description: "{data['localizedDescription']['strengths'][2]['description']}" }},
        {{ title: "{data['localizedDescription']['strengths'][3]['title']}", description: "{data['localizedDescription']['strengths'][3]['description']}" }}
      ],
      weaknesses: [
        {{ title: "{data['localizedDescription']['weaknesses'][0]['title']}", description: "{data['localizedDescription']['weaknesses'][0]['description']}" }},
        {{ title: "{data['localizedDescription']['weaknesses'][1]['title']}", description: "{data['localizedDescription']['weaknesses'][1]['description']}" }},
        {{ title: "{data['localizedDescription']['weaknesses'][2]['title']}", description: "{data['localizedDescription']['weaknesses'][2]['description']}" }}
      ],
      advancedGuide: [
        {{ title: "{data['localizedDescription']['advancedGuide'][0]['title']}", content: "{data['localizedDescription']['advancedGuide'][0]['content']}" }},
        {{ title: "{data['localizedDescription']['advancedGuide'][1]['title']}", content: "{data['localizedDescription']['advancedGuide'][1]['content']}" }},
        {{ title: "{data['localizedDescription']['advancedGuide'][2]['title']}", content: "{data['localizedDescription']['advancedGuide'][2]['content']}" }},
        {{ title: "{data['localizedDescription']['advancedGuide'][3]['title']}", content: "{data['localizedDescription']['advancedGuide'][3]['content']}" }}
      ]
    }}'''
    
    # 在representativePeople后插入
    insert_point = 'representativePeople: ['
    insert_idx = esfp_content.find(insert_point)
    if insert_idx != -1:
        # 找到这个数组的结束
        arr_end = esfp_content.find(']', insert_idx) + 1
        esfp_content = esfp_content[:arr_end] + ',' + insert_str + esfp_content[arr_end:]
    
    content = content[:esfp_start] + esfp_content + content[esfj_start:]
    print("ESFP updated")

# 现在让我用更简单的方法 - 直接创建一个新的完整文件的概念
# 由于时间关系，我将手动完成剩余类型的更新
# 首先让我保存当前进度
with open('src/data/reports.ts.temp', 'w', encoding='utf-8') as f:
    f.write(content)

print("Temporary file saved")
print("Let me now manually complete the updates...")

