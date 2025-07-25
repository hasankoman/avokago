"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  User,
  Map,
  Heart,
  Settings,
  Bell,
  Search,
  Plus,
  Bot,
  MapPin,
  Calendar,
  Users,
  Star,
  Compass,
  Camera,
  MessageCircle,
  TrendingUp,
  Award,
  Target,
  ChevronDown,
  ChevronRight,
  Drama,
  Mountain,
  PartyPopper,
  Leaf,
  Sparkles,
  ArrowRight,
  Clock,
  ThumbsUp,
  Share2,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

interface UserProfile {
  name: string;
  type: "peace" | "excitement" | "social" | "romance";
  avatar: string;
  completedTrips: number;
  totalPoints: number;
  memberSince: string;
}

interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  category: string;
  duration: string;
  price: string;
  matchPercentage: number;
}

interface TravelPlan {
  id: string;
  title: string;
  destination: string;
  date: string;
  status: "planned" | "ongoing" | "completed";
  participants: number;
}

const profileTypes = {
  peace: {
    title: "Ruh Arayan Keşifçi",
    icon: Leaf,
    color: "from-[#357A38] to-[#568203]",
    bgColor: "bg-[#357A38]/10",
    textColor: "text-[#357A38]",
  },
  excitement: {
    title: "Dingin Maceraperest",
    icon: Mountain,
    color: "from-[#568203] to-[#A7C957]",
    bgColor: "bg-[#568203]/10",
    textColor: "text-[#568203]",
  },
  social: {
    title: "Sosyalleşen Kaçak",
    icon: PartyPopper,
    color: "from-[#A7C957] to-[#F0E68C]",
    bgColor: "bg-[#A7C957]/10",
    textColor: "text-[#A7C957]",
  },
  romance: {
    title: "Romantik Rüyacı",
    icon: Heart,
    color: "from-[#F0E68C] to-[#A7C957]",
    bgColor: "bg-[#F0E68C]/10",
    textColor: "text-[#6B4F1D]",
  },
};

const mockUser: UserProfile = {
  name: "Ahmet Yılmaz",
  type: "peace",
  avatar: "AY",
  completedTrips: 12,
  totalPoints: 2450,
  memberSince: "2024",
};

const mockDestinations: Destination[] = [
  {
    id: "1",
    name: "Kapadokya Gizli Vadileri",
    location: "Nevşehir, Türkiye",
    image: "/api/placeholder/300/200",
    rating: 4.8,
    category: "Doğa & Huzur",
    duration: "3 gün",
    price: "₺1,200",
    matchPercentage: 95,
  },
  {
    id: "2",
    name: "Ayder Yaylası Meditasyon",
    location: "Rize, Türkiye",
    image: "/api/placeholder/300/200",
    rating: 4.7,
    category: "Wellness",
    duration: "2 gün",
    price: "₺950",
    matchPercentage: 92,
  },
  {
    id: "3",
    name: "Olimpos Doğa Kampı",
    location: "Antalya, Türkiye",
    image: "/api/placeholder/300/200",
    rating: 4.6,
    category: "Doğa",
    duration: "4 gün",
    price: "₺800",
    matchPercentage: 88,
  },
];

