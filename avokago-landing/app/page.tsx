"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Brain,
  Mountain,
  Waves,
  Star,
  Drama,
  Bot,
  Map,
  Target,
  Leaf,
  PartyPopper,
  Heart,
  Rocket,
  Mail,
  Smartphone,
  Globe,
  MapPin,
  Sprout,
  Bike,
  Building,
  Wine,
  Sunrise,
  ArrowRight,
  Menu,
  Users,
} from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#F9F9F4] via-[#F9F9F4] to-[#F0E68C]/30 ${spaceGrotesk.className}`}
    >
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 pt-6 px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center relative">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-1 absolute px-6 py-3"
            animate={{
              left: isScrolled ? "0%" : "50%",
              x: isScrolled ? "0%" : "-50%",
              scale: isScrolled ? 1 : 1.5,
              y: isScrolled ? 0 : 10,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <motion.div
              className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src="/images/yeni_logo.png"
                alt="kivaGo Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.span
              className="text-[#357A38] font-semibold text-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              kivaGo
            </motion.span>
          </motion.div>

          {/* Navigation Section */}
          <motion.div
            className="flex items-center bg-[#6d5c3f]/15 backdrop-blur-sm rounded-2xl px-6 py-3 border border-[#6B4E1C]/20 ml-auto"
            animate={{
              opacity: isScrolled ? 1 : 0,
              x: isScrolled ? 0 : 100,
            }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            style={{ pointerEvents: isScrolled ? "auto" : "none" }}
          >
            <div className="flex items-center space-x-6 mr-6">
              {["Özellikler", "Nasıl Çalışır", "Profiller"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item === "Özellikler"
                        ? "features"
                        : item === "Nasıl Çalışır"
                          ? "how-it-works"
                          : "profiles"
                      }`}
                    className="text-[#6B4F1D]/80 hover:text-[#6B4F1D] transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
            <div className="border-l border-white/30 pl-6">
              <Link href="/onboarding">
                <motion.button
                  className="bg-[#357A38] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#357A38]/90 transition-all duration-200 hover:shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Başlayın
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30 ml-auto"
            animate={{
              opacity: isScrolled ? 1 : 0,
              x: isScrolled ? 0 : 100,
            }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            style={{ pointerEvents: isScrolled ? "auto" : "none" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-5 h-5 text-[#357A38]" />
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          ></motion.div>
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
          ></motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#357A38]/10 via-[#A7C957]/10 to-[#F0E68C]/10 rounded-full blur-3xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </div>

        <div className="relative z-10 mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
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
                  Nereye
                  <motion.span
                    className="bg-gradient-to-r from-[#357A38] via-[#568203] to-[#A7C957] bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    Gitsem?
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="text-xl text-[#6B4F1D]/80 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Kişiliğinizi anlayan AI ile size özel seyahat deneyimleri
                  keşfedin. Sadece nereye değil, nasıl hissedeceğinizi de
                  planlar. Sizinle aynı tatil rolüne sahip kişilerle eşleşin.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/onboarding">
                    <button className="group bg-gradient-to-r from-[#357A38] to-[#568203] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-[#357A38]/25 transition-all duration-300 transform hover:scale-105 w-full">
                      <span className="flex items-center justify-center space-x-2">
                        <span>Keşfetmeye başla</span>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Link>
                </motion.div>
                <motion.a
                  href="#how-it-works"
                  className="bg-white/80 backdrop-blur-sm text-[#6B4F1D] px-8 py-4 rounded-full text-lg font-semibold border border-[#A7C957]/30 hover:bg-white hover:shadow-lg transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Nasıl Çalışır?
                </motion.a>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-4 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { value: "AI", label: "Destekli" },
                  { value: "100%", label: "Kişisel" },
                  { value: "500+", label: "Destinasyon" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#A7C957]/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-2xl font-bold text-[#357A38]">
                      {item.value}
                    </div>
                    <div className="text-sm text-[#6B4F1D]/70">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Interactive Demo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#6B4F1D]/10 p-8 border border-[#A7C957]/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-2xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Brain className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-[#6B4F1D] text-lg">
                        Tatil Rolünü Keşfet
                      </h3>
                      <p className="text-[#6B4F1D]/70 text-sm">
                        AI ile anında profil oluşturma
                      </p>
                    </div>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.div
                      className="bg-gradient-to-r from-[#A7C957]/20 to-[#F0E68C]/20 p-4 rounded-2xl border border-[#A7C957]/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#357A38] font-semibold">
                          Ruh Arayan Keşifçi
                        </span>
                        <motion.span
                          className="text-[#357A38] text-sm bg-[#A7C957]/20 px-2 py-1 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                            delay: 1,
                          }}
                        >
                          %97
                        </motion.span>
                      </div>
                      <p className="text-[#6B4F1D] text-sm">
                        Huzur ve doğa odaklı seyahatler
                      </p>
                    </motion.div>

                    <div className="space-y-3">
                      {[
                        {
                          icon: Mountain,
                          title: "Kapadokya Gizli Vadileri",
                          subtitle: "3 gün • Kendini keşfet",
                        },
                        {
                          icon: Waves,
                          title: "Ayder Yaylası Doğa Turu",
                          subtitle: "2 gün • Huzur bulma",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/80 p-4 rounded-xl border border-[#A7C957]/30 hover:shadow-md transition-shadow"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <div className="flex items-center space-x-3">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                              }}
                            >
                              <item.icon className="w-8 h-8 text-[#568203]" />
                            </motion.div>
                            <div>
                              <p className="font-semibold text-[#6B4F1D]">
                                {item.title}
                              </p>
                              <p className="text-[#6B4F1D]/70 text-sm">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="mt-4 pt-4 border-t border-[#A7C957]/30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <div className="flex items-center space-x-3 text-[#6B4F1D]">
                        <Users className="w-4 h-4 text-[#568203]" />
                        <span className="text-sm font-medium">
                          İstersen diğer Ruh Arayan Keşifçiler İle Görüş
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-tr from-[#A7C957] to-[#357A38] rounded-2xl opacity-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#F0E68C] to-[#A7C957] rounded-3xl opacity-10"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -3, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F4] via-[#F9F9F4]/50 to-[#F9F9F4]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-[#A7C957]/20 text-[#357A38] px-4 py-2 rounded-full text-sm font-medium border border-[#A7C957]/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 mr-2" /> Özelliklerimiz
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-[#6B4F1D] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Fark Yaratan
              <br />
              <motion.span
                className="bg-gradient-to-r from-[#357A38] to-[#568203] bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Özellikler
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-[#6B4F1D]/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Kullanıcının kişisel yanıtları, alışkanlıkları ve hedefleri
              üzerinden onun için en uygun seyahati kişiselleştirilmiş bir
              asistan gibi planlar.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl shadow-[#6B4F1D]/5 border border-[#A7C957]/30 hover:shadow-2xl hover:shadow-[#6B4F1D]/10 transition-all duration-500 transform hover:-translate-y-2"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative mb-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Drama className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-[#F0E68C] rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-[#6B4F1D]" />
                  </motion.div>
                </div>

                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-[#6B4F1D]">
                    Duygusal Seyahat Profili
                  </h3>
                  <p className="text-[#6B4F1D]/70 leading-relaxed">
                    Yalnızca "nereye gitmek" değil, "nasıl hissetmek" istediğini
                    de anlayan seyahat motoru. kivaGo AI, cevapladığın
                    sorularla duygusal kimliğini analiz eder ve sana özel ruh
                    haline uygun seyahat önerileri oluşturur.
                  </p>

                  <div className="bg-[#F0E68C]/20 rounded-2xl p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#357A38] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        Tatil rolünü keşfet ve ruh hali analizi
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#568203] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        "Ruh Arayan", "Sosyalleşen Kaçak" gibi özgün profil
                        etiketleri
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#A7C957] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        Tatilin amacıyla ruh halinin uyumunu sağlar
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#357A38] to-[#568203] bg-clip-text text-transparent">
                      92%
                    </div>
                    <div className="text-sm text-[#6B4F1D]/70">
                      Kullanıcılar kendini önerilen profilde tanımlıyor
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="group relative lg:mt-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl shadow-[#6B4F1D]/5 border border-[#A7C957]/30 hover:shadow-2xl hover:shadow-[#6B4F1D]/10 transition-all duration-500 transform hover:-translate-y-2"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative mb-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-tr from-[#568203] to-[#A7C957] rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-rotate-3"
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Bot className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-[#A7C957] rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, -15, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Brain className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-[#6B4F1D]">
                    AI Destekli Anlamlı Öneri Motoru
                  </h3>
                  <p className="text-[#6B4F1D]/70 leading-relaxed">
                    Sadece algoritma değil, sana rehberlik eden dijital bir yol
                    arkadaşı. Makine öğrenmesi ile her kullanıcıdan öğrenen ve
                    önerilerini sürekli geliştiren kişisel seyahat danışmanı.
                  </p>

                  <div className="bg-[#F0E68C]/20 rounded-2xl p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#357A38] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        Sürekli öğrenen öneri sistemi
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#568203] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        Yalnızca popüler değil, sana özel gizli lokasyonlar
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#A7C957] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        "Bu seyahatte yapmadan dönme" gibi özel öneriler
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#F0E68C] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        Geribildirimle gelişen tavsiyeler
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#568203] to-[#A7C957] bg-clip-text text-transparent">
                      87%
                    </div>
                    <div className="text-sm text-[#6B4F1D]/70">
                      Memnuniyet oranı ile kişiselleştirme başarısı
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl shadow-[#6B4F1D]/5 border border-[#A7C957]/30 hover:shadow-2xl hover:shadow-[#6B4F1D]/10 transition-all duration-500 transform hover:-translate-y-2"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative mb-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-tr from-[#F0E68C] to-[#A7C957] rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3"
                    whileHover={{ scale: 1.15, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Map className="w-10 h-10 text-[#6B4F1D]" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-[#568203] rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.4, 1],
                      rotate: [0, 20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <Target className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-[#6B4F1D]">
                    Deneyim Bazlı Rotalar
                  </h3>
                  <p className="text-[#6B4F1D]/70 leading-relaxed">
                    Tatil değil, bir içsel yolculuk. Turistik yerler yerine,
                    kişisel dönüşüm odaklı rotalar sunar. Her rota bir ruh
                    haline, bir arayışa cevap verir.
                  </p>

                  <div className="bg-[#F0E68C]/20 rounded-2xl p-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#357A38] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        500+ özgün rota (örneğin: "Yavaşla ve Yenilen:
                        Kazdağları Meditasyon Patikası")
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#568203] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        Kendi iç sesine uygun aktiviteler (yoga, ilham
                        yürüyüşleri, gece yıldız izleme vb.)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#A7C957] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        İstersen yalnız, istersen aynı profildeki gezginlerle
                        eşleştirilebilirsin
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="min-w-2 min-h-2 bg-[#F0E68C] rounded-full"></div>
                      <span className="text-sm font-medium text-[#6B4F1D] text-left">
                        Deneyim bazlı günlük plan önerileri
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#568203] to-[#A7C957] bg-clip-text text-transparent">
                      78%
                    </div>
                    <div className="text-sm text-[#6B4F1D]/70">
                      Deneyimi "beklentilerimin ötesinde" olarak tanımladı
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        className="py-24 bg-[#F0E68C]/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-[#A7C957]/20 text-[#357A38] px-4 py-2 rounded-full text-sm font-medium border border-[#A7C957]/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 mr-2" /> Nasıl Çalışır
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-[#6B4F1D] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              3 Adımda Mükemmel
              <br />
              <motion.span
                className="bg-gradient-to-r from-[#357A38] to-[#568203] bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Seyahat Planı
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#357A38] via-[#568203] to-[#A7C957] transform -translate-y-1/2 rounded-full"></div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step 1 - Duygusal Profil */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#6B4F1D]/5 border border-[#A7C957]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Drama className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F0E68C] rounded-full animate-ping"></div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-[#6B4F1D]">
                      Duygusal Seyahat Profili
                    </h3>
                    <p className="text-[#6B4F1D]/70">
                      "Nasıl hissetmek istediğiniz" temelinde benzersiz tatil
                      rolünüzü keşfedin
                    </p>

                    <div className="bg-[#F0E68C]/20 rounded-xl p-4 space-y-3">
                      <div className="text-xs text-[#6B4F1D]/70 text-left mb-2">
                        Duygusal analiz süreci:
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="min-w-2 min-h-2 bg-[#357A38] rounded-full"></div>
                        <span className="text-xs text-[#6B4F1D] text-left">
                          Ruh hali ve arayışlarınız
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="min-w-2 min-h-2 bg-[#568203] rounded-full"></div>
                        <span className="text-xs text-[#6B4F1D] text-left">
                          Tatilden beklentileriniz
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="min-w-2 min-h-2 bg-[#A7C957] rounded-full"></div>
                        <span className="text-xs text-[#6B4F1D] text-left">
                          "Ruh Arayan", "Sosyalleşen" gibi profil etiketleri
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - AI Öneri Motoru */}
              <div className="relative lg:mt-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#6B4F1D]/5 border border-[#A7C957]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#568203] to-[#A7C957] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#A7C957] rounded-full animate-ping delay-300"></div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-[#6B4F1D]">
                      AI Destekli Anlamlı Öneriler
                    </h3>
                    <p className="text-[#6B4F1D]/70">
                      Sürekli öğrenen AI ile popüler değil, size özel gizli
                      lokasyonlar bulur
                    </p>

                    <div className="bg-[#F0E68C]/20 rounded-xl p-4 space-y-3">
                      <div className="text-xs text-[#6B4F1D]/70 text-left mb-2">
                        Öğrenen AI sistemi:
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="min-w-2 min-h-2 bg-[#357A38] rounded-full"></div>
                        <span className="text-xs text-[#6B4F1D] text-left">
                          Her kullanıcıdan öğrenir
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="min-w-2 min-h-2 bg-[#568203] rounded-full"></div>
                        <span className="text-xs text-[#6B4F1D] text-left">
                          Gizli nokta önerileri
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="min-w-2 min-h-2 bg-[#A7C957] rounded-full"></div>
                        <span className="text-xs text-[#6B4F1D] text-left">
                          "Bu seyahatte yapmadan dönme" tavsiyeleri
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Deneyim Bazlı Rotalar */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#6B4F1D]/5 border border-[#A7C957]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#A7C957] to-[#F0E68C] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Map className="w-8 h-8 text-[#6B4F1D]" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#568203] rounded-full animate-ping delay-500"></div>
                  </div>

                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-[#6B4F1D]">
                      Deneyim Bazlı Rotalar
                    </h3>
                    <p className="text-[#6B4F1D]/70">
                      Turistik yer değil, içsel yolculuk. Kişisel dönüşüm odaklı
                      500+ özgün rota
                    </p>

                    <div className="bg-[#F0E68C]/20 rounded-xl p-4 space-y-3">
                      <div className="text-xs text-[#6B4F1D]/70 text-left mb-2">
                        Deneyim odaklı rotalar:
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3 text-[#357A38]" />
                        <div className="text-left flex-1">
                          <div className="text-xs font-medium text-[#6B4F1D]">
                            "Yavaşla ve Yenilen: Kazdağları Meditasyon"
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mountain className="w-3 h-3 text-[#568203]" />
                        <div className="text-left flex-1">
                          <div className="text-xs font-medium text-[#6B4F1D]">
                            Yoga, ilham yürüyüşleri, yıldız izleme
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-3 h-3 text-[#A7C957]" />
                        <div className="text-left flex-1">
                          <div className="text-xs font-medium text-[#6B4F1D]">
                            Yalnız ya da aynı profildeki gezginlerle
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/onboarding">
              <button className="bg-gradient-to-r from-[#357A38] to-[#568203] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#357A38]/25 transform hover:scale-105 transition-all duration-300">
                Hemen Başlayın - Ücretsiz
              </button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Travel Profiles Section */}
      <motion.section
        id="profiles"
        className="py-24 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F9F4] via-[#A7C957]/10 to-[#F0E68C]/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center bg-[#A7C957]/20 text-[#357A38] px-4 py-2 rounded-full text-sm font-medium border border-[#A7C957]/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Drama className="w-4 h-4 mr-2" /> Kişilik Profilleri
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-[#6B4F1D] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Hangi Gezgin
              <br />
              <motion.span
                className="bg-gradient-to-r from-[#357A38] to-[#568203] bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Tipisiniz?
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-[#6B4F1D]/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              AI destekli kişilik analizi ile benzersiz seyahat profilinizi
              keşfedin
            </motion.p>
          </motion.div>

          {/* Profile Tabs */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-[#A7C957]/30 shadow-lg relative"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Sliding Background */}
              <motion.div
                className="absolute top-2 bottom-2 bg-gradient-to-r from-[#357A38] to-[#568203] rounded-xl shadow-lg"
                animate={{
                  left: `calc(${activeTab * 25}% + 8px)`,
                  width: "calc(25% - 16px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />

              <div className="relative flex">
                {["Ruh Arayan", "Maceraperest", "Sosyalleşen", "Romantik"].map(
                  (profile, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex-1 relative z-10 ${activeTab === index
                          ? "text-white"
                          : "text-[#6B4F1D]/70 hover:text-[#6B4F1D]"
                        }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {profile}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.div
                    key="ruh-arayan"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-[#6B4F1D] mb-4 flex items-center">
                        Ruh Arayan Keşifçi{" "}
                        <Leaf className="w-8 h-8 ml-2 text-[#357A38]" />
                      </h3>
                      <p className="text-lg text-[#6B4F1D]/80 leading-relaxed">
                        Sessiz vadiler, huzurlu anlar ve içsel keşif odaklı
                        seyahatler. Doğayla bütünleşerek iç huzurunuzu
                        bulacağınız destinasyonları keşfedin.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-[#A7C957]/20 rounded-xl border border-[#A7C957]/30">
                        <span className="text-[#357A38] font-semibold">
                          Huzur
                        </span>
                      </div>
                      <div className="text-center p-4 bg-[#568203]/20 rounded-xl border border-[#568203]/30">
                        <span className="text-[#568203] font-semibold">
                          Doğa
                        </span>
                      </div>
                      <div className="text-center p-4 bg-[#F0E68C]/20 rounded-xl border border-[#F0E68C]/30">
                        <span className="text-[#6B4F1D] font-semibold">
                          Meditasyon
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div
                    key="maceraperest"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-[#6B4F1D] mb-4 flex items-center">
                        Dingin Maceraperest{" "}
                        <Mountain className="w-8 h-8 ml-2 text-[#568203]" />
                      </h3>
                      <p className="text-lg text-[#6B4F1D]/80 leading-relaxed">
                        Adrenalin ve keşif dolu, aktif doğa deneyimleri.
                        Sınırlarınızı zorlayacak ve unutulmaz anılar
                        yaratacağınız macera rotaları.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-[#568203]/20 rounded-xl border border-[#568203]/30">
                        <span className="text-[#568203] font-semibold">
                          Macera
                        </span>
                      </div>
                      <div className="text-center p-4 bg-[#357A38]/20 rounded-xl border border-[#357A38]/30">
                        <span className="text-[#357A38] font-semibold">
                          Spor
                        </span>
                      </div>
                      <div className="text-center p-4 bg-[#F0E68C]/20 rounded-xl border border-[#F0E68C]/30">
                        <span className="text-[#6B4F1D] font-semibold">
                          Keşif
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    key="sosyallesen"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-[#6B4F1D] mb-4 flex items-center">
                        Sosyalleşen Kaçak{" "}
                        <PartyPopper className="w-8 h-8 ml-2 text-[#A7C957]" />
                      </h3>
                      <p className="text-lg text-[#6B4F1D]/80 leading-relaxed">
                        Kültür, insanlar ve eğlence odaklı şehir deneyimleri.
                        Yerel yaşamla iç içe, sosyal bağlantılar kuracağınız
                        canlı destinasyonlar.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-[#A7C957]/20 rounded-xl border border-[#A7C957]/30">
                        <span className="text-[#357A38] font-semibold">
                          Kültür
                        </span>
                      </div>
                      <div className="text-center p-4 bg-[#F0E68C]/20 rounded-xl border border-[#F0E68C]/30">
                        <span className="text-[#6B4F1D] font-semibold">
                          Sosyal
                        </span>
                      </div>
                      <div className="text-center p-4 bg-[#568203]/20 rounded-xl border border-[#568203]/30">
                        <span className="text-[#568203] font-semibold">
                          Gece Hayatı
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 3 && (
                  <motion.div
                    key="romantik"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-[#6B4F1D] mb-4 flex items-center">
                        Romantik Rüyacı{" "}
                        <Heart className="w-8 h-8 ml-2 text-[#A7C957]" />
                      </h3>
                      <p className="text-lg text-[#6B4F1D]/80 leading-relaxed">
                        Çift kaçamakları ve özel anlar için tasarlanmış romantik
                        seyahatler. Sevdiklerinizle unutulmaz hatıralar
                        yaratacağınız büyülü destinasyonlar.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-[#F0E68C]/20 rounded-xl border border-[#F0E68C]/30">
                        <span className="text-[#6B4F1D] font-semibold">
                          Romantizm
                        </span>
                      </div>
                      <div className="text-center p-4 bg-[#A7C957]/20 rounded-xl border border-[#A7C957]/30">
                        <span className="text-[#357A38] font-semibold">
                          Çift
                        </span>
                      </div>
                      <div className="text-center p-4 bg-[#568203]/20 rounded-xl border border-[#568203]/30">
                        <span className="text-[#568203] font-semibold">
                          Özel
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-[#6B4F1D]/10 border border-[#A7C957]/30">
                <div className="space-y-6">
                  <div className="text-center">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-3xl flex items-center justify-center mx-auto mb-4"
                      key={`icon-${activeTab}`}
                      initial={{ scale: 0.8, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="w-10 h-10 text-white">
                        {activeTab === 0 ? (
                          <Leaf />
                        ) : activeTab === 1 ? (
                          <Mountain />
                        ) : activeTab === 2 ? (
                          <PartyPopper />
                        ) : (
                          <Heart />
                        )}
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-[#6B4F1D] mb-2">
                      Önerilen Destinasyonlar
                    </h4>
                  </div>

                  <div className="space-y-4 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {activeTab === 0 && (
                        <motion.div
                          key="destinations-ruh-arayan"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.2,
                          }}
                          className="space-y-4"
                        >
                          <div className="bg-[#A7C957]/20 p-4 rounded-xl border border-[#A7C957]/30 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3">
                              <Mountain className="w-8 h-8 text-[#357A38]" />
                              <div>
                                <div className="font-semibold text-[#6B4F1D]">
                                  Kapadokya Gizli Vadileri
                                </div>
                                <div className="text-[#357A38] text-sm">
                                  Huzur ve doğa
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#568203]/20 p-4 rounded-xl border border-[#568203]/30 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3">
                              <Sprout className="w-8 h-8 text-[#568203]" />
                              <div>
                                <div className="font-semibold text-[#6B4F1D]">
                                  Ayder Yaylası
                                </div>
                                <div className="text-[#568203] text-sm">
                                  Doğayla bütünleşme
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 1 && (
                        <motion.div
                          key="destinations-maceraperest"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.2,
                          }}
                          className="space-y-4"
                        >
                          <div className="bg-[#568203]/20 p-4 rounded-xl border border-[#568203]/30 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3">
                              <Bike className="w-8 h-8 text-[#568203]" />
                              <div>
                                <div className="font-semibold text-[#6B4F1D]">
                                  Antalya Extreme Sports
                                </div>
                                <div className="text-[#568203] text-sm">
                                  Adrenalin ve macera
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#357A38]/20 p-4 rounded-xl border border-[#357A38]/30 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3">
                              <Mountain className="w-8 h-8 text-[#357A38]" />
                              <div>
                                <div className="font-semibold text-[#6B4F1D]">
                                  Fethiye Outdoor
                                </div>
                                <div className="text-[#357A38] text-sm">
                                  Doğa sporları
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 2 && (
                        <motion.div
                          key="destinations-sosyallesen"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.2,
                          }}
                          className="space-y-4"
                        >
                          <div className="bg-[#A7C957]/20 p-4 rounded-xl border border-[#A7C957]/30 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3">
                              <Building className="w-8 h-8 text-[#357A38]" />
                              <div>
                                <div className="font-semibold text-[#6B4F1D]">
                                  İstanbul Kültür Turu
                                </div>
                                <div className="text-[#357A38] text-sm">
                                  Tarih ve sosyal yaşam
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#F0E68C]/20 p-4 rounded-xl border border-[#F0E68C]/30 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3">
                              <Wine className="w-8 h-8 text-[#6B4F1D]" />
                              <div>
                                <div className="font-semibold text-[#6B4F1D]">
                                  İzmir Gastronomi
                                </div>
                                <div className="text-[#6B4F1D]/70 text-sm">
                                  Lezzet ve eğlence
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 3 && (
                        <motion.div
                          key="destinations-romantik"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.2,
                          }}
                          className="space-y-4"
                        >
                          <div className="bg-[#F0E68C]/20 p-4 rounded-xl border border-[#F0E68C]/30 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3">
                              <Sunrise className="w-8 h-8 text-[#6B4F1D]" />
                              <div>
                                <div className="font-semibold text-[#6B4F1D]">
                                  Kaş Romantik Kaçamak
                                </div>
                                <div className="text-[#6B4F1D]/70 text-sm">
                                  Çift seyahati
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#A7C957]/20 p-4 rounded-xl border border-[#A7C957]/30 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-3">
                              <Waves className="w-8 h-8 text-[#357A38]" />
                              <div>
                                <div className="font-semibold text-[#6B4F1D]">
                                  Alaçatı İkili Tatil
                                </div>
                                <div className="text-[#357A38] text-sm">
                                  Romantik ortam
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Assessment CTA */}
          <div className="mt-20 bg-gradient-to-br from-[#357A38] via-[#568203] to-[#A7C957] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Profilinizi Keşfedin
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                3 dakikalık AI analizi ile seyahat kişiliğinizi öğrenin ve size
                özel deneyimler yaşamaya başlayın
              </p>
              <Link href="/onboarding">
                <button className="bg-white text-[#357A38] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>Profilimi Keşfet - Ücretsiz</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-[#6B4F1D] text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/yeni_logo.png"
                    alt="kivaGo Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-xl">kivaGo</span>
              </div>
              <p className="text-[#F0E68C]/80 leading-relaxed">
                Kişiselleştirilmiş seyahat asistanınız. Size özel deneyimler
                için tasarlandı.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-[#357A38]/20 hover:bg-[#357A38] rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-[#357A38]/20 hover:bg-[#357A38] rounded-lg flex items-center justify-center transition-colors">
                  <Smartphone className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-[#357A38]/20 hover:bg-[#357A38] rounded-lg flex items-center justify-center transition-colors">
                  <Globe className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Özellikler</h4>
              <ul className="space-y-2 text-[#F0E68C]/80">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Kişilik Testi
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  AI Öneriler
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Özel Rotalar
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Gizli Noktalar
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Destek</h4>
              <ul className="space-y-2 text-[#F0E68C]/80">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Yardım Merkezi
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  İletişim
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Geri Bildirim
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  SSS
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Bize Ulaşın</h4>
              <div className="space-y-3 text-[#F0E68C]/80">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-[#A7C957]" />
                  <span>info@kivago.app</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5 text-[#A7C957]" />
                  <span>+90 XXX XXX XX XX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#A7C957]" />
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-[#357A38]/30 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#F0E68C]/80 text-sm">
              &copy; 2024 kivaGo. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm text-[#F0E68C]/80">
              <a href="#" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Kullanım Şartları
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Çerezler
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
