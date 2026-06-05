import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Brain, Users, TrendingUp, Heart, Star } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-300 rounded-full blur-3xl"></div>
          <div className="absolute top-32 -right-16 w-56 h-56 bg-indigo-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 left-1/3 w-48 h-48 bg-blue-300 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
          <div className="text-center mb-10 md:mb-16 animate-float">
            {/* Hero Visual */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl shadow-xl border-4 border-white flex items-center justify-center">
                  <Sparkles className="w-20 h-20 md:w-24 md:h-24 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
              MBTI 性格测试
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              93 道专业题目，深入了解你的性格类型、优势和适合的职业方向
            </p>
          </div>

          {/* Features Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-purple-100 rounded-full mb-4">
                <Brain className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">专业测评</h3>
              <p className="text-sm md:text-base text-gray-600">
                基于官方 MBTI 量表，包含 93 道精心设计的题目
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full mb-4">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">深度解析</h3>
              <p className="text-sm md:text-base text-gray-600">
                详细的性格分析、优势评估、职业建议和情感指南
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">即时结果</h3>
              <p className="text-sm md:text-base text-gray-600">
                完成测试后立即生成专属报告，支持永久保存
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-10">
            <button
              onClick={() => navigate('/test')}
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-10 md:px-16 py-4 md:py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
              开始测试
              <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <div className="mt-6 text-gray-500">
              <p className="text-base md:text-lg">⏱️ 预计用时：10-15 分钟</p>
              <p className="text-xs md:text-sm mt-2 text-gray-400">💡 请在安静的环境中完成测试以获得准确结果</p>
            </div>
          </div>

          {/* Four Dimensions Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
              🧭 四维度介绍
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { 
                  title: '外向 E - 内向 I', 
                  desc: '能量来源：外部世界 vs 内心世界',
                  icon: Users,
                  color: 'from-purple-400 to-purple-600'
                },
                { 
                  title: '感觉 S - 直觉 N', 
                  desc: '信息获取：具体事实 vs 抽象联想',
                  icon: Brain,
                  color: 'from-blue-400 to-blue-600'
                },
                { 
                  title: '思考 T - 情感 F', 
                  desc: '决策方式：逻辑分析 vs 价值判断',
                  icon: Heart,
                  color: 'from-pink-400 to-rose-600'
                },
                { 
                  title: '判断 J - 感知 P', 
                  desc: '生活方式：有计划 vs 灵活适应',
                  icon: TrendingUp,
                  color: 'from-green-400 to-green-600'
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 md:p-5 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-xl shadow-md flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center text-xs md:text-sm text-gray-400 border-t border-gray-200 pt-6">
            <p>
              ⚠️ 免责声明：本测试仅供参考，不作为心理诊断、择业或决策的唯一依据。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