const mockTravelPlans: TravelPlan[] = [
  {
    id: "1",
    title: "Kapadokya Ruhsal Yolculuk",
    destination: "Nevşehir",
    date: "15 Ağustos 2024",
    status: "planned",
    participants: 1,
  },
  {
    id: "2",
    title: "Ayder Yaylası Wellness",
    destination: "Rize",
    date: "5 Eylül 2024",
    status: "planned",
    participants: 2,
  },
];

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Bot, label: "AI Asistan", href: "/dashboard/ai-chat" },
  { icon: Compass, label: "Keşfet", href: "/dashboard/explore" },
  { icon: Map, label: "Seyahat Planlarım", href: "/dashboard/plans" },
  { icon: Heart, label: "Favorilerim", href: "/dashboard/favorites" },
  { icon: Users, label: "Topluluk", href: "/dashboard/community" },
  { icon: User, label: "Profilim", href: "/dashboard/profile" },
  { icon: Settings, label: "Ayarlar", href: "/dashboard/settings" },
];

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const userProfileType = profileTypes[mockUser.type];
  const UserIcon = userProfileType.icon;

  return (
    <div className="min-h-screen bg-[#F9F9F4] flex">
      {/* Sidebar */}
      <motion.aside
        className={`bg-white border-r border-[#A7C957]/20 transition-all duration-300 relative ${
          sidebarCollapsed ? "w-16" : "w-64"
        }`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-6">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-xl flex items-center justify-center">
              <Drama className="w-5 h-5 text-white" />
            </div>
            {!sidebarCollapsed && (
              <span className="text-[#357A38] font-bold text-xl">avokaGo</span>
            )}
          </motion.div>

          {/* User Profile Summary */}
          {!sidebarCollapsed && (
            <motion.div
              className="card p-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-full flex items-center justify-center text-white font-semibold">
                  {mockUser.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-[#6B4F1D]">
                    {mockUser.name}
                  </h3>
                  <p className="text-xs text-[#6B4F1D]/70">
                    {userProfileType.title}
                  </p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#6B4F1D]/70">
                <span>{mockUser.completedTrips} Seyahat</span>
                <span>{mockUser.totalPoints} Puan</span>
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link href={item.href}>
                  <motion.div
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                      item.active
                        ? "bg-[#357A38]/10 text-[#357A38] border border-[#357A38]/20"
                        : "text-[#6B4F1D]/70 hover:bg-[#A7C957]/10 hover:text-[#6B4F1D]"
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5" />
                    {!sidebarCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Sidebar Toggle */}
        <motion.button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white border border-[#A7C957]/30 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight
            className={`w-3 h-3 text-[#357A38] transition-transform ${
              sidebarCollapsed ? "" : "rotate-180"
            }`}
          />
        </motion.button>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <motion.header
          className="bg-white border-b border-[#A7C957]/20 p-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#6B4F1D]">Dashboard</h1>
              <p className="text-[#6B4F1D]/70">
                Kişiselleştirilmiş seyahat deneyiminize hoş geldiniz
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B4F1D]/50" />
                <input
                  type="text"
                  placeholder="Destinasyon ara..."
                  className="pl-10 pr-4 py-2 w-64 rounded-xl border border-[#A7C957]/30 bg-[#F9F9F4] focus:outline-none focus:border-[#357A38] focus:ring-2 focus:ring-[#357A38]/20 transition-all"
                />
              </div>

              {/* Notifications */}
              <motion.button
                className="relative p-2 rounded-xl bg-[#F9F9F4] hover:bg-[#A7C957]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-5 h-5 text-[#6B4F1D]" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#357A38] rounded-full"></span>
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Welcome Card */}
          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-tr ${userProfileType.color} rounded-3xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <UserIcon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-xl font-bold text-[#6B4F1D]">
                    Hoş geldiniz, {mockUser.name}!
                  </h2>
                  <p className="text-[#6B4F1D]/70">
                    Bir{" "}
                    <span className={userProfileType.textColor}>
                      {userProfileType.title}
                    </span>{" "}
                    olarak size özel deneyimler hazırladık
                  </p>
                </div>
              </div>
              <Link href="/dashboard/ai-chat">
                <motion.button
                  className="btn-primary flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bot className="w-4 h-4" />
                  <span>AI Asistan</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Map,
                label: "Tamamlanan Seyahatler",
                value: mockUser.completedTrips,
                color: "text-[#357A38]",
              },
              {
                icon: Star,
                label: "Toplam Puan",
                value: mockUser.totalPoints,
                color: "text-[#568203]",
              },
              {
                icon: Heart,
                label: "Favori Destinasyonlar",
                value: 8,
                color: "text-[#A7C957]",
              },
              {
                icon: Users,
                label: "Seyahat Arkadaşları",
                value: 24,
                color: "text-[#F0E68C]",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-[#6B4F1D] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B4F1D]/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recommended Destinations */}
            <motion.div
              className="lg:col-span-2 card p-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#6B4F1D]">
                  Size Özel Öneriler
                </h3>
                <Link href="/dashboard/explore">
                  <motion.button
                    className="text-[#357A38] hover:text-[#568203] flex items-center space-x-1 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span>Tümünü Gör</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

              <div className="space-y-4">
                {mockDestinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-[#F9F9F4] hover:bg-white hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#A7C957]/20 to-[#357A38]/20 rounded-2xl flex items-center justify-center">
                      <Mountain className="w-8 h-8 text-[#357A38]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-[#6B4F1D]">
                          {destination.name}
                        </h4>
                        <span className="text-sm font-medium text-[#357A38]">
                          {destination.matchPercentage}% eşleşme
                        </span>
                      </div>
                      <p className="text-sm text-[#6B4F1D]/70 mb-2">
                        {destination.location}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs text-[#6B4F1D]/70">
                          <span>{destination.duration}</span>
                          <span>•</span>
                          <span>{destination.category}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{destination.rating}</span>
                          </div>
                        </div>
                        <span className="font-semibold text-[#357A38]">
                          {destination.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        className="p-2 rounded-xl bg-white hover:bg-[#357A38]/10 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Bookmark className="w-4 h-4 text-[#357A38]" />
                      </motion.button>
                      <motion.button
                        className="p-2 rounded-xl bg-[#357A38] text-white hover:bg-[#568203] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Travel Plans */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#6B4F1D]">
                    Yaklaşan Seyahatler
                  </h3>
                  <Calendar className="w-5 h-5 text-[#357A38]" />
                </div>

                <div className="space-y-3">
                  {mockTravelPlans.map((plan, index) => (
                    <motion.div
                      key={plan.id}
                      className="p-3 rounded-xl bg-[#F9F9F4] hover:bg-white hover:shadow-sm transition-all"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="font-medium text-[#6B4F1D] mb-1">
                        {plan.title}
                      </h4>
                      <p className="text-sm text-[#6B4F1D]/70 mb-2">
                        {plan.destination}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1 text-[#357A38]">
                          <Clock className="w-3 h-3" />
                          <span>{plan.date}</span>
                        </div>
                        <span className="bg-[#357A38]/10 text-[#357A38] px-2 py-1 rounded-full">
                          {plan.participants} kişi
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="w-full mt-4 p-3 rounded-xl border-2 border-dashed border-[#A7C957]/50 text-[#357A38] hover:border-[#357A38] hover:bg-[#357A38]/5 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus className="w-4 h-4 mx-auto" />
                </motion.button>
              </motion.div>

              {/* Community Activity */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#6B4F1D]">Topluluk</h3>
                  <MessageCircle className="w-5 h-5 text-[#357A38]" />
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: "Ayşe K.",
                      action: "Kapadokya deneyimini paylaştı",
                      time: "2sa",
                    },
                    {
                      name: "Mehmet Y.",
                      action: "Yeni fotoğraf ekledi",
                      time: "4sa",
                    },
                    {
                      name: "Zeynep A.",
                      action: "Sizi takip etmeye başladı",
                      time: "1g",
                    },
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-xl hover:bg-[#F9F9F4] transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {activity.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#6B4F1D]">
                          <span className="font-medium">{activity.name}</span>{" "}
                          {activity.action}
                        </p>
                        <p className="text-xs text-[#6B4F1D]/50">
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
