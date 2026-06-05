import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

async function runCommand(command: string) {
  console.log(`$ ${command}`);
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    return { success: true, stdout, stderr };
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return { success: false, error };
  }
}

async function main() {
  console.log('🚀 开始提交到 GitHub...\n');

  // 检查是否在正确目录
  const projectDir = process.cwd();
  console.log(`当前目录: ${projectDir}`);

  // 检查 Git 是否安装
  try {
    await execAsync('git --version');
  } catch {
    console.error('\n❌ 错误: 未检测到 Git，请先安装 Git');
    console.log('   下载地址: https://git-scm.com/downloads');
    process.exit(1);
  }

  // 检查是否是 Git 仓库
  const gitDir = path.join(projectDir, '.git');
  if (!fs.existsSync(gitDir)) {
    console.log('\n📦 初始化 Git 仓库...');
    await runCommand('git init');
  }

  // 配置用户信息（如果还没配置）
  console.log('\n👤 配置 Git 用户信息...');
  try {
    await execAsync('git config user.name');
  } catch {
    console.log('   请输入您的姓名:');
    // 这里简化处理，实际需要交互式输入
  }

  // 添加所有文件
  console.log('\n📝 添加文件...');
  await runCommand('git add .');

  // 提交
  console.log('\n💾 提交代码...');
  const commitResult = await runCommand('git commit -m "更新题库至72题，优化答题逻辑\n\n- 更新题库至72题\n- 增加题目乱序功能\n- 升级计分算法，支持中立结果\n- 更新修改明细文档"');

  // 如果没有更改，可能 commit 会失败，但没关系
  if (!commitResult.success) {
    console.log('   可能没有新的更改，或已经提交过');
  }

  // 检查远程仓库
  console.log('\n🔗 检查远程仓库...');
  try {
    await execAsync('git remote get-url origin');
  } catch {
    console.log('   添加远程仓库...');
    await runCommand('git remote add origin https://github.com/Peter-li-2077/MBTI2026.git');
  }

  // 设置分支
  console.log('\n🌿 设置分支...');
  await runCommand('git branch -M main');

  // 推送
  console.log('\n🚀 推送到 GitHub...');
  console.log('⚠️  注意: 推送时可能需要输入 GitHub 用户名和 Personal Access Token');
  console.log('   如果还没有 Token，请访问: https://github.com/settings/tokens');
  console.log('   创建 Token 时请勾选 repo 权限\n');

  const pushResult = await runCommand('git push -u origin main');

  if (pushResult.success) {
    console.log('\n✅ 成功！代码已推送到 GitHub！');
    console.log('   访问: https://github.com/Peter-li-2077/MBTI2026');
    console.log('\n   Netlify 会自动检测到更新并重新部署！');
  } else {
    console.log('\n❌ 推送失败');
    console.log('\n💡 解决方案:');
    console.log('   1. 检查网络连接');
    console.log('   2. 确认 GitHub 账号和 Token 正确');
    console.log('   3. 如果是首次推送，可能需要先 pull: git pull origin main --allow-unrelated-histories');
  }
}

main().catch(console.error);
