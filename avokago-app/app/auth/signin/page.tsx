"use client";

import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { motion } from "motion/react";
import {
  Drama,
  ArrowLeft,
  Chrome,
  Sparkles,
  Shield,
  Users,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const result = await signIn("google", {
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (result?.ok) {
        // Session'ı kontrol et ve yönlendir
        const session = await getSession();
        if (session) {
          router.push("/dashboard");
        }
      }
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
              <div className="w-10 h-10 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-xl flex items-center justify-center">
                <Drama className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#357A38] font-bold text-lg">avokaGo</span>
            </motion.div>
          </Link>

          <Link href="/">
            <motion.button
              className="flex items-center space-x-2 text-[#6B4F1D] hover:text-[#357A38] transition-colors"
              whileHover={{ scale: 1.05, x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Ana Sayfa</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Side - Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.div
                className="inline-flex items-center bg-[#A7C957]/20 text-[#357A38] px-4 py-2 rounded-full text-sm font-medium border border-[#A7C957]/30 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Güvenli Giriş
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold text-[#6B4F1D] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Kişiselleştirilmiş
                <span className="bg-gradient-to-r from-[#357A38] to-[#568203] bg-clip-text text-transparent">
                  {" "}
                  Seyahat Deneyimi
                </span>
                ne Başlayın
              </motion.h1>

              <motion.p
                className="text-xl text-[#6B4F1D]/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Google hesabınızla giriş yaparak kişiselleştirilmiş seyahat
                önerilerinize hemen ulaşın.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              className="grid gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                {
                  icon: Shield,
                  title: "Güvenli ve Hızlı",
                  description: "Google OAuth ile güvenli giriş",
                },
                {
                  icon: Users,
                  title: "Topluluk Önerileri",
                  description: "Benzerlerin deneyimlerinden yararlanın",
                },
                {
                  icon: Zap,
                  title: "Anında Eşleştirme",
                  description: "AI destekli kişiselleştirme",
                },
                {
                  icon: Heart,
                  title: "Duygusal Bağlantı",
                  description: "Hislerinize uygun deneyimler",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#6B4F1D]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#6B4F1D]/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Sign In Form */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full max-w-md">
              <motion.div
                className="card p-8 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-3xl flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                >
                  <Drama className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h2
                  className="text-2xl font-bold text-[#6B4F1D] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  Hoş Geldiniz
                </motion.h2>

                <motion.p
                  className="text-[#6B4F1D]/70 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  Kişiselleştirilmiş seyahat deneyiminiz başlasın
                </motion.p>

                <motion.button
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center space-x-3 bg-white border-2 border-[#A7C957]/30 text-[#6B4F1D] p-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:border-[#357A38] hover:bg-[#357A38]/5 hover:scale-105"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  whileHover={!isLoading ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!isLoading ? { scale: 0.95 } : {}}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-[#357A38] border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ) : (
                    <Chrome className="w-6 h-6 text-[#4285F4]" />
                  )}
                  <span>
                    {isLoading ? "Giriş yapılıyor..." : "Google ile Giriş Yap"}
                  </span>
                </motion.button>

                {/* Environment Variables Warning */}
                <motion.div
                  className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <p className="text-xs text-yellow-700 text-center">
                    <strong>Geliştirici Notu:</strong> Google OAuth çalışması
                    için .env.local dosyasında GOOGLE_CLIENT_ID ve
                    GOOGLE_CLIENT_SECRET değerlerini ayarlayın.
                  </p>
                </motion.div>

                <motion.div
                  className="mt-6 pt-6 border-t border-[#A7C957]/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-xs text-[#6B4F1D]/60 leading-relaxed">
                    Giriş yaparak{" "}
                    <Link
                      href="/terms"
                      className="text-[#357A38] hover:underline"
                    >
                      Kullanım Şartları
                    </Link>{" "}
                    ve{" "}
                    <Link
                      href="/privacy"
                      className="text-[#357A38] hover:underline"
                    >
                      Gizlilik Politikası
                    </Link>
                    nı kabul etmiş olursunuz.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
