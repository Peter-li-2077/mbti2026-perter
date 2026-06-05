import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const quizDataRaw = fs.readFileSync(path.join(__dirname, 'mbti_93quiz.json'), 'utf8');
const quizData = JSON.parse(quizDataRaw);

const outputDir = path.join(__dirname, 'MBTI_RAG知识库', '00_题库');

quizData.forEach((question) => {
  const filename = `q${question.q_id}.md`;
  const filepath = path.join(outputDir, filename);
  
  const content = `# 问题 ${question.q_id}: ${question.title}

## 维度
${question.dim_main}

## 选项 A
描述: ${question.opt_a}
得分: ${question.score_a}

## 选项 B
描述: ${question.opt_b}
得分: ${question.score_b}
`;

  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`Created ${filename}`);
});

console.log('Successfully created all quiz files!');
