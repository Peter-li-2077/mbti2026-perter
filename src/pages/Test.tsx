import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { questions } from '../data/questions';
import { ArrowLeft, ArrowRight, Clock, ChevronLeft, ChevronRight, Users, Brain, Heart, TrendingUp } from 'lucide-react';

const Test: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentStep, 
    answers, 
    startTime, 
    setCurrentStep, 
    setAnswer, 
    setStartTime 
  } = useStore();
  
  const [elapsedTime, setElapsedTime] = React.useState(0);

  useEffect(() => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    
    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - (startTime || Date.now())) / 1000));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [startTime, setStartTime]);

  const totalQuestions = questions.length;
  const progress = ((currentStep + 1) / totalQuestions) * 100;
  const currentQuestion = questions[currentStep];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: 'A' | 'B') => {
    setAnswer(currentStep, answer);
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/payment');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentAnswer = answers[currentStep];

  // Get dimension-specific icon and color
  const getDimensionStyle = (dim: string) => {
    switch(dim) {
      case 'EI': return { icon: Users, color: 'from-purple-400 to-purple-600' };
      case 'SN': return { icon: Brain, color: 'from-blue-400 to-blue-600' };
      case 'TF': return { icon: Heart, color: 'from-pink-400 to-rose-600' };
      case 'JP': return { icon: TrendingUp, color: 'from-green-400 to-green-600' };
      default: return { icon: Brain, color: 'from-purple-400 to-indigo-600' };
    }
  };

  const { icon: DimensionIcon, color: dimensionColor } = getDimensionStyle(currentQuestion.dim_main);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-3 py-4 md:px-4 md:py-8 max-w-2xl">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-sm text-gray-600 hover:text-gray-800 transition-all active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm text-gray-600">
              <Clock className="w-4 h-4 text-purple-500" />
              <span className="font-medium">{formatTime(elapsedTime)}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="bg-white/80 rounded-full p-2 shadow-sm mb-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <p className="text-center text-sm md:text-base text-gray-600 font-medium">
            📝 {currentStep + 1} / {totalQuestions}
          </p>
        </div>

        {/* Question Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg mb-6 overflow-hidden">
          {/* Dimension Header */}
          <div className="relative">
            <div className={`h-32 md:h-40 bg-gradient-to-br ${dimensionColor} flex items-center justify-center`}>
              <DimensionIcon className="w-16 h-16 text-white opacity-30" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="inline-block px-6 py-2 bg-white/95 text-purple-700 rounded-full text-sm md:text-base font-bold shadow-lg">
                {currentQuestion.dim_main}
              </span>
            </div>
          </div>
          
          {/* Question Content */}
          <div className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center leading-relaxed">
              {currentQuestion.title}
            </h2>
          </div>
        </div>

        {/* Answer Buttons */}
        <div className="space-y-4 mb-6">
          <button
            onClick={() => handleAnswer('A')}
            className={`w-full p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
              currentAnswer === 'A'
                ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 shadow-lg scale-[1.02]'
                : 'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50 active:scale-[0.98]'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                currentAnswer === 'A' 
                  ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-500'
              }`}>
                A
              </span>
              <span className="text-base md:text-lg text-gray-800 flex-1">{currentQuestion.opt_a}</span>
              {currentAnswer === 'A' && (
                <span className="text-purple-600 text-xl">✓</span>
              )}
            </div>
          </button>

          <button
            onClick={() => handleAnswer('B')}
            className={`w-full p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
              currentAnswer === 'B'
                ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 shadow-lg scale-[1.02]'
                : 'border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50 active:scale-[0.98]'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                currentAnswer === 'B' 
                  ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-500'
              }`}>
                B
              </span>
              <span className="text-base md:text-lg text-gray-800 flex-1">{currentQuestion.opt_b}</span>
              {currentAnswer === 'B' && (
                <span className="text-purple-600 text-xl">✓</span>
              )}
            </div>
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center justify-center gap-2 px-5 py-4 rounded-2xl transition-all ${
              currentStep === 0
                ? 'opacity-50 cursor-not-allowed bg-gray-100'
                : 'bg-white shadow-md hover:shadow-lg text-gray-700 active:scale-95'
            } flex-1 md:flex-none`}
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="font-medium">上一题</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!currentAnswer}
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all font-semibold text-lg flex-2 md:flex-none ${
              currentAnswer
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl active:scale-95'
                : 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-500'
            }`}
          >
            <span>{currentStep === totalQuestions - 1 ? '查看结果 ✨' : '下一题'}</span>
            {currentStep < totalQuestions - 1 && <ChevronRight className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
