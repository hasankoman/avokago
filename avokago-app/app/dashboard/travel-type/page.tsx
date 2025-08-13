"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, ArrowRight, CheckCircle, RefreshCw } from "lucide-react";
import AdvancedTravelTypeTest from "@/components/AdvancedTravelTypeTest";
import { useSession } from "next-auth/react";

export default function TravelTypePage() {
    const [testCompleted, setTestCompleted] = useState(false);
    const [travelType, setTravelType] = useState<string | null>(null);
    const [existingTravelType, setExistingTravelType] = useState<string | null>(null);
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user?.travelType) {
            setExistingTravelType(session.user.travelType);
        }
    }, [session]);

    const handleTestComplete = (type: string) => {
        setTravelType(type);
        setTestCompleted(true);
        setExistingTravelType(type); // Mevcut tipi güncelle
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full">
                            <Compass className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Seyahat Tipini Bul
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kişiliğine ve tercihlerine göre senin için en uygun seyahat tipini
                        belirleyelim. Bu test sayesinde sana özel seyahat önerileri alabilir
                        ve benzer kişilikteki gezginlerle tanışabilirsin.
                    </p>
                </motion.div>

                        <AnimatePresence mode="wait">
          {!testCompleted ? (
            <motion.div
              key="test"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {existingTravelType ? (
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="mb-6">
                    <Compass className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Mevcut Seyahat Tipin
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Daha önce testi çözmüşsün. İşte senin seyahat tipin:
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Senin Seyahat Tipin:
                    </h3>
                    <div className="text-3xl font-bold text-green-700 mb-2">
                      {existingTravelType}
                    </div>
                    <p className="text-gray-600">
                      Bu seyahat tipine sahip gezginlerle tanışmak ve birlikte 
                      seyahat planlamak için topluluk sayfamızı ziyaret edebilirsin.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                      onClick={() => setTestCompleted(false)}
                    >
                      <RefreshCw className="w-4 h-4" />
                      Testi Tekrar Çöz
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Topluluğa Katıl
                    </motion.button>
                  </div>
                </div>
              ) : (
                                        <AdvancedTravelTypeTest onComplete={handleTestComplete} />
              )}
            </motion.div>
          ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-xl p-8 text-center"
                        >
                            <div className="mb-6">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    Test Tamamlandı!
                                </h2>
                                <p className="text-gray-600">
                                    Seyahat tipin başarıyla belirlendi ve kaydedildi.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Senin Seyahat Tipin:
                                </h3>
                                <div className="text-3xl font-bold text-green-700 mb-2">
                                    {travelType}
                                </div>
                                <p className="text-gray-600">
                                    Bu seyahat tipine sahip gezginlerle tanışmak ve birlikte
                                    seyahat planlamak için topluluk sayfamızı ziyaret edebilirsin.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                                    onClick={() => setTestCompleted(false)}
                                >
                                    Testi Tekrar Çöz
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                    Topluluğa Katıl
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
} 