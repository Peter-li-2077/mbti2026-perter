
import json
import re

# 读取增强数据
with open('mbti_enhanced_data.json', 'r', encoding='utf-8') as f:
    enhanced_data = json.load(f)

# 创建类型数据映射
type_map = {}
for item in enhanced_data['mbtiTypes']:
    type_map[item['type']] = item

# 中国代表人物映射
chinese_reps = {
    'ISTJ': [{'name': '钟南山', 'description': '中国工程院院士'}, {'name': '屠呦呦', 'description': '诺贝尔医学奖获得者'}],
    'ISFJ': [{'name': '袁隆平', 'description': '杂交水稻之父'}, {'name': '张桂梅', 'description': '华坪女高校长'}],
    'INFJ': [{'name': '鲁迅', 'description': '文学家、思想家'}, {'name': '杨绛', 'description': '作家、翻译家'}],
    'INTJ': [{'name': '钱学森', 'description': '中国航天之父'}, {'name': '任正非', 'description': '华为创始人'}],
    'ISTP': [{'name': '李小龙', 'description': '武术家、演员'}, {'name': '林丹', 'description': '羽毛球世界冠军'}],
    'ISFP': [{'name': '王菲', 'description': '歌手'}, {'name': '周杰伦', 'description': '音乐人'}],
    'INFP': [{'name': '李白', 'description': '唐代诗人'}, {'name': '宫崎骏', 'description': '动画导演'}],
    'INTP': [{'name': '陈景润', 'description': '数学家'}, {'name': '华罗庚', 'description': '数学家'}],
    'ESTP': [{'name': '马云', 'description': '阿里巴巴创始人'}, {'name': '王健林', 'description': '万达集团董事长'}],
    'ESTJ': [{'name': '董明珠', 'description': '格力电器董事长'}, {'name': '柳传志', 'description': '联想集团创始人'}],
    'ESFP': [{'name': '张艺兴', 'description': '歌手、演员'}, {'name': '迪丽热巴', 'description': '演员'}],
    'ESFJ': [{'name': '何炅', 'description': '主持人'}, {'name': '谢娜', 'description': '主持人'}],
    'ENFP': [{'name': '撒贝宁', 'description': '主持人'}, {'name': '大张伟', 'description': '音乐人'}],
    'ENFJ': [{'name': '周恩来', 'description': '中华人民共和国总理'}, {'name': '蔡康永', 'description': '主持人、作家'}],
    'ENTP': [{'name': '高晓松', 'description': '音乐人、导演'}, {'name': '罗永浩', 'description': '企业家'}],
    'ENTJ': [{'name': '邓小平', 'description': '改革开放总设计师'}, {'name': '李嘉诚', 'description': '企业家'}]
}

# 读取并备份原始文件
with open('src/data/reports.ts', 'r', encoding='utf-8') as f:
    content = f.read()

with open('src/data/reports.ts.backup.final', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ 已创建备份: reports.ts.backup.final")

# 为每个类型更新数据
types_to_update = ['ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 
                   'ESTP', 'ESTJ', 'ESFP', 'ESFJ', 'ENFP', 'ENFJ', 'ENTP', 'ENTJ']

for mbti_type in types_to_update:
    if mbti_type not in type_map:
        print(f"⚠ 跳过 {mbti_type}: 增强数据中未找到")
        continue
    
    data = type_map[mbti_type]
    
    # 找到类型定义的位置
    pattern = rf'"{mbti_type}":\s*\{{(.*?)(?=\n\s*"[A-Z]{{4}}":|\n\s*\}})\n\s*\}}'
    match = re.search(pattern, content, re.DOTALL)
    
    if not match:
        print(f"⚠ 跳过 {mbti_type}: 未在文件中找到")
        continue
    
    old_section = match.group(0)
    
    # 1. 更新代表人物
    rep_pattern = r'representativePeople:\s*\[[^\]]*\]'
    new_rep = f'representativePeople: {json.dumps(chinese_reps[mbti_type], ensure_ascii=False)}'
    updated = re.sub(rep_pattern, new_rep, old_section)
    
    # 2. 添加新字段
    # 先检查是否已有这些字段
    if 'animeImageUrl:' not in updated:
        # 在 representativePeople 后插入新字段
        insert_pattern = r'(representativePeople:\s*\[[^\]]*\])'
        
        anime_field = f'animeImageUrl: "{data["animeImageUrl"]}"'
        rep_images_field = f'representativePeopleImages: {json.dumps(data["representativePeopleImages"], ensure_ascii=False)}'
        
        # 构建 localizedDescription
        loc_desc = data["localizedDescription"]
        loc_desc_str = f'localizedDescription: {{ personalityTraits: "{loc_desc["personalityTraits"]}", lifeKeywords: {json.dumps(loc_desc["lifeKeywords"], ensure_ascii=False)}, strengths: {json.dumps(loc_desc["strengths"], ensure_ascii=False)}, weaknesses: {json.dumps(loc_desc["weaknesses"], ensure_ascii=False)}, advancedGuide: {json.dumps(loc_desc["advancedGuide"], ensure_ascii=False)} }}'
        
        # 插入这些字段
        insert_content = f'\\1,\n    {anime_field},\n    {rep_images_field},\n    {loc_desc_str}'
        updated = re.sub(insert_pattern, insert_content, updated, flags=re.DOTALL)
    
    # 更新内容
    content = content.replace(old_section, updated)
    print(f"✓ 已更新 {mbti_type}")

# 写入更新后的文件
with open('src/data/reports.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✅ 所有类型更新完成！")
print("📝 备份文件: src/data/reports.ts.backup.final")
