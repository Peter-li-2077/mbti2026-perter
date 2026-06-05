
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

# 需要更新的类型
types_to_update = ['ESFP', 'ESFJ', 'ENFP', 'ENFJ', 'ENTP', 'ENTJ']

for mbti_type in types_to_update:
    print(f'Processing {mbti_type}...')
    
    # 找到该类型的起始位置
    type_start_marker = f'"{mbti_type}": {{'
    start_idx = content.find(type_start_marker)
    
    if start_idx == -1:
        print(f'Warning: {mbti_type} not found')
        continue
    
    # 找到该类型的结束位置 - 找到下一个类型或者文件末尾
    end_idx = len(content)
    for other_type in ['ESFJ', 'ENFP', 'ENFJ', 'ENTP', 'ENTJ', 'ISTJ']:
        if other_type != mbti_type:
            other_start = content.find(f'"{other_type}": {{', start_idx)
            if other_start != -1 and other_start < end_idx:
                end_idx = other_start
    
    type_content = content[start_idx:end_idx]
    
    # 1. 更新代表人物
    rep_start = type_content.find('representativePeople:')
    if rep_start != -1:
        # 找到数组的结束
        arr_start = type_content.find('[', rep_start)
        bracket_count = 1
        arr_end = arr_start + 1
        while bracket_count &gt; 0 and arr_end &lt; len(type_content):
            if type_content[arr_end] == '[':
                bracket_count += 1
            elif type_content[arr_end] == ']':
                bracket_count -= 1
            arr_end += 1
        
        old_rep = type_content[rep_start:arr_end]
        reps = chinese_reps[mbti_type]
        new_rep = 'representativePeople: [\n'
        for rep in reps:
            new_rep += f'      {{ name: "{rep["name"]}", description: "{rep["description"]}" }},\n'
        new_rep += '    ]'
        
        type_content = type_content.replace(old_rep, new_rep)
    
    # 2. 添加新字段（如果还没有）
    if mbti_type in type_map and 'animeImageUrl' not in type_content:
        data = type_map[mbti_type]
        
        # 在representativePeople数组后插入
        insert_point = 'representativePeople: ['
        insert_idx = type_content.find(insert_point)
        if insert_idx != -1:
            arr_start = type_content.find('[', insert_idx)
            bracket_count = 1
            arr_end = arr_start + 1
            while bracket_count &gt; 0 and arr_end &lt; len(type_content):
                if type_content[arr_end] == '[':
                    bracket_count += 1
                elif type_content[arr_end] == ']':
                    bracket_count -= 1
                arr_end += 1
            
            # 构建要插入的内容
            insert_str = ''
            insert_str += f',\n    animeImageUrl: "{data["animeImageUrl"]}"'
            insert_str += ',\n    representativePeopleImages: [\n'
            for img in data['representativePeopleImages']:
                insert_str += f'      {{ name: "{img["name"]}", imageUrl: "{img["imageUrl"]}" }},\n'
            insert_str += '    ]'
            
            ld = data['localizedDescription']
            insert_str += ',\n    localizedDescription: {\n'
            insert_str += f'      personalityTraits: "{ld["personalityTraits"]}",\n'
            insert_str += '      lifeKeywords: [\n'
            for kw in ld['lifeKeywords']:
                insert_str += f'        {{ title: "{kw["title"]}", description: "{kw["description"]}" }},\n'
            insert_str += '      ],\n'
            insert_str += '      strengths: [\n'
            for s in ld['strengths']:
                insert_str += f'        {{ title: "{s["title"]}", description: "{s["description"]}" }},\n'
            insert_str += '      ],\n'
            insert_str += '      weaknesses: [\n'
            for w in ld['weaknesses']:
                insert_str += f'        {{ title: "{w["title"]}", description: "{w["description"]}" }},\n'
            insert_str += '      ],\n'
            insert_str += '      advancedGuide: [\n'
            for ag in ld['advancedGuide']:
                insert_str += f'        {{ title: "{ag["title"]}", content: "{ag["content"]}" }},\n'
            insert_str += '      ]\n'
            insert_str += '    }'
            
            type_content = type_content[:arr_end] + insert_str + type_content[arr_end:]
    
    # 替换回原内容
    content = content[:start_idx] + type_content + content[start_idx + len(type_content):]
    print(f'Updated {mbti_type}')

# 保存备份
with open('src/data/reports.ts.backup.final2', 'w', encoding='utf-8') as f:
    with open('src/data/reports.ts', 'r', encoding='utf-8') as original:
        f.write(original.read())

# 写入最终的文件
with open('src/data/reports.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done! All types updated successfully!')

