import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { questions as originalQuestions } from '../data/questions';
import { calculateScore, validateTest } from '../utils/scoring';
import { CheckCircle, ArrowLeft, ShieldCheck, Sparkles, Lock, Unlock } from 'lucide-react';

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const { answers, startTime, setScore, setHasPaid, hasPaid, shuffledQuestions, questionShuffleMap } = useStore();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const costSeconds = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
  const isValid = validateTest(costSeconds);

  // 重新映射答案到原始题目顺序
  const getMappedAnswers = () => {
    if (shuffledQuestions.length === 0 || questionShuffleMap.length === 0) {
      return answers;
    }
    
    // 创建一个原始顺序的答案数组
    const mappedAnswers: ('A' | 'B')[] = new Array(originalQuestions.length).fill('A' as const);
    
    // 把打乱后的答案映射回原始顺序
    answers.forEach((answer, index) => {
      if (questionShuffleMap[index] !== undefined) {
        mappedAnswers[questionShuffleMap[index]] = answer;
      }
    });
    
    return mappedAnswers;
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mappedAnswers = getMappedAnswers();
    const score = calculateScore(originalQuestions, mappedAnswers);
    setScore(score);
    setHasPaid(true);
    
    navigate('/result');
  };

  const handleSkip = () => {
    const mappedAnswers = getMappedAnswers();
    const score = calculateScore(originalQuestions, mappedAnswers);
    setScore(score);
    setHasPaid(true);
    navigate('/result');
  };

  if (!isValid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md w-full text-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚠️ 答题过快</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            为了确保测试结果的准确性，请认真思考后再作答。让我们重新开始测试吧！
          </p>
          <button
            onClick={() => navigate('/test')}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg rounded-2xl hover:shadow-xl transition-all active:scale-95"
          >
            🔄 重新测试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-3 py-6 max-w-lg">
        {/* Header */}
        <button
          onClick={() => navigate('/test')}
          className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full text-gray-600 hover:text-gray-800 transition-all shadow-sm mb-6 w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">返回修改</span>
        </button>

        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative">
            <div className="h-40 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-20 h-20 text-white opacity-20" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">✨ 解锁完整报告</h2>
                <p className="text-white/90 text-sm md:text-base">获取专属性格分析、职业建议和情感指南</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4 md:p-6 mb-4">
                <div className="text-4xl md:text-5xl font-bold text-gray-800">
                  ¥19.9
                  <span className="text-lg text-gray-400 line-through ml-3">¥49.9</span>
                </div>
                <div className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  🎉 限时优惠中 -60%
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-base">🧠 完整 4 维度详细分析</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-base">💪 性格优势与发展建议</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-base">💼 匹配的职业方向推荐</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-base">❤️ 情感关系与相处指南</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-base">📱 永久保存，随时查看</span>
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full py-4 md:py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg md:text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${
                isProcessing ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>处理中...</span>
                </>
              ) : (
                <>
                  <Unlock className="w-6 h-6" />
                  <span>立即解锁报告</span>
                </>
              )}
            </button>

            {/* Security Info */}
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-6">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>安全支付，支持微信和支付宝</span>
            </div>
          </div>
        </div>

        {/* Demo Skip Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSkip}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-white/50 transition-all"
          >
            <Lock className="w-4 h-4" />
            (演示模式) 跳过支付查看示例报告
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
