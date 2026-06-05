
const fs = require('fs');
const path = require('path');

// Step 1: Read all required data
const enhancedData = JSON.parse(fs.readFileSync('mbti_enhanced_data.json', 'utf-8'));
const originalReports = fs.readFileSync('src/data/reports.ts.backup', 'utf-8');

// Create a map for easy access
const typeDataMap = {};
enhancedData.mbtiTypes.forEach(type =&gt; {
  typeDataMap[type.type] = type;
});

// Representative people mapping for Chinese celebrities
const representativePeopleMap = {
  'ISTJ': [
    { name: "钟南山", description: "中国工程院院士" },
    { name: "屠呦呦", description: "诺贝尔医学奖获得者" },
    { name: "邓稼先", description: "两弹元勋" }
  ],
  'ISFJ': [
    { name: "袁隆平", description: "杂交水稻之父" },
    { name: "张桂梅", description: "丽江华坪女子高级中学校长" },
    { name: "周恩来", description: "前国务院总理" }
  ],
  'INFJ': [
    { name: "鲁迅", description: "文学家、思想家" },
    { name: "杨绛", description: "作家、翻译家" },
    { name: "老子", description: "道家创始人" }
  ],
  'INTJ': [
    { name: "钱学森", description: "中国航天之父" },
    { name: "任正非", description: "华为创始人" },
    { name: "毛泽东", description: "中华人民共和国缔造者" }
  ],
  'ISTP': [
    { name: "李小龙", description: "武术家、演员" },
    { name: "林丹", description: "羽毛球世界冠军" },
    { name: "姚明", description: "篮球明星" }
  ],
  'ISFP': [
    { name: "王菲", description: "歌手" },
    { name: "周杰伦", description: "歌手、音乐人" },
    { name: "李健", description: "歌手" }
  ],
  'INFP': [
    { name: "李白", description: "唐代诗人" },
    { name: "宫崎骏", description: "动画导演" },
    { name: "王家卫", description: "电影导演" }
  ],
  'INTP': [
    { name: "陈景润", description: "数学家" },
    { name: "华罗庚", description: "数学家" },
    { name: "杨振宁", description: "物理学家" }
  ],
  'ESTP': [
    { name: "马云", description: "阿里巴巴创始人" },
    { name: "王健林", description: "万达集团创始人" },
    { name: "雷军", description: "小米创始人" }
  ],
  'ESTJ': [
    { name: "董明珠", description: "格力电器董事长" },
    { name: "柳传志", description: "联想集团创始人" },
    { name: "王石", description: "万科集团创始人" }
  ],
  'ESFP': [
    { name: "张艺兴", description: "歌手、演员" },
    { name: "迪丽热巴", description: "演员" },
    { name: "黄子韬", description: "歌手、演员" }
  ],
  'ESFJ': [
    { name: "何炅", description: "主持人" },
    { name: "谢娜", description: "主持人" },
    { name: "汪涵", description: "主持人" }
  ],
  'ENFP': [
    { name: "撒贝宁", description: "主持人" },
    { name: "大张伟", description: "歌手、主持人" },
    { name: "李诞", description: "脱口秀演员、作家" }
  ],
  'ENFJ': [
    { name: "周恩来", description: "前国务院总理" },
    { name: "蔡康永", description: "主持人、作家" },
    { name: "白岩松", description: "主持人、记者" }
  ],
  'ENTP': [
    { name: "高晓松", description: "音乐人、脱口秀演员" },
    { name: "罗永浩", description: "企业家、脱口秀演员" },
    { name: "冯仑", description: "企业家、作家" }
  ],
  'ENTJ': [
    { name: "邓小平", description: "中国改革开放总设计师" },
    { name: "李嘉诚", description: "企业家" },
    { name: "孙正义", description: "软银集团创始人" }
  ]
};

// All 16 types in order
const allTypes = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESTJ', 'ESFP', 'ESFJ',
  'ENFP', 'ENFJ', 'ENTP', 'ENTJ'
];

console.log('Starting complete update...');

// Create the new reports file
let newReportsContent = originalReports;

