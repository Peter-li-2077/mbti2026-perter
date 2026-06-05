
const fs = require('fs');
const path = require('path');

// 读取增强数据
const enhancedData = JSON.parse(fs.readFileSync('mbti_enhanced_data.json', 'utf-8'));
const mbtiTypes = enhancedData.mbtiTypes;

// 创建类型数据映射
const typeDataMap = {};
mbtiTypes.forEach(type =&gt; {
  typeDataMap[type.type] = type;
});

// 代表人物扩充映射
const representativePeopleMap = {
  'INTP': [
    { name: '陈景润', description: '数学家' },
    { name: '华罗庚', description: '数学家' },
    { name: '杨振宁', description: '物理学家' }
  ],
  'ESTP': [
    { name: '马云', description: '阿里巴巴创始人' },
    { name: '王健林', description: '万达集团创始人' },
    { name: '雷军', description: '小米创始人' }
  ],
  'ESTJ': [
    { name: '董明珠', description: '格力电器董事长' },
    { name: '柳传志', description: '联想集团创始人' },
    { name: '王石', description: '万科集团创始人' }
  ],
  'ESFP': [
    { name: '张艺兴', description: '歌手、演员' },
    { name: '迪丽热巴', description: '演员' },
    { name: '黄子韬', description: '歌手、演员' }
  ],
  'ESFJ': [
    { name: '何炅', description: '主持人' },
    { name: '谢娜', description: '主持人' },
    { name: '汪涵', description: '主持人' }
  ],
  'ENFP': [
    { name: '撒贝宁', description: '主持人' },
    { name: '大张伟', description: '歌手、主持人' },
    { name: '李诞', description: '脱口秀演员、作家' }
  ],
  'ENFJ': [
    { name: '周恩来', description: '前国务院总理' },
    { name: '蔡康永', description: '主持人、作家' },
    { name: '白岩松', description: '主持人、记者' }
  ],
  'ENTP': [
    { name: '高晓松', description: '音乐人、脱口秀演员' },
    { name: '罗永浩', description: '企业家、脱口秀演员' },
    { name: '冯仑', description: '企业家、作家' }
  ],
  'ENTJ': [
    { name: '邓小平', description: '中国改革开放总设计师' },
    { name: '李嘉诚', description: '企业家' },
    { name: '孙正义', description: '软银集团创始人' }
  ]
};

// 读取原 reports.ts 文件
let reportsContent = fs.readFileSync('src/data/reports.ts', 'utf-8');

// 需要更新的类型列表
const typesToUpdate = ['INTP', 'ESTP', 'ESTJ', 'ESFP', 'ESFJ', 'ENFP', 'ENFJ', 'ENTP', 'ENTJ'];

typesToUpdate.forEach(type =&gt; {
  console.log(`正在更新 ${type}...`);
  
  const typeData = typeDataMap[type];
  if (!typeData) {
    console.warn(`未找到 ${type} 的增强数据，跳过。`);
    return;
  }
  
  // 构建要插入的新字段代码
  const newFieldsCode = `
    // 新增字段
    animeImageUrl: "${typeData.animeImageUrl}",
    representativePeopleImages: [
      { name: "${typeData.representativePeopleImages[0].name}", imageUrl: "${typeData.representativePeopleImages[0].imageUrl}" },
      { name: "${typeData.representativePeopleImages[1].name}", imageUrl: "${typeData.representativePeopleImages[1].imageUrl}" }
    ],
    localizedDescription: {
      personalityTraits: "${typeData.localizedDescription.personalityTraits}",
      lifeKeywords: [
${typeData.localizedDescription.lifeKeywords.map(kw =&gt; `        { title: "${kw.title}", description: "${kw.description}" }`).join(',\n')}
      ],
      strengths: [
${typeData.localizedDescription.strengths.map(s =&gt; `        { title: "${s.title}", description: "${s.description}" }`).join(',\n')}
      ],
      weaknesses: [
${typeData.localizedDescription.weaknesses.map(w =&gt; `        { title: "${w.title}", description: "${w.description}" }`).join(',\n')}
      ],
      advancedGuide: [
${typeData.localizedDescription.advancedGuide.map(g =&gt; `        { title: "${g.title}", content: "${g.content}" }`).join(',\n')}
      ]
    },`;
  
  // 构建代表人物代码
  const peopleCode = `representativePeople: [
    ${representativePeopleMap[type].map(p =&gt; `{ name: "${p.name}", description: "${p.description}" }`).join(',\n    ')}
  ]`;
  
  // 查找并替换代表人物
  const peopleRegex = new RegExp(`"${type}":([\\s\\S]*?)representativePeople:\\s*\\[([\\s\\S]*?)\\]`, 'gm');
  reportsContent = reportsContent.replace(peopleRegex, (match, before) =&gt; {
    return `"${type}":${before}${peopleCode}`;
  });
  
  // 在 relationships 字段后插入新字段
  const relationshipsRegex = new RegExp(`"${type}":([\\s\\S]*?)relationships:[^,}]*([,}])`, 'm');
  const match = reportsContent.match(relationshipsRegex);
  
  if (match) {
    const before = match[1];
    const end = match[2];
    const toReplace = `"${type}":${before}relationships:${match[0].split('relationships:')[1].split(end)[0]}${end}`;
    const replacement = `"${type}":${before}relationships:${match[0].split('relationships:')[1].split(end)[0]}${newFieldsCode}${end}`;
    reportsContent = reportsContent.replace(toReplace, replacement);
    console.log(`${type} 更新完成。`);
  } else {
    console.warn(`无法找到 ${type} 的 relationships 位置，尝试其他方法...`);
  }
});

// 备份原文件
fs.copyFileSync('src/data/reports.ts', 'src/data/reports.ts.backup-final');

// 写入更新后的内容
fs.writeFileSync('src/data/reports.ts', reportsContent);

console.log('\n更新完成！已备份原文件为 reports.ts.backup-final');
