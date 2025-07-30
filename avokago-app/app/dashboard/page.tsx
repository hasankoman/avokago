"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { motion } from "motion/react";
import {
  Plus,
  TrendingUp,
  Calendar,
  Users,
  MoreVertical,
  Clock,
  CheckCircle,
  Play,
  Star,
  ArrowUp,
  MapPin,
  Plane,
  Camera,
} from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import { BarChart, CircularProgress, TimeTracker } from "@/components/Charts";

export default function Dashboard() {
  const { data: session } = useSession();

  const stats = [
    {
      title: "Toplam Seyahatler",
      value: "24",
      icon: "✈️",
      trend: { value: "2", direction: "up" },
      color: "bg-[#357A38]",
    },
    {
      title: "Tamamlanan Seyahatler",
      value: "10",
      icon: "✅",
      trend: { value: "Geçen aydan artış", direction: "up" },
      color: "bg-gray-100",
    },
    {
      title: "Aktif Planlar",
      value: "12",
      icon: "📋",
      trend: { value: "Geçen aydan artış", direction: "up" },
      color: "bg-gray-100",
    },
    {
      title: "Bekleyen Rezervasyonlar",
      value: "2",
      icon: "⏳",
      trend: { value: "Onay Bekliyor", direction: "neutral" },
      color: "bg-gray-100",
    },
  ];

  const trips = [
    {
      title: "Kapadokya Balon Turu",
      date: "20 Kasım 2024",
      status: "Tamamlandı",
      members: ["/api/placeholder/32/32", "/api/placeholder/32/32"],
      destination: "Nevşehir",
    },
    {
      title: "Ayder Yaylası Doğa Kampı",
      date: "25 Kasım 2024",
      status: "Devam Ediyor",
      members: ["/api/placeholder/32/32"],
      destination: "Rize",
    },
    {
      title: "Olimpos Tarih Turu",
      date: "30 Kasım 2024",
      status: "Planlandı",
      members: [
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
      ],
      destination: "Antalya",
    },
    {
      title: "Safranbolu Kültür Gezisi",
      date: "5 Aralık 2024",
      status: "Planlandı",
      members: ["/api/placeholder/32/32"],
      destination: "Karabük",
    },
    {
      title: "Pamukkale Termal Tatili",
      date: "10 Aralık 2024",
      status: "Planlandı",
      members: ["/api/placeholder/32/32", "/api/placeholder/32/32"],
      destination: "Denizli",
    },
  ];

  const communityMembers = [
    {
      name: "Ayşe Kaya",
      role: "Kapadokya fotoğraflarını paylaştı",
      status: "Tamamlandı",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Mehmet Demir",
      role: "Yeni destinasyon önerisi ekledi",
      status: "Aktif",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Zeynep Arslan",
      role: "Seyahat planı hazırlığında",
      status: "Planlıyor",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Can Özkan",
      role: "Grup seyahati organize ediyor",
      status: "Aktif",
      avatar: "/api/placeholder/40/40",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">
              Seyahatlerinizi planlayın, keşfedin ve deneyimlerinizi paylaşın.
            </p>
          </div>
          <div className="flex space-x-3">
            <motion.button
              className="bg-[#357A38] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#568203] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Seyahat</span>
            </motion.button>
            <motion.button
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Destinasyon Keşfet
            </motion.button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className={`${
                stat.color === "bg-[#357A38]"
                  ? "bg-[#357A38] text-white"
                  : "bg-white"
              } rounded-2xl p-6 border border-gray-200`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{stat.icon}</span>
                {stat.trend.direction === "up" && (
                  <ArrowUp
                    className={`w-4 h-4 ${
                      stat.color === "bg-[#357A38]"
                        ? "text-white"
                        : "text-green-500"
                    }`}
                  />
                )}
              </div>
              <div
                className={`text-3xl font-bold mb-2 ${
                  stat.color === "bg-[#357A38]" ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm ${
                  stat.color === "bg-[#357A38]"
                    ? "text-white/80"
                    : "text-gray-600"
                }`}
              >
                {stat.title}
              </div>
              {stat.trend.value !== stat.value && (
                <div
                  className={`text-xs mt-2 ${
                    stat.color === "bg-[#357A38]"
                      ? "text-white/60"
                      : "text-gray-500"
                  }`}
                >
                  {stat.trend.value}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Seyahat İstatistikleri */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Seyahat İstatistikleri
                </h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <BarChart />
            </motion.div>

            {/* Seyahat Planları */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Seyahat Planları
                </h3>
                <motion.button
                  className="text-sm text-[#357A38] hover:text-[#568203] font-medium flex items-center space-x-1"
                  whileHover={{ x: 5 }}
                >
                  <Plus className="w-4 h-4" />
                  <span>Yeni Plan</span>
                </motion.button>
              </div>

              <div className="space-y-4">
                {trips.map((trip, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          trip.status === "Tamamlandı"
                            ? "bg-green-500"
                            : trip.status === "Devam Ediyor"
                            ? "bg-blue-500"
                            : "bg-orange-400"
                        }`}
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                          <span>{trip.title}</span>
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-sm text-gray-500">
                            {trip.destination}
                          </span>
                        </h4>
                        <p className="text-sm text-gray-500">{trip.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-2">
                        {trip.members.map((member, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 bg-gradient-to-br from-[#357A38] to-[#568203] rounded-full border-2 border-white flex items-center justify-center"
                          >
                            <span className="text-white text-xs font-semibold">
                              {String.fromCharCode(65 + i)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          trip.status === "Tamamlandı"
                            ? "bg-green-100 text-green-700"
                            : trip.status === "Devam Ediyor"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {trip.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Topluluk Aktivitesi */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Topluluk Aktivitesi
                </h3>
                <motion.button
                  className="text-sm text-[#357A38] hover:text-[#568203] font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Tümünü Gör
                </motion.button>
              </div>

              <div className="space-y-4">
                {communityMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#357A38] to-[#568203] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        member.status === "Tamamlandı"
                          ? "bg-green-100 text-green-700"
                          : member.status === "Aktif"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {member.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Hatırlatıcılar */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Hatırlatıcılar
                </h3>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>

              <div className="bg-gradient-to-br from-[#357A38]/10 to-[#568203]/10 rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Kapadokya Balon Turu
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Saat: 05:00 - 08:00
                </p>
                <motion.button
                  className="bg-[#357A38] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#568203] transition-colors flex items-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plane className="w-3 h-3" />
                  <span>Detayları Gör</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Seyahat İlerlemesi */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Seyahat İlerlemesi
                </h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="text-center">
                <CircularProgress percentage={41} />
                <div className="mt-4 flex justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#357A38] rounded-full" />
                    <span className="text-gray-600">Tamamlandı</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-gray-600">Devam Ediyor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full" />
                    <span className="text-gray-600">Planlandı</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Seyahat Asistanı */}
            <motion.div
              className="bg-gradient-to-br from-[#357A38] to-[#568203] rounded-2xl p-6 text-white"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">
                  AI Seyahat Asistanı
                </h3>
                <div className="text-4xl font-bold mb-4">24/7</div>
                <p className="text-sm text-white/80 mb-4">
                  Size özel seyahat önerileri
                </p>
                <div className="flex justify-center space-x-4">
                  <motion.button
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Camera className="w-4 h-4 text-white" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MapPin className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