allTypes.forEach(type =&gt; {
  console.log(`Processing ${type}...`);
  
  const typeData = typeDataMap[type];
  if (!typeData) {
    console.log(`  No enhanced data for ${type}`);
    return;
  }

  // 1. Update representativePeople
  const peopleRegex = new RegExp(`"${type}":([\\s\\S]*?)representativePeople:\\s*\\[([\\s\\S]*?)\\]`, 's');
  const peopleMatch = newReportsContent.match(peopleRegex);
  
  if (peopleMatch) {
    const newPeople = JSON.stringify(representativePeopleMap[type], null, 2)
      .replace(/\"/g, '"')
      .split('\n')
      .map((line, i) =&gt; i === 0 ? line : '    ' + line)
      .join('\n');
    
    newReportsContent = newReportsContent.replace(
      peopleMatch[0],
      peopleMatch[0].replace(
        /representativePeople:\s*\[[\s\S]*?\]/,
        `representativePeople: ${newPeople}`
      )
    );
  }

  // 2. Add the new fields after relationships
  const fieldsToAdd = `
    // 新增字段
    animeImageUrl: "${typeData.animeImageUrl}",
    representativePeopleImages: [
      { name: "${typeData.representativePeopleImages[0].name}", imageUrl: "${typeData.representativePeopleImages[0].imageUrl}" },
      { name: "${typeData.representativePeopleImages[1].name}", imageUrl: "${typeData.representativePeopleImages[1].imageUrl}" }
    ],
    localizedDescription: {
      personalityTraits: "${typeData.localizedDescription.personalityTraits}",
      lifeKeywords: [
        { title: "${typeData.localizedDescription.lifeKeywords[0].title}", description: "${typeData.localizedDescription.lifeKeywords[0].description}" },
        { title: "${typeData.localizedDescription.lifeKeywords[1].title}", description: "${typeData.localizedDescription.lifeKeywords[1].description}" },
        { title: "${typeData.localizedDescription.lifeKeywords[2].title}", description: "${typeData.localizedDescription.lifeKeywords[2].description}" }
      ],
      strengths: [
        { title: "${typeData.localizedDescription.strengths[0].title}", description: "${typeData.localizedDescription.strengths[0].description}" },
        { title: "${typeData.localizedDescription.strengths[1].title}", description: "${typeData.localizedDescription.strengths[1].description}" },
        { title: "${typeData.localizedDescription.strengths[2].title}", description: "${typeData.localizedDescription.strengths[2].description}" },
        { title: "${typeData.localizedDescription.strengths[3].title}", description: "${typeData.localizedDescription.strengths[3].description}" }
      ],
      weaknesses: [
        { title: "${typeData.localizedDescription.weaknesses[0].title}", description: "${typeData.localizedDescription.weaknesses[0].description}" },
        { title: "${typeData.localizedDescription.weaknesses[1].title}", description: "${typeData.localizedDescription.weaknesses[1].description}" },
        { title: "${typeData.localizedDescription.weaknesses[2].title}", description: "${typeData.localizedDescription.weaknesses[2].description}" }
      ],
      advancedGuide: [
        { title: "${typeData.localizedDescription.advancedGuide[0].title}", content: "${typeData.localizedDescription.advancedGuide[0].content}" },
        { title: "${typeData.localizedDescription.advancedGuide[1].title}", content: "${typeData.localizedDescription.advancedGuide[1].content}" },
        { title: "${typeData.localizedDescription.advancedGuide[2].title}", content: "${typeData.localizedDescription.advancedGuide[2].content}" },
        { title: "${typeData.localizedDescription.advancedGuide[3].title}", content: "${typeData.localizedDescription.advancedGuide[3].content}" }
      ]
    },`;

  // Find the relationships line and add after
  const relationshipsRegex = new RegExp(`"${type}":([\\s\\S]*?)relationships:[^,}]*(,|})`, 's');
  const relMatch = newReportsContent.match(relationshipsRegex);
  
  if (relMatch) {
    const original = relMatch[0];
    const afterRelationships = relMatch[2];
    let replacement = original;
    
    if (afterRelationships === '}') {
      // Type ends after relationships
      replacement = original.replace('},', fieldsToAdd + '\n  },');
    } else {
      // There are more fields after relationships
      replacement = original.replace('relationships:[^,}]*,', `relationships:[^,}]*,${fieldsToAdd}`);
    }
    
    newReportsContent = newReportsContent.replace(original, replacement);
  } else {
    console.log(`  Could not find relationships for ${type}`);
  }
});

console.log('Writing output...');

// Write the final file
fs.writeFileSync('src/data/reports.ts.updated', newReportsContent);
console.log('Updated file written to src/data/reports.ts.updated');

// Verify the output
if (newReportsContent.includes('animeImageUrl')) {
  console.log('SUCCESS: New fields added!');
  console.log('Now replacing the original file...');
  fs.copyFileSync('src/data/reports.ts', 'src/data/reports.ts.backup.final');
  fs.copyFileSync('src/data/reports.ts.updated', 'src/data/reports.ts');
  console.log('DONE! reports.ts has been updated successfully!');
} else {
  console.log('ERROR: New fields not found in output');
}
