"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  ChevronLeft,
  ChevronRight,
  Drama,
  Mountain,
  PartyPopper,
  Heart,
  Sparkles,
  Check,
  ArrowRight,
  Leaf,
  Waves,
  Building,
  Sunset,
  Coffee,
  Camera,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  subtitle?: string;
  type: "choice" | "scale" | "multiple";
  options: {
    text: string;
    value: string;
    icon?: any;
    description?: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Tatilde en çok hangi duyguyu yaşamak istersiniz?",
    subtitle: "Size en yakın hissi seçin",
    type: "choice",
    options: [
      {
        text: "Huzur ve İç Dinginlik",
        value: "peace",
        icon: Leaf,
        description: "Sakin ve dingin anlar",
      },
      {
        text: "Heyecan ve Adrenalin",
        value: "excitement",
        icon: Mountain,
        description: "Yeni deneyimler",
      },
      {
        text: "Sosyal Bağlantı",
        value: "social",
        icon: Users,
        description: "İnsanlarla buluşma",
      },
      {
        text: "Romantizm ve İntimite",
        value: "romance",
        icon: Heart,
        description: "Özel anlar",
      },
    ],
  },
  {
    id: 2,
    question: "İdeal bir tatil günü nasıl başlar?",
    subtitle: "Sabah rutininizi düşünün",
    type: "choice",
    options: [
      {
        text: "Gün doğumunda yoga/meditasyon",
        value: "meditation",
        icon: Sunset,
        description: "Sakin başlangıç",
      },
      {
        text: "Erken kalkıp macera planları",
        value: "adventure",
        icon: Target,
        description: "Aktif başlangıç",
      },
      {
        text: "Yerel kahve dükkanında sohbet",
        value: "social",
        icon: Coffee,
        description: "Sosyal başlangıç",
      },
      {
        text: "Sevdiğinizle geç kahvaltı",
        value: "intimate",
        icon: Heart,
        description: "Romantik başlangıç",
      },
    ],
  },
  {
    id: 3,
    question: "Seyahat fotoğraflarınızda çoğunlukla ne olur?",
    subtitle: "Hangi anları ölümsüzleştirirsiniz",
    type: "choice",
    options: [
      {
        text: "Doğa manzaraları ve yalnız anlar",
        value: "nature",
        icon: Mountain,
        description: "Kişisel deneyimler",
      },
      {
        text: "Macera aktiviteleri ve action",
        value: "action",
        icon: Camera,
        description: "Hareketli anlar",
      },
      {
        text: "Grup fotoğrafları ve sosyal anlar",
        value: "group",
        icon: Users,
        description: "Paylaşılan anlar",
      },
      {
        text: "Çift fotoğrafları ve romantik anlar",
        value: "couple",
        icon: Heart,
        description: "İntim anlar",
      },
    ],
  },
  {
    id: 4,
    question: "Hangi aktivite sizi daha çok cezbeder?",
    subtitle: "Tercihinizi yapın",
    type: "choice",
    options: [
      {
        text: "Ormanda sessiz yürüyüş",
        value: "peaceful",
        icon: Leaf,
        description: "Doğayla bütünleşme",
      },
      {
        text: "Dağ tırmanışı veya extreme spor",
        value: "extreme",
        icon: Mountain,
        description: "Sınırları zorlama",
      },
      {
        text: "Yerel festival veya etkinlik",
        value: "cultural",
        icon: Building,
        description: "Kültürel deneyim",
      },
      {
        text: "Plajda romantik yemek",
        value: "romantic",
        icon: Waves,
        description: "Romantik deneyim",
      },
    ],
  },
  {
    id: 5,
    question: "Tatil planlarken en çok neyi araştırırsınız?",
    subtitle: "Nelere odaklanırsınız",
    type: "choice",
    options: [
      {
        text: "Sakin ve huzurlu mekanlar",
        value: "peaceful_places",
        icon: Leaf,
        description: "İç huzur arayışı",
      },
      {
        text: "Macera aktiviteleri ve sporlar",
        value: "activities",
        icon: Mountain,
        description: "Adrenalin arayışı",
      },
      {
        text: "Yerel kültür ve sosyal mekanlar",
        value: "culture",
        icon: Building,
        description: "Sosyal deneyim",
      },
      {
        text: "Romantik restoranlar ve mekanlar",
        value: "romantic_places",
        icon: Heart,
        description: "Romantik deneyim",
      },
    ],
  },
];

