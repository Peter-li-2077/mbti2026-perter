const fs = require('fs');
const path = require('path');

// 读取增强数据
const enhancedDataPath = path.join(__dirname, 'mbti_enhanced_data.json');
const enhancedData = JSON.parse(fs.readFileSync(enhancedDataPath, 'utf8'));

// 读取现有 reports.ts
const reportsPath = path.join(__dirname, 'src', 'data', 'reports.ts');
let reportsContent = fs.readFileSync(reportsPath, 'utf8');

// 创建一个映射来快速访问增强数据
const enhancedMap = {};
enhancedData.mbtiTypes.forEach(type => {
  enhancedMap[type.type] = type;
});

// 中国知名人物映射 - 为每个类型添加更多中国名人
const chineseRepresentativePeople = {
  "ISTJ": [
    { name: "钟南山", description: "中国工程院院士" },
    { name: "屠呦呦", description: "诺贝尔医学奖获得者" },
    { name: "邓稼先", description: "两弹元勋" }
  ],
  "ISFJ": [
    { name: "袁隆平", description: "杂交水稻之父" },
    { name: "张桂梅", description: "丽江华坪女子高级中学校长" },
    { name: "周恩来", description: "前国务院总理" }
  ],
  "INFJ": [
    { name: "鲁迅", description: "文学家、思想家" },
    { name: "杨绛", description: "作家、翻译家" },
    { name: "老子", description: "道家创始人" }
  ],
  "INTJ": [
    { name: "钱学森", description: "中国航天之父" },
    { name: "任正非", description: "华为创始人" },
    { name: "毛泽东", description: "中华人民共和国缔造者" }
  ],
  "ISTP": [
    { name: "李小龙", description: "武术家、演员" },
    { name: "林丹", description: "羽毛球世界冠军" },
    { name: "姚明", description: "篮球明星" }
  ],
  "ISFP": [
    { name: "王菲", description: "歌手" },
    { name: "周杰伦", description: "歌手、音乐人" },
    { name: "李健", description: "歌手" }
  ],
  "INFP": [
    { name: "李白", description: "唐代诗人" },
    { name: "宫崎骏", description: "动画导演（虽为日本但为华语圈熟知）" },
    { name: "王家卫", description: "电影导演" }
  ],
  "INTP": [
    { name: "陈景润", description: "数学家" },
    { name: "华罗庚", description: "数学家" },
    { name: "杨振宁", description: "物理学家、诺贝尔奖得主" }
  ],
  "ESTP": [
    { name: "马云", description: "阿里巴巴创始人" },
    { name: "王健林", description: "万达集团董事长" },
    { name: "刘强东", description: "京东创始人" }
  ],
  "ESTJ": [
    { name: "董明珠", description: "格力电器董事长" },
    { name: "柳传志", description: "联想集团创始人" },
    { name: "王石", description: "万科集团创始人" }
  ],
  "ESFP": [
    { name: "张艺兴", description: "歌手、演员" },
    { name: "迪丽热巴", description: "演员" },
    { name: "邓超", description: "演员、导演" }
  ],
  "ESFJ": [
    { name: "何炅", description: "主持人" },
    { name: "谢娜", description: "主持人" },
    { name: "蔡明", description: "小品演员" }
  ],
  "ENFP": [
    { name: "撒贝宁", description: "主持人" },
    { name: "大张伟", description: "歌手" },
    { name: "陈赫", description: "演员" }
  ],
  "ENFJ": [
    { name: "周恩来", description: "前国务院总理" },
    { name: "蔡康永", description: "主持人、作家" },
    { name: "白岩松", description: "主持人、记者" }
  ],
  "ENTP": [
    { name: "高晓松", description: "音乐人、主持人" },
    { name: "罗永浩", description: "企业家、网红" },
    { name: "王朔", description: "作家" }
  ],
  "ENTJ": [
    { name: "邓小平", description: "改革开放总设计师" },
    { name: "李嘉诚", description: "企业家" },
    { name: "马化腾", description: "腾讯创始人" }
  ]
};

// 处理每个类型
const types = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESTJ", "ESFP", "ESFJ", "ENFP", "ENFJ", "ENTP", "ENTJ"];

