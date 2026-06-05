
# -*- coding: utf-8 -*-
"""
MBTI 完整报告生成器
"""
import os

BASE_PATH = r"d:\Vibe Coding\MBTI\完整报告"

MBTI_TYPES = [
    "ENFJ", "ENFP", "ENTJ", "ENTP",
    "ESFJ", "ESFP", "ESTJ", "ESTP",
    "INFJ", "INFP", "INTJ", "INTP",
    "ISFJ", "ISFP", "ISTJ", "ISTP"
]

TYPE_NAMES = {
    "ENFJ": "主人公", "ENFP": "竞选者", "ENTJ": "指挥官", "ENTP": "辩论家",
    "ESFJ": "执政官", "ESFP": "表演者", "ESTJ": "总经理", "ESTP": "企业家",
    "INFJ": "提倡者", "INFP": "调停者", "INTJ": "建筑师", "INTP": "逻辑学家",
    "ISFJ": "守卫者", "ISFP": "探险家", "ISTJ": "物流师", "ISTP": "鉴赏家"
}

def generate_report(mbti_type):
    name = TYPE_NAMES[mbti_type]
    
    report = f"""# {mbti_type} {name} 完整报告

## 1. 基本画像
您的 MBTI 测试类型为 {mbti_type} ({name})。这是一个{'外向' if mbti_type[0] == 'E' else '内向'}、{'直觉' if mbti_type[1] == 'N' else '实感'}、{'情感' if mbti_type[2] == 'F' else '思考'}、{'判断' if mbti_type[3] == 'J' else '感知'}型的人格。

## 2. 人格字母介绍
- **{'E-外向' if mbti_type[0] == 'E' else 'I-内向'}**: {'从外部世界获取能量，喜欢与人互动' if mbti_type[0] == 'E' else '从内部世界获取能量，喜欢独处思考'}
- **{'N-直觉' if mbti_type[1] == 'N' else 'S-实感'}**: {'关注未来可能性，喜欢抽象概念' if mbti_type[1] == 'N' else '关注现实细节，喜欢实际经验'}
- **{'F-情感' if mbti_type[2] == 'F' else 'T-思考'}**: {'基于价值观做决定，关注和谐' if mbti_type[2] == 'F' else '基于逻辑做决定，关注公平'}
- **{'J-判断' if mbti_type[3] == 'J' else 'P-感知'}**: {'喜欢有条理、有计划的生活' if mbti_type[3] == 'J' else '喜欢灵活、开放的生活'}

## 3. 人格特点
{name}型人格的核心特点是：{'热情、关怀他人，天生的领导者' if mbti_type == 'ENFJ' else ''}
{'充满热情、创造力丰富，喜欢探索新事物' if mbti_type == 'ENFP' else ''}
{'果断、高效，天生的指挥官' if mbti_type == 'ENTJ' else ''}
{'聪明好奇，喜欢辩论和创新' if mbti_type == 'ENTP' else ''}
{'热情友好，善于社交和照顾他人' if mbti_type == 'ESFJ' else ''}
{'活在当下，享受生活，喜欢表演' if mbti_type == 'ESFP' else ''}
{'务实有条理，善于组织和管理' if mbti_type == 'ESTJ' else ''}
{'灵活适应，喜欢冒险和行动' if mbti_type == 'ESTP' else ''}
{'有洞察力，理想主义，追求意义' if mbti_type == 'INFJ' else ''}
{'理想主义，有创造力，追求真实' if mbti_type == 'INFP' else ''}
{'有战略眼光，独立高效，追求卓越' if mbti_type == 'INTJ' else ''}
{'逻辑分析，喜欢思考和探索' if mbti_type == 'INTP' else ''}
{'温暖关怀，传统可靠，守护他人' if mbti_type == 'ISFJ' else ''}
{'温和艺术，喜欢自由和体验' if mbti_type == 'ISFP' else ''}
{'可靠务实，有条理，重视传统' if mbti_type == 'ISTJ' else ''}
{'务实灵活，善于动手解决问题' if mbti_type == 'ISTP' else ''}

## 4. 人格稀有度
{mbti_type} 型人格在人群中的占比约为 {'1.5%' if mbti_type == 'INFJ' else '2.1%' if mbti_type == 'INTJ' else '2.5%' if mbti_type == 'ENFJ' else '3.3%' if mbti_type == 'INTP' else '4.3%' if mbti_type == 'ESTP' else '4.4%' if mbti_type == 'INFP' else '8.5%' if mbti_type == 'ESFP' else '8.7%' if mbti_type == 'ESTJ' else '12.3%' if mbti_type == 'ESFJ' else '8%'}。

## 5. 代表人物
参考人物包括：...

## 6. 人生关键词
- 关键词1: ...
- 关键词2: ...
- 关键词3: ...

## 7. 性格优势
1. 优势1描述
2. 优势2描述
3. 优势3描述
4. 优势4描述
5. 优势5描述

## 8. 性格劣势
1. 劣势1描述
2. 劣势2描述
3. 劣势3描述
4. 劣势4描述
5. 劣势5描述

## 9. 进阶指南
1. 指南1: ...
2. 指南2: ...
3. 指南3: ...
4. 指南4: ...

## 10. 八维解读
- 主导功能: ...
- 辅助功能: ...
- 第三功能: ...
- 劣势功能: ...

## 11. 职业探索
### 职业优势与劣势
优势：...
劣势：...

### 团队角色
作为团队成员：...
作为团队领导：...

### 适合的工作环境
1. ...
2. ...
3. ...

### 不适合的工作环境
1. ...
2. ...
3. ...

## 12. 职业推荐
1. 推荐职业1: ...
2. 推荐职业2: ...
3. 推荐职业3: ...
4. 推荐职业4: ...
5. 推荐职业5: ...
6. 推荐职业6: ...

## 13. 职业避雷
1. 避雷职业1: ...
2. 避雷职业2: ...
3. 避雷职业3: ...
4. 避雷职业4: ...
5. 避雷职业5: ...

## 14. 恋爱分析
### 恋爱风格
...

### 恋爱特点
1. 特点1: ...
2. 特点2: ...
3. 特点3: ...

### 恋爱状态
- **暧昧期**: ...
- **热恋期**: ...
- **稳定期**: ...

## 15. 恋爱配对
### 最佳匹配
1. 类型1: ...
2. 类型2: ...
3. 类型3: ...

---
报告生成时间: 2026年6月5日
"""
    return report

def main():
    if not os.path.exists(BASE_PATH):
        os.makedirs(BASE_PATH)
    
    for mbti_type in MBTI_TYPES:
        type_dir = os.path.join(BASE_PATH, mbti_type)
        if not os.path.exists(type_dir):
            os.makedirs(type_dir)
        
        report_content = generate_report(mbti_type)
        report_path = os.path.join(type_dir, f"{mbti_type}_完整报告.md")
        
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write(report_content)
        
        print(f"已生成: {report_path}")

if __name__ == "__main__":
    main()