const profileResults = {
  peace: {
    title: "Ruh Arayan Keşifçi",
    icon: Leaf,
    color: "from-[#357A38] to-[#568203]",
    description:
      "Huzur ve doğa odaklı seyahatler. İçsel keşif ve ruh dinginliği arayan gezgin.",
    traits: [
      "Doğayla bütünleşme",
      "İç huzur arayışı",
      "Meditasyon ve yoga",
      "Sakin destinasyonlar",
    ],
    destinations: [
      "Kapadokya Gizli Vadileri",
      "Ayder Yaylası",
      "Olimpos Doğa Kampı",
    ],
  },
  excitement: {
    title: "Dingin Maceraperest",
    icon: Mountain,
    color: "from-[#568203] to-[#A7C957]",
    description:
      "Adrenalin ve keşif dolu, aktif doğa deneyimleri. Sınırlarını zorlayan gezgin.",
    traits: [
      "Extreme sporlar",
      "Doğa aktiviteleri",
      "Adrenalin arayışı",
      "Fiziksel challenge",
    ],
    destinations: [
      "Antalya Adventure",
      "Fethiye Outdoor",
      "Kaçkar Dağları Trekking",
    ],
  },
  social: {
    title: "Sosyalleşen Kaçak",
    icon: PartyPopper,
    color: "from-[#A7C957] to-[#F0E68C]",
    description:
      "Kültür, insanlar ve eğlence odaklı şehir deneyimleri. Sosyal bağlantı arayan gezgin.",
    traits: [
      "Kültürel deneyimler",
      "Sosyal aktiviteler",
      "Yerel yaşam",
      "Gece hayatı",
    ],
    destinations: [
      "İstanbul Kültür Turu",
      "İzmir Gastronomi",
      "Bodrum Sosyal Yaşam",
    ],
  },
  romance: {
    title: "Romantik Rüyacı",
    icon: Heart,
    color: "from-[#F0E68C] to-[#A7C957]",
    description:
      "Çift kaçamakları ve özel anlar için tasarlanmış romantik seyahatler.",
    traits: [
      "Romantik atmosfer",
      "İntim deneyimler",
      "Çift aktiviteleri",
      "Özel anlar",
    ],
    destinations: [
      "Kaş Romantik Kaçamak",
      "Alaçatı İkili Tatil",
      "Assos Romantik Gezi",
    ],
  },
};

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [profileType, setProfileType] = useState<string>("");

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === questions.length - 1;
  const currentQuestion = questions[currentStep];

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const nextStep = () => {
    if (isLastStep) {
      calculateResult();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const calculateResult = () => {
    const scores = {
      peace: 0,
      excitement: 0,
      social: 0,
      romance: 0,
    };

    Object.values(answers).forEach((answer) => {
      if (
        [
          "peace",
          "meditation",
          "nature",
          "peaceful",
          "peaceful_places",
        ].includes(answer)
      ) {
        scores.peace++;
      } else if (
        ["excitement", "adventure", "action", "extreme", "activities"].includes(
          answer
        )
      ) {
        scores.excitement++;
      } else if (["social", "group", "cultural", "culture"].includes(answer)) {
        scores.social++;
      } else if (
        [
          "romance",
          "intimate",
          "couple",
          "romantic",
          "romantic_places",
        ].includes(answer)
      ) {
        scores.romance++;
      }
    });

    const maxScore = Math.max(...Object.values(scores));
    const winningType =
      Object.entries(scores).find(([_, score]) => score === maxScore)?.[0] ||
      "peace";

    setProfileType(winningType);
    setShowResult(true);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResult) {
    const result = profileResults[profileType as keyof typeof profileResults];
    const IconComponent = result.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F9F9F4] via-[#F9F9F4] to-[#F0E68C]/30 bg-pattern">
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/images/yeni_logo.png" alt="kivaGo" className="w-full h-full object-contain" />
                </div>
                <span className="text-[#357A38] font-bold text-lg">
                  kivaGo
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Result Display */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <motion.div
                className="inline-flex items-center bg-[#A7C957]/20 text-[#357A38] px-4 py-2 rounded-full text-sm font-medium border border-[#A7C957]/30 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Kişilik Analizi Tamamlandı
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold text-[#6B4F1D] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Siz bir
                <span
                  className={`bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}
                >
                  {" "}
                  {result.title}
                </span>
                siniz!
              </motion.h1>

              <motion.p
                className="text-xl text-[#6B4F1D]/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {result.description}
              </motion.p>
            </motion.div>

            <motion.div
              className="card p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  className={`w-24 h-24 bg-gradient-to-tr ${result.color} rounded-3xl flex items-center justify-center shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="w-12 h-12 text-white" />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#6B4F1D] mb-4">
                    Kişilik Özellikleri
                  </h3>
                  <div className="space-y-3">
                    {result.traits.map((trait, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-[#357A38] rounded-full"></div>
                        <span className="text-[#6B4F1D]">{trait}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#6B4F1D] mb-4">
                    Size Özel Destinasyonlar
                  </h3>
                  <div className="space-y-3">
                    {result.destinations.map((destination, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#F0E68C]/20 p-3 rounded-xl border border-[#F0E68C]/30"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <span className="text-[#6B4F1D] font-medium">
                          {destination}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link href="/dashboard">
                <motion.button
                  className="btn-primary text-lg px-8 py-4 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Dashboard'a Git</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9F4] via-[#F9F9F4] to-[#F0E68C]/30 bg-pattern">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/images/yeni_logo.png" alt="kivaGo" className="w-full h-full object-contain" />
              </div>
              <span className="text-[#357A38] font-bold text-lg">kivaGo</span>
            </motion.div>
          </Link>

          <div className="text-sm text-[#6B4F1D]/70">
            {currentStep + 1} / {questions.length}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-full bg-[#A7C957]/20 rounded-full h-2 mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-[#357A38] to-[#568203] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </motion.div>

        {/* Question Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="card p-8 md:p-12"
            >
              <div className="text-center mb-12">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-3xl flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <Brain className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-[#6B4F1D] mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentQuestion.question}
                </motion.h2>

                {currentQuestion.subtitle && (
                  <motion.p
                    className="text-[#6B4F1D]/70"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentQuestion.subtitle}
                  </motion.p>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {currentQuestion.options.map((option, index) => {
                  const IconComponent = option.icon;
                  const isSelected =
                    answers[currentQuestion.id] === option.value;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 ${isSelected
                          ? "border-[#357A38] bg-[#357A38]/10 shadow-lg"
                          : "border-[#A7C957]/30 bg-white/60 hover:border-[#357A38]/50 hover:bg-[#357A38]/5"
                        }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isSelected
                              ? "bg-[#357A38] text-white"
                              : "bg-[#A7C957]/20 text-[#357A38]"
                            }`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {IconComponent && (
                            <IconComponent className="w-6 h-6" />
                          )}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#6B4F1D] mb-1">
                            {option.text}
                          </h3>
                          {option.description && (
                            <p className="text-sm text-[#6B4F1D]/70">
                              {option.description}
                            </p>
                          )}
                        </div>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-[#357A38] rounded-full flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.div
            className="flex justify-between items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={prevStep}
              disabled={isFirstStep}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${isFirstStep
                  ? "text-[#6B4F1D]/40 cursor-not-allowed"
                  : "text-[#6B4F1D] hover:bg-[#A7C957]/20 hover:scale-105"
                }`}
              whileHover={!isFirstStep ? { scale: 1.05, x: -5 } : {}}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Önceki</span>
            </motion.button>

            <motion.button
              onClick={nextStep}
              disabled={!answers[currentQuestion.id]}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${!answers[currentQuestion.id]
                  ? "bg-[#A7C957]/40 text-white/70 cursor-not-allowed"
                  : "btn-primary"
                }`}
              whileHover={
                answers[currentQuestion.id] ? { scale: 1.05, x: 5 } : {}
              }
              whileTap={answers[currentQuestion.id] ? { scale: 0.95 } : {}}
            >
              <span>{isLastStep ? "Sonuçları Gör" : "Sonraki"}</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