types.forEach(type => {
  if (!enhancedMap[type]) return;
  
  const enhanced = enhancedMap[type];
  
  // 更新代表人物 - 添加中国名人
  if (chineseRepresentativePeople[type]) {
    // 找到该类型的 representativePeople 并替换
    const oldPeoplePattern = new RegExp(
      `"${type}":\\s*\\{[^}]*representativePeople\\s*:\\s*\\[[\\s\\S]*?\\]`,
      'm'
    );
    
    // 构建新的代表人物数组代码
    const newPeopleCode = chineseRepresentativePeople[type]
      .map(p => `      { name: "${p.name}", description: "${p.description}" }`)
      .join(',\n');
    
    // 替换
    const newRepresentativePeople = `"${type}": { ... , representativePeople: [\n${newPeopleCode}\n    ]`;
    
    // 使用更精确的方法 - 我们将使用字符串替换
    // 先找到该类型块
    const typeStart = reportsContent.indexOf(`"${type}": {`);
    if (typeStart === -1) return;
    
    const typeEnd = findTypeEnd(reportsContent, typeStart);
    const oldTypeBlock = reportsContent.slice(typeStart, typeEnd);
    
    // 更新代表人物
    let newTypeBlock = oldTypeBlock;
    const peopleStart = oldTypeBlock.indexOf('representativePeople:');
    if (peopleStart !== -1) {
      const peopleArrayStart = oldTypeBlock.indexOf('[', peopleStart);
      const peopleArrayEnd = findArrayEnd(oldTypeBlock, peopleArrayStart);
      const oldPeopleArray = oldTypeBlock.slice(peopleArrayStart, peopleArrayEnd + 1);
      
      const newPeopleArray = `[\n${newPeopleCode}\n    ]`;
      newTypeBlock = newTypeBlock.replace(oldPeopleArray, newPeopleArray);
    }
    
    // 添加新字段 - 在适当的位置插入
    // 我们在 relationships 之后添加新字段
    const relationshipsEnd = newTypeBlock.indexOf('relationships:');
    if (relationshipsEnd !== -1) {
      const relLineEnd = newTypeBlock.indexOf(',', relationshipsEnd);
      if (relLineEnd !== -1) {
        const insertPoint = relLineEnd + 1;
        
        const newFields = `

    // 新增字段
    animeImageUrl: "${enhanced.animeImageUrl}",
    representativePeopleImages: [
${enhanced.representativePeopleImages.map(p => `      { name: "${p.name}", imageUrl: "${p.imageUrl}" }`).join(',\n')}
    ],
    localizedDescription: {
      personalityTraits: "${escapeString(enhanced.localizedDescription.personalityTraits)}",
      lifeKeywords: [
${enhanced.localizedDescription.lifeKeywords.map(k => `        { title: "${k.title}", description: "${escapeString(k.description)}" }`).join(',\n')}
      ],
      strengths: [
${enhanced.localizedDescription.strengths.map(s => `        { title: "${s.title}", description: "${escapeString(s.description)}" }`).join(',\n')}
      ],
      weaknesses: [
${enhanced.localizedDescription.weaknesses.map(w => `        { title: "${w.title}", description: "${escapeString(w.description)}" }`).join(',\n')}
      ],
      advancedGuide: [
${enhanced.localizedDescription.advancedGuide.map(g => `        { title: "${g.title}", content: "${escapeString(g.content)}" }`).join(',\n')}
      ]
    },`;
        
        newTypeBlock = newTypeBlock.slice(0, insertPoint) + newFields + newTypeBlock.slice(insertPoint);
      }
    }
    
    // 替换回原内容
    reportsContent = reportsContent.slice(0, typeStart) + newTypeBlock + reportsContent.slice(typeEnd);
  }
});

// 写回文件
fs.writeFileSync(reportsPath, reportsContent, 'utf8');
console.log('reports.ts 已更新成功！');

// 辅助函数 - 找到类型块的结束位置
function findTypeEnd(content, startIndex) {
  let braceCount = 0;
  let i = startIndex;
  while (i < content.length) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) return i + 1;
    }
    i++;
  }
  return content.length;
}

// 辅助函数 - 找到数组结束位置
function findArrayEnd(content, startIndex) {
  let bracketCount = 0;
  let i = startIndex;
  while (i < content.length) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') {
      bracketCount--;
      if (bracketCount === 0) return i;
    }
    i++;
  }
  return content.length;
}

// 辅助函数 - 转义字符串
function escapeString(str) {
  return str.replace(/"/g, '\\"').replace(/\n/g, '\\n');
}
