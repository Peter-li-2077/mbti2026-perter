import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { reports } from '../data/reports';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const { score, resetTest } = useStore();

  if (!score) {
    navigate('/');
    return null;
  }

  const pureType = score.mbti_type.replace(/\//g, '').slice(0, 4);
  const report = reports[pureType as keyof typeof reports] || reports['ENFP'];

  // Calculate percentages for dimensions
  const ePercent = Math.round((score.E / (score.E + score.I)) * 100);
  const iPercent = 100 - ePercent;
  const sPercent = Math.round((score.S / (score.S + score.N)) * 100);
  const nPercent = 100 - sPercent;
  const tPercent = Math.round((score.T / (score.T + score.F)) * 100);
  const fPercent = 100 - tPercent;
  const jPercent = Math.round((score.J / (score.J + score.P)) * 100);
  const pPercent = 100 - jPercent;

  // Calculate auxiliary personality indicators
  const oPercent = 50; // Placeholder
  const aPercent = 50;
  const cPercent = 50;
  const hPercent = 50;

  // Get the dominant letters
  const eOrI = ePercent > iPercent ? 'E' : 'I';
  const sOrN = sPercent > nPercent ? 'S' : 'N';
  const tOrF = tPercent > fPercent ? 'T' : 'F';
  const jOrP = jPercent > pPercent ? 'J' : 'P';

  const letters = [
    { letter: 'E', opposite: 'I', leftPercent: ePercent, rightPercent: iPercent, leftColor: '#D946EF', rightColor: '#3B82F6', leftLabel: '外向', rightLabel: '内向' },
    { letter: 'S', opposite: 'N', leftPercent: sPercent, rightPercent: nPercent, leftColor: '#10B981', rightColor: '#F59E0B', leftLabel: '实感', rightLabel: '直觉' },
    { letter: 'T', opposite: 'F', leftPercent: tPercent, rightPercent: fPercent, leftColor: '#3B82F6', rightColor: '#EC4899', leftLabel: '理性', rightLabel: '感性' },
    { letter: 'J', opposite: 'P', leftPercent: jPercent, rightPercent: pPercent, leftColor: '#8B5CF6', rightColor: '#F97316', leftLabel: '判断', rightLabel: '知觉' },
  ];

  const auxiliaryLetters = [
    { leftPercent: oPercent, rightPercent: aPercent, leftColor: '#06B6D4', rightColor: '#38BDF8', leftLabel: '纠结', rightLabel: '果断' },
    { leftPercent: cPercent, rightPercent: hPercent, leftColor: '#3B82F6', rightColor: '#FBBF24', leftLabel: '高冷', rightLabel: '温暖' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FFF9F5 0%, #FEF3E8 50%, #FDF7EE 100%)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-orange-100">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium text-sm">返回</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' }}>
              <span className="text-white font-bold text-sm">{pureType[0]}</span>
            </div>
            <h1 className="font-bold text-gray-800">MBTI测试</h1>
          </div>
          <div className="w-16"></div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        {/* 1. Top Banner - 包含动漫图片和类型标识 */}
        <section className="relative overflow-hidden rounded-3xl" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
          <div className="px-6 pt-10 pb-8" style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' }}>
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center gap-4">
                {/* Anime Image */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl">
                  {report.animeImageUrl ? (
                    <img 
                      src={report.animeImageUrl} 
                      alt={report.name} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-4xl">✨</span>
                    </div>
                  )}
                </div>
                {/* Type Logo */}
                <div className="relative">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                    <span className="text-5xl font-black text-white">{pureType}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-1">{report.name}</h2>
              <p className="text-blue-100">{report.subtitle || '独特的人格特质'}</p>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="rounded-2xl px-5 py-3 text-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <p className="text-3xl font-black text-white">{report.rarity?.total || '5.0'}%</p>
                <p className="text-blue-100 text-xs">人口占比</p>
              </div>
              <div className="rounded-2xl px-5 py-3 text-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <p className="text-3xl font-black text-white">#{report.rarity?.rank || '8'}</p>
                <p className="text-blue-100 text-xs">稀有度排名</p>
              </div>
              <div className="rounded-2xl px-5 py-3 text-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                <p className="text-3xl font-black text-white">{report.rarity?.male || '10.0'}%</p>
                <p className="text-blue-100 text-xs">男性占比</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 基本画像 - 维度百分比 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' }}>
              <span className="text-white text-lg">📋</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第1章 基本画像</h2>
              <p className="text-gray-500 text-sm">MBTI测试类型 {pureType}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 mb-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
            <h3 className="font-bold text-gray-800 mb-6 text-center" style={{ color: '#06B6D4', fontSize: '2.5rem', fontWeight: '900' }}>
              MBTI
            </h3>
            
            <div className="space-y-6">
              {letters.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-20 text-right">
                    <p className="font-bold text-xl" style={{ color: item.leftColor }}>{item.leftPercent}%</p>
                    <p className="text-gray-600 text-sm">{item.leftLabel} ({item.letter})</p>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-5 rounded-full overflow-hidden flex">
                      <div className="flex items-center justify-end pr-2" style={{ width: `${item.leftPercent}%`, background: `linear-gradient(90deg, ${item.leftColor} 0%, ${item.leftColor}CC 100%)` }}></div>
                      <div className="flex items-center justify-start pl-2" style={{ width: `${item.rightPercent}%`, background: `linear-gradient(90deg, ${item.rightColor} 0%, ${item.rightColor}CC 100%)` }}></div>
                    </div>
                  </div>
                  <div className="w-20">
                    <p className="font-bold text-xl" style={{ color: item.rightColor }}>{item.rightPercent}%</p>
                    <p className="text-gray-600 text-sm">{item.rightLabel} ({item.opposite})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MBTI辅助人格指标 */}
          <div className="bg-white rounded-3xl p-6" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 rounded-full" style={{ background: 'linear-gradient(90deg, #FFF7ED 0%, #FEF3C7 100%)' }}>
                <span className="font-bold text-orange-600">—— MBTI辅助人格指标 ——</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {auxiliaryLetters.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-20 text-right">
                    <p className="font-bold text-xl" style={{ color: item.leftColor }}>{item.leftPercent}%</p>
                    <p className="text-gray-600 text-sm">{item.leftLabel}</p>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-5 rounded-full overflow-hidden flex">
                      <div className="flex items-center justify-end pr-2" style={{ width: `${item.leftPercent}%`, background: `linear-gradient(90deg, ${item.leftColor} 0%, ${item.leftColor}CC 100%)` }}></div>
                      <div className="flex items-center justify-start pl-2" style={{ width: `${item.rightPercent}%`, background: `linear-gradient(90deg, ${item.rightColor} 0%, ${item.rightColor}CC 100%)` }}></div>
                    </div>
                  </div>
                  <div className="w-20">
                    <p className="font-bold text-xl" style={{ color: item.rightColor }}>{item.rightPercent}%</p>
                    <p className="text-gray-600 text-sm">{item.rightLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. 人格字母介绍 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}>
              <span className="text-white text-lg">🔤</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第2章 人格字母介绍</h2>
            </div>
          </div>
          <div className="space-y-3">
            {pureType.split('').map((letter, index) => {
              const bgColor = index === 0 ? '#DBEAFE' : index === 1 ? '#F0FDF4' : index === 2 ? '#EFF6FF' : '#FFF7ED';
              const borderColor = index === 0 ? '#3B82F6' : index === 1 ? '#22C55E' : index === 2 ? '#3B82F6' : '#F59E0B';
              const descriptions = {
                'E': '更倾向于外部世界，从社交和活动中获取能量，喜欢与人互动。',
                'I': '更倾向于内在世界，从反思和独立思考中获取能量，享受独处时光。',
                'S': '更倾向于关注现实和细节，通过五官感受世界，注重实际体验。',
                'N': '更倾向于关注未来和可能性，通过直觉感知模式，喜欢抽象思考。',
                'T': '偏好基于逻辑和客观分析做出决策，注重效率和实际结果。',
                'F': '偏好基于价值观和情感考量做出决策，注重和谐和他人感受。',
                'J': '偏好有计划和有条理的生活，喜欢做决定，追求确定性。',
                'P': '灵活、开放、适应变化，喜欢保持多种选择，享受不确定性。',
              };
              const labels = {
                'E': '外向',
                'I': '内向',
                'S': '实感',
                'N': '直觉',
                'T': '理性',
                'F': '感性',
                'J': '判断',
                'P': '知觉',
              };
              return (
                <div key={index} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}CC 100%)` }}>
                      <span className="text-2xl font-bold" style={{ color: borderColor }}>{letter}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{labels[letter as keyof typeof labels]} ({letter})</h4>
                      <p className="text-gray-600 text-sm">{descriptions[letter as keyof typeof descriptions]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Auxiliary letters */}
            <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)', borderLeft: '4px solid #F59E0B' }}>
              <h4 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
                <span className="text-xl">⚖️</span>
                纠结/果断
              </h4>
              <p className="text-gray-600 text-sm">做决策时的思考方式，是反复权衡还是快速决定。</p>
            </div>
            <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)', borderLeft: '4px solid #3B82F6' }}>
              <h4 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
                <span className="text-xl">🧊</span>
                高冷/温暖
              </h4>
              <p className="text-gray-600 text-sm">与人互动时的情感表达风格，是内敛冷静还是热情温暖。</p>
            </div>
          </div>
        </section>

        {/* 4. 人格特点 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)' }}>
              <span className="text-white text-lg">🌟</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第3章 人格特点</h2>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
            <div className="relative -ml-1 -mt-1 mb-4">
              <span className="text-white text-sm font-bold px-4 py-2 rounded-2xl inline-block shadow-lg" style={{ transform: 'rotate(-4deg)', background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' }}>
                🏷️ 人格特点
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              {report.personalityTraits}
            </p>
          </div>
        </section>

        {/* 5. 人格稀有度 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)' }}>
              <span className="text-white text-lg">📊</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第4章 人格稀有度</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 text-center" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <p className="text-3xl font-black text-blue-600 mb-1">#{report.rarity?.rank || '8'}</p>
              <p className="text-gray-600 text-sm">稀有度排名</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <p className="text-3xl font-black text-cyan-600 mb-1">{report.rarity?.total || '5.0'}%</p>
              <p className="text-gray-600 text-sm">占总人口比例</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <p className="text-3xl font-black text-purple-600 mb-1">{report.rarity?.male || '10.0'}%</p>
              <p className="text-gray-600 text-sm">占男性比例</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
              <p className="text-3xl font-black text-pink-600 mb-1">{report.rarity?.female || '3.0'}%</p>
              <p className="text-gray-600 text-sm">占女性比例</p>
            </div>
          </div>
        </section>

        {/* 6. 代表人物 - 真实图片 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #818CF8 0%, #A855F7 100%)' }}>
              <span className="text-white text-lg">👥</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第5章 代表人物</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {report.representativePeopleImages?.slice(0, 2).map((person: any, index: number) => (
              <div key={index} className="bg-white rounded-3xl p-5 text-center" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
                <div className="w-28 h-28 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                  {person.imageUrl ? (
                    <img 
                      src={person.imageUrl} 
                      alt={person.name} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                  )}
                </div>
                <p className="font-bold text-gray-800 text-lg mb-1">{person.name}</p>
                <p className="text-gray-500 text-sm">{report.representativePeople?.[index]?.description || ''}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. 人生关键词 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)' }}>
              <span className="text-white text-lg">🔑</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第6章 人生关键词</h2>
            </div>
          </div>
          <div className="space-y-4">
            {report.lifeKeywords?.map((keyword: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)', borderLeft: '4px solid #06B6D4' }}>
                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="text-xl">{index === 0 ? '🎯' : index === 1 ? '✨' : '🌟'}</span>
                  {keyword.title}
                </h4>
                <p className="text-gray-600 text-sm">{keyword.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. 性格优势 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' }}>
              <span className="text-white text-lg">💪</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第7章 性格优势</h2>
            </div>
          </div>
          <div className="space-y-3">
            {report.strengths?.map((strength: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
                <h4 className="font-bold mb-2 flex items-center gap-2" style={{ color: ['#06B6D4', '#3B82F6', '#22C55E', '#8B5CF6'][index % 4] }}>
                  <span className="text-lg">{['✅', '🎯', '💡', '🌟'][index % 4]}</span>
                  {strength.title}
                </h4>
                <p className="text-gray-600 text-sm">{strength.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. 性格劣势 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F97316 0%, #DC2626 100%)' }}>
              <span className="text-white text-lg">⚠️</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第8章 性格劣势</h2>
            </div>
          </div>
          <div className="space-y-3">
            {report.weaknesses?.map((weakness: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
                <h4 className="font-bold mb-2 flex items-center gap-2" style={{ color: ['#F97316', '#DC2626', '#F59E0B', '#EC4899'][index % 4] }}>
                  <span className="text-lg">{['⚠️', '🚫', '⚡', '😔'][index % 4]}</span>
                  {weakness.title}
                </h4>
                <p className="text-gray-600 text-sm">{weakness.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. 进阶指南 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)' }}>
              <span className="text-white text-lg">🚀</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第9章 进阶指南</h2>
            </div>
          </div>
          <div className="space-y-4">
            {report.advancedGuide?.map((guide: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${['#22C55E', '#06B6D4', '#8B5CF6', '#F59E0B'][index]} 0%, ${['#10B981', '#3B82F6', '#EC4899', '#F97316'][index]} 100%)` }}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">{guide.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{guide.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. 八维解读 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)' }}>
              <span className="text-white text-lg">🧠</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第10章 八维解读</h2>
            </div>
          </div>
          {report.eightDimensional && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)', borderTop: '4px solid #06B6D4' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' }}>主导</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{report.eightDimensional.dominant.name}</h4>
                <p className="text-gray-600 text-sm">{report.eightDimensional.dominant.description}</p>
              </div>
              <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)', borderTop: '4px solid #3B82F6' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}>辅助</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{report.eightDimensional.auxiliary.name}</h4>
                <p className="text-gray-600 text-sm">{report.eightDimensional.auxiliary.description}</p>
              </div>
              <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)', borderTop: '4px solid #A855F7' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #A855F7 0%, #8B5CF6 100%)' }}>第三</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{report.eightDimensional.tertiary.name}</h4>
                <p className="text-gray-600 text-sm">{report.eightDimensional.tertiary.description}</p>
              </div>
              <div className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)', borderTop: '4px solid #EC4899' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">弱势</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{report.eightDimensional.inferior.name}</h4>
                <p className="text-gray-500 text-sm">{report.eightDimensional.inferior.description}</p>
              </div>
            </div>
          )}
        </section>

        {/* 12. 职业探索 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}>
              <span className="text-white text-lg">💼</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第11章 职业探索</h2>
            </div>
          </div>
          
          {report.careerExploration && (
            <>
              <div className="bg-white rounded-3xl p-6 mb-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
                <h3 className="font-bold text-gray-800 mb-4">职场性格</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-xl p-4" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)' }}>
                    <div className="text-blue-600 font-bold mb-2 flex items-center gap-2">
                      <span className="text-xl">✅</span> {report.careerExploration.personality.strengths.title}
                    </div>
                    <p className="text-gray-600 text-sm">{report.careerExploration.personality.strengths.content}</p>
                  </div>
                  <div className="rounded-xl p-4" style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)' }}>
                    <div className="text-orange-600 font-bold mb-2 flex items-center gap-2">
                      <span className="text-xl">⚠️</span> {report.careerExploration.personality.weaknesses.title}
                    </div>
                    <p className="text-gray-600 text-sm">{report.careerExploration.personality.weaknesses.content}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 mb-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">💼</span> 适合的工作环境
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {report.careerExploration.suitableWorkEnv?.map((item: any, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>{item.title}：</strong>{item.content}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-6" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-xl">🚫</span> 不适合的工作环境
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {report.careerExploration.unsuitableWorkEnv?.map((item: any, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span><strong>{item.title}：</strong>{item.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </section>

        {/* 13. 职业推荐 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)' }}>
              <span className="text-white text-lg">⭐</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第12章 职业推荐</h2>
            </div>
          </div>
          <div className="space-y-3">
            {report.career?.map((career: string, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
                <h4 className="font-bold text-gray-800 mb-2">{career}</h4>
                <p className="text-gray-600 text-sm">
                  {report.careerExploration?.recommendedCareers?.[index]?.content || '适合发挥你的性格优势的职业方向'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 14. 职业避雷 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)' }}>
              <span className="text-white text-lg">⛔</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第13章 职业避雷</h2>
            </div>
          </div>
          <div className="space-y-3">
            {report.careerExploration?.avoidedCareers?.map((career: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-5" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
                <h4 className="font-bold text-red-600 mb-2">{career.title}</h4>
                <p className="text-gray-600 text-sm">{career.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 14. 恋爱分析 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)' }}>
              <span className="text-white text-lg">💕</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第14章 恋爱分析</h2>
            </div>
          </div>

          {report.loveAnalysis && (
            <>
              {/* 恋爱风格 */}
              <div className="bg-white rounded-3xl overflow-hidden mb-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
                <div className="px-6 py-4" style={{ background: 'linear-gradient(90deg, #EC4899 0%, #DB2777 100%)' }}>
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <span className="text-2xl">💞</span>
                    恋爱风格
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {report.loveAnalysis.loveStyle}
                  </p>
                </div>
              </div>

              {/* 恋爱特点 */}
              {report.loveAnalysis.loveFeatures && (
                <div className="bg-white rounded-3xl overflow-hidden mb-5" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
                  <div className="px-6 py-4" style={{ background: 'linear-gradient(90deg, #A855F7 0%, #7C3AED 100%)' }}>
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      恋爱特点
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {report.loveAnalysis.loveFeatures.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 rounded-xl p-4" style={{ background: `linear-gradient(135deg, ${['#F3E8FF', '#FCE7F3', '#FFF7ED', '#F0FDF4'][index % 4]} 0%, ${['#F5D0FE', '#FECACA', '#FEF3C7', '#BBF7D0'][index % 4]} 100%)` }}>
                          <div className="text-2xl">{['💖', '💬', '🎨', '🤗'][index % 4]}</div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-sm">{feature}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 恋爱状态 */}
              {report.loveAnalysis.loveStatus && (
                <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
                  <div className="px-6 py-4" style={{ background: 'linear-gradient(90deg, #10B981 0%, #14B8A6 100%)' }}>
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <span className="text-2xl">🌸</span>
                      恋爱状态
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'linear-gradient(90deg, #F0FDF4 0%, #D1FAE5 100%)' }}>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl">💯</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-green-700">理想状态</h4>
                          <p className="text-gray-600 text-sm">{report.loveAnalysis.loveStatus.ideal}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'linear-gradient(90deg, #FFFBEB 0%, #FEF3C7 100%)' }}>
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl">⚠️</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-yellow-700">需要注意</h4>
                          <p className="text-gray-600 text-sm">{report.loveAnalysis.loveStatus.attention}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'linear-gradient(90deg, #EFF6FF 0%, #CFFAFE 100%)' }}>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl">🎯</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-blue-700">成长方向</h4>
                          <p className="text-gray-600 text-sm">{report.loveAnalysis.loveStatus.growth}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </section>

        {/* 15. 恋爱配对 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)' }}>
              <span className="text-white text-lg">💑</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">第15章 恋爱配对</h2>
            </div>
          </div>

          {report.loveAnalysis?.loveMatch && (
            <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
              <div className="px-6 py-4" style={{ background: 'linear-gradient(90deg, #F43F5E 0%, #EC4899 100%)' }}>
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <span className="text-2xl">💑</span>
                  最佳配对
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {report.loveAnalysis.loveMatch.map((match: any, index: number) => (
                    <div key={index} className="rounded-2xl p-5" style={{ border: '2px solid #22C55E', background: 'linear-gradient(135deg, #F0FDF4 0%, #D1FAE5 100%)', transition: 'all 0.3s ease' }}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)' }}>
                            <span className="text-white font-bold">{match.type}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800">{match.type}类型</h4>
                            <p className="text-gray-500 text-xs">契合度极高</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black text-green-600">{match.compatibility}</span>
                          <p className="text-green-500 text-xs">绝配</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{match.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Bottom Actions */}
        <div className="py-8 space-y-4">
          <div className="flex gap-3">
            <button className="flex-1 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95" style={{ background: 'linear-gradient(90deg, #06B6D4 0%, #3B82F6 100%)', color: 'white' }} onClick={() => alert('分享功能开发中...')}>
              📱 分享结果
            </button>
            <button className="px-6 py-4 bg-white text-gray-700 rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95" style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
              🔄
            </button>
          </div>

          <button onClick={() => { resetTest(); navigate('/test'); }} className="w-full py-4 rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95" style={{ background: 'linear-gradient(90deg, #F3F4F6 0%, #E5E7EB 100%)', color: '#374151' }}>
            再测一次
          </button>

          <div className="text-center text-sm text-gray-400 pt-4">
            <p>⚠️ 免责声明：本测试仅供参考，不作为心理诊断、择业或决策的唯一依据。</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Result;
