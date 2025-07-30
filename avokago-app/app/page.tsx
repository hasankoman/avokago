"use client";

import { motion } from "motion/react";
import {
  Brain,
  Sparkles,
  ArrowRight,
  Mountain,
  Heart,
  Users,
  Drama,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F9F4] via-[#F9F9F4] to-[#F0E68C]/30 bg-pattern">
      {/* Header */}
      <motion.header
        className="p-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-xl flex items-center justify-center">
              <Drama className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#357A38] font-bold text-xl">avokaGo</span>
          </motion.div>

          <Link href="/auth/signin">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Giriş Yap
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#A7C957]/20 to-[#568203]/20 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#F0E68C]/20 to-[#A7C957]/20 rounded-full blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <motion.div
            className="inline-flex items-center bg-[#A7C957]/20 text-[#357A38] px-4 py-2 rounded-full text-sm font-medium border border-[#A7C957]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Kişiselleştirilmiş Seyahat Asistanı
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold text-[#6B4F1D] leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Seyahat
            <motion.span
              className="bg-gradient-to-r from-[#357A38] via-[#568203] to-[#A7C957] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {" "}
              Kişiliğinizi
            </motion.span>
            <br />
            Keşfedin
          </motion.h1>

          <motion.p
            className="text-xl text-[#6B4F1D]/80 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            AI destekli kişilik analizi ile size özel seyahat deneyimleri
            yaşayın. Sadece nereye değil, nasıl hissedeceğinizi de planlar.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/auth/signin">
              <motion.button
                className="group btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Brain className="w-5 h-5" />
                  <span>Başlayın</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { icon: Brain, title: "AI Analiz", subtitle: "Kişilik Testi" },
              { icon: Mountain, title: "500+", subtitle: "Destinasyon" },
              { icon: Heart, title: "Duygusal", subtitle: "Eşleştirme" },
              { icon: Users, title: "Sosyal", subtitle: "Topluluk" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-2xl flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-lg font-bold text-[#357A38]">
                  {item.title}
                </div>
                <div className="text-sm text-[#6B4F1D]/70">{item.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
