
const fs = require('fs');
const path = require('path');

// 读取增强数据
const enhancedDataPath = path.join(__dirname, 'mbti_enhanced_data.json');
const enhancedData = JSON.parse(fs.readFileSync(enhancedDataPath, 'utf8'));

// 读取当前 reports.ts
const reportsPath = path.join(__dirname, 'src', 'data', 'reports.ts');
let reportsContent = fs.readFileSync(reportsPath, 'utf8');

// 创建类型数据的映射
const typeDataMap = {};
enhancedData.mbtiTypes.forEach(type =&gt; {
    typeDataMap[type.type] = type;
});

// 剩余需要更新的类型
const typesToUpdate = ['INTP', 'ESTP', 'ESTJ', 'ESFP', 'ESFJ', 'ENFP', 'ENFJ', 'ENTP', 'ENTJ'];

console.log('开始更新以下类型:', typesToUpdate);

typesToUpdate.forEach(typeName =&gt; {
    console.log(`\n处理类型: ${typeName}`);
    
    const enhancedType = typeDataMap[typeName];
    if (!enhancedType) {
        console.log(`⚠️  未找到 ${typeName} 的增强数据`);
        return;
    }
    
    // 查找该类型在 reports.ts 中的位置
    const typePattern = new RegExp(`"${typeName}":\\s*\\{[\\s\\S]*?eightDimensional:`, 'g');
    const match = reportsContent.match(typePattern);
    
    if (!match) {
        console.log(`⚠️  未找到 ${typeName} 在 reports.ts 中的定义`);
        return;
    }
    
    const originalTypeContent = match[0];
    
    // 检查是否已经有 animeImageUrl 字段
    if (originalTypeContent.includes('animeImageUrl')) {
        console.log(`ℹ️  ${typeName} 已经有新增字段，跳过`);
        return;
    }
    
    // 生成新增字段的内容
    const newFields = `

    // 新增字段
    animeImageUrl: "${enhancedType.animeImageUrl}",
    representativePeopleImages: ${JSON.stringify(enhancedType.representativePeopleImages, null, 4)},
    localizedDescription: ${JSON.stringify(enhancedType.localizedDescription, null, 4)},
    `;
    
    // 在 relationships 字段后面插入新字段
    const relationshipsPattern = /relationships:\s*"[^"]*",?/;
    const relationshipsMatch = originalTypeContent.match(relationshipsPattern);
    
    if (relationshipsMatch) {
        const updatedTypeContent = originalTypeContent.replace(
            relationshipsMatch[0],
            relationshipsMatch[0] + newFields
        );
        
        reportsContent = reportsContent.replace(originalTypeContent, updatedTypeContent);
        console.log(`✅ ${typeName} 更新成功`);
    } else {
        console.log(`⚠️  未找到 ${typeName} 的 relationships 字段`);
    }
});

// 写回文件
fs.writeFileSync(reportsPath, reportsContent, 'utf8');
console.log('\n🎉 更新完成！');
