
import re

with open(r'd:\Vibe Coding\MBTI\src\data\reports.ts.backup', 'r', encoding='utf-8') as f:
    content = f.read()
    types = re.findall(r'"([A-Z]{4})":', content)
    print('Found types:', types)
    print('Total types:', len(set(types)))

