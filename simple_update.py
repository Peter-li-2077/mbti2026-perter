
import json

# 读取增强数据
with open('mbti_enhanced_data.json', 'r', encoding='utf-8') as f:
    enhanced_data = json.load(f)

type_map = {t['type']: t for t in enhanced_data['mbtiTypes']}

# 中国代表人物数据
chinese_reps = {
    'ISTJ': [
        {'name': '钟南山', 'description': '中国工程院院士'},
        {'name': '屠呦呦', 'description': '诺贝尔医学奖获得者'}
    ],
    'ISFJ': [
        {'name': '袁隆平', 'description': '杂交水稻之父'},
        {'name': '张桂梅', 'description': '华坪女高校长'}
    ],
    'INFJ': [
        {'name': '鲁迅', 'description': '文学家、思想家'},
        {'name': '杨绛', 'description': '作家、翻译家'}
    ],
    'INTJ': [
        {'name': '钱学森', 'description': '中国航天之父'},
        {'name': '任正非', 'description': '华为创始人'}
    ],
    'ISTP': [
        {'name': '李小龙', 'description': '武术家、演员'},
        {'name': '林丹', 'description': '羽毛球世界冠军'}
    ],
    'ISFP': [
        {'name': '王菲', 'description': '歌手'},
        {'name': '周杰伦', 'description': '音乐人'}
    ],
    'INFP': [
        {'name': '李白', 'description': '唐代诗人'},
        {'name': '宫崎骏', 'description': '动画导演'}
    ],
    'INTP': [
        {'name': '陈景润', 'description': '数学家'},
        {'name': '华罗庚', 'description': '数学家'}
    ],
    'ESTP': [
        {'name': '马云', 'description': '阿里巴巴创始人'},
        {'name': '王健林', 'description': '万达集团董事长'}
    ],
    'ESTJ': [
        {'name': '董明珠', 'description': '格力电器董事长'},
        {'name': '柳传志', 'description': '联想集团创始人'}
    ],
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

# 处理每种类型
types = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP',
         'ESTP', 'ESTJ', 'ESFP', 'ESFJ', 'ENFP', 'ENFJ', 'ENTP', 'ENTJ']

for mbti_type in types:
    print(f'Processing {mbti_type}...')
    
    # 找到该类型的开始和结束位置
    type_start = f'"{mbti_type}": {{'
    start_idx = content.find(type_start)
    
    if start_idx == -1:
        print(f'  Warning: {mbti_type} not found')
        continue
        
    # 找到结束位置 - 查找下一个类型或文件结束
    end_idx = -1
    for other_type in types:
        if other_type != mbti_type:
            other_start = content.find(f'"{other_type}": {{', start_idx)
            if other_start != -1 and (end_idx == -1 or other_start < end_idx):
                end_idx = other_start
                
    if end_idx == -1:
        # 最后一个类型，找到文件结束
        end_idx = content.rfind('}')
    
    # 提取当前类型的内容
    type_content = content[start_idx:end_idx]
    
    # 更新代表人物
    rep_start = type_content.find('representativePeople:')
    if rep_start != -1:
        # 找到数组的开始和结束
        arr_start = type_content.find('[', rep_start)
        bracket_count = 1
        arr_end = arr_start + 1
        while bracket_count > 0 and arr_end < len(type_content):
            if type_content[arr_end] == '[':
                bracket_count += 1
            elif type_content[arr_end] == ']':
                bracket_count -= 1
            arr_end += 1
        
        old_rep = type_content[rep_start:arr_end]
        
        # 创建新的代表人物
        reps = chinese_reps[mbti_type]
        new_rep = 'representativePeople: [\n'
        for rep in reps:
            new_rep += f'      {{ name: "{rep["name"]}", description: "{rep["description"]}" }},\n'
        new_rep += '    ]'
        
        type_content = type_content.replace(old_rep, new_rep)
    
    # 添加新字段 - 在 representativePeople 之后
    if mbti_type in type_map and 'animeImageUrl' not in type_content:
        data = type_map[mbti_type]
        
        insert_point = 'representativePeople: ['
        insert_idx = type_content.find(insert_point)
        
        # 找到这个数组结束的位置
        if insert_idx != -1:
            arr_start = type_content.find('[', insert_idx)
            bracket_count = 1
            arr_end = arr_start + 1
            while bracket_count > 0 and arr_end < len(type_content):
                if type_content[arr_end] == '[':
                    bracket_count += 1
                elif type_content[arr_end] == ']':
                    bracket_count -= 1
                arr_end += 1
            
            # 构建要插入的内容
            insert_str = ''
            
            # 添加 animeImageUrl
            insert_str += f',\n    animeImageUrl: "{data["animeImageUrl"]}"'
            
            # 添加 representativePeopleImages
            insert_str += ',\n    representativePeopleImages: [\n'
            for img in data['representativePeopleImages']:
                insert_str += f'      {{ name: "{img["name"]}", imageUrl: "{img["imageUrl"]}" }},\n'
            insert_str += '    ]'
            
            # 添加 localizedDescription
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
            
            # 在数组结束后插入
            type_content = type_content[:arr_end] + insert_str + type_content[arr_end:]
    
    # 替换回原内容
    content = content[:start_idx] + type_content + content[start_idx + len(type_content):]

# 创建新的备份
with open('src/data/reports.ts.backup.final', 'w', encoding='utf-8') as f:
    with open('src/data/reports.ts', 'r', encoding='utf-8') as original:
        f.write(original.read())

# 写入更新后的文件
with open('src/data/reports.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done! All types updated.')

