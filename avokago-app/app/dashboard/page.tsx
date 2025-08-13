"use client";

import { useState, useEffect } from "react";
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
  Star,
  ArrowUp,
  MapPin,
  Plane,
  Camera,
  Activity,
  Target,
  Globe,
  Bookmark,
  ChevronRight,
  Timer,
  Map,
  Heart,
  Settings,
  BarChart3,
  PieChart,
  LineChart,
  Mountain,
  TreePine,
  Waves,
  Building,
  Compass,
  Tent,
} from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";

export default function Dashboard() {
  const { data: session } = useSession();
  const [selectedProfile, setSelectedProfile] = useState("adventure");
  const [travelType, setTravelType] = useState<string | null>(null);
  const [loadingTravelType, setLoadingTravelType] = useState(true);
  useEffect(() => {
    if (session?.user?.travelType) {
      setTravelType(session.user.travelType);
    }
    setLoadingTravelType(false);
  }, [session]);

  // Dashboard metrics
  const metrics = [
    {
      title: "Toplam Seyahatler",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Globe,
      gradient: "from-[#357A38] to-[#568203]",
    },
    {
      title: "Aktif Planlar",
      value: "8",
      change: "+3",
      trend: "up",
      icon: Calendar,
      gradient: "from-blue-500 to-blue-600",
    },
  ];

  // Recent trips
  const recentTrips = [
    {
      id: 1,
      name: "Kapadokya Gezisi",
      destination: "Nevşehir",
      date: "20 Nov 2024",
      status: "completed",
      progress: 100,
      participants: 4,
    },
    {
      id: 2,
      name: "Ayder Yaylası Kampı",
      destination: "Rize",
      date: "25 Nov 2024",
      status: "active",
      progress: 65,
      participants: 3,
    },
    {
      id: 3,
      name: "Olimpos Antik Kenti",
      destination: "Antalya",
      date: "30 Nov 2024",
      status: "planned",
      progress: 25,
      participants: 6,
    },
  ];

  // Quick actions
  const quickActions = [
    {
      title: "Yeni Seyahat Planla",
      description: "Bir sonraki macera için plan oluştur",
      icon: Plus,
      color: "bg-[#357A38]",
      hover: "hover:bg-[#568203]",
    },
    {
      title: "Destinasyon Keşfet",
      description: "Yeni yerler ve deneyimler bul",
      icon: Map,
      color: "bg-blue-500",
      hover: "hover:bg-blue-600",
    },
    {
      title: "Topluluk",
      description: "Diğer gezginlerle bağlan",
      icon: Users,
      color: "bg-purple-500",
      hover: "hover:bg-purple-600",
    },
    {
      title: "AI Asistan",
      description: "Akıllı seyahat önerileri al",
      icon: Activity,
      color: "bg-orange-500",
      hover: "hover:bg-orange-600",
    },
  ];

  // Profile-based trip recommendations
  const travelerProfiles = [
    {
      id: "adventure",
      name: "Macera Sevici",
      description: "Adrenalin ve heyecan dolu deneyimler",
      icon: Mountain,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      recommendations: [
        {
          title: "Trekking & Kamp Deneyimi",
          location: "Kaçkar Dağları, Rize",
          duration: "3 gün",
          difficulty: "Zor",
          price: "2.500₺",
          image: "/api/placeholder/300/200",
          features: ["Dağ Tırmanışı", "Kamp", "Doğa Yürüyüşü"],
        },
        {
          title: "Rafting & Zipline Paketi",
          location: "Köprülü Kanyon, Antalya",
          duration: "2 gün",
          difficulty: "Orta",
          price: "1.800₺",
          image: "/api/placeholder/300/200",
          features: ["Rafting", "Zipline", "ATV Safari"],
        },
      ],
    },
    {
      id: "cultural",
      name: "Kültür Meraklısı",
      description: "Tarih ve kültür keşifleri",
      icon: Building,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      recommendations: [
        {
          title: "Hitit Medeniyeti Turu",
          location: "Çorum & Boğazköy",
          duration: "4 gün",
          difficulty: "Kolay",
          price: "3.200₺",
          image: "/api/placeholder/300/200",
          features: ["Müze Ziyaretleri", "Antik Şehir", "Rehberli Tur"],
        },
        {
          title: "Osmanlı İzleri",
          location: "Bursa & İznik",
          duration: "3 gün",
          difficulty: "Kolay",
          price: "2.800₺",
          image: "/api/placeholder/300/200",
          features: ["Tarihi Yapılar", "Müze", "Geleneksel Sanatlar"],
        },
      ],
    },
    {
      id: "nature",
      name: "Doğa Sevgisi",
      description: "Huzur dolu doğa deneyimleri",
      icon: TreePine,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      recommendations: [
        {
          title: "Yedigöller Milli Parkı",
          location: "Bolu",
          duration: "2 gün",
          difficulty: "Kolay",
          price: "1.500₺",
          image: "/api/placeholder/300/200",
          features: ["Doğa Yürüyüşü", "Fotoğrafçılık", "Göl Turu"],
        },
        {
          title: "Kuş Cenneti Keşfi",
          location: "Bandırma, Balıkesir",
          duration: "1 gün",
          difficulty: "Kolay",
          price: "800₺",
          image: "/api/placeholder/300/200",
          features: ["Kuş Gözlemi", "Doğa Fotoğrafçılığı", "Tekne Turu"],
        },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "active":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "planned":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Tamamlandı";
      case "active":
        return "Devam Ediyor";
      case "planned":
        return "Planlandı";
      default:
        return "Bilinmiyor";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="pt-4 pr-4 pb-2">
        <DashboardHeader />
      </div>

      <div className="py-6 pr-4 space-y-8">
        {/* Welcome Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg shadow-black/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Hoş geldin, {session?.user?.name?.split(" ")[0] || "Gezgin"}!
              </h1>
              <p className="text-gray-600 text-lg">
                Seyahat serüvenine devam etmeye hazır mısın?
              </p>
              {travelType && (
                <div className="mt-3 inline-flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                  <Compass className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-medium">
                    {travelType}
                  </span>
                </div>
              )}
              {!travelType && !loadingTravelType && (
                <div className="mt-3">
                  <a
                    href="/dashboard/travel-type"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                  >
                    <Compass className="w-4 h-4" />
                    Seyahat tipini belirlemek için testi çöz
                  </a>
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#357A38] to-[#568203] rounded-2xl flex items-center justify-center">
                <Plane className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg shadow-black/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${metric.gradient} rounded-xl flex items-center justify-center`}
                >
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-1 text-green-600">
                  <ArrowUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </h3>
                <p className="text-gray-600 text-sm">{metric.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile-Based Trip Recommendations */}
        <motion.div
          className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg shadow-black/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Size Özel Öneriler
            </h2>
            <p className="text-gray-600">
              Seyahat tarzınıza göre özenle seçilmiş deneyimler
            </p>
          </div>

          {/* Profile Selector */}
          <div className="flex flex-wrap gap-4 mb-8">
            {travelerProfiles.map((profile) => (
              <motion.button
                key={profile.id}
                onClick={() => setSelectedProfile(profile.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl border-2 transition-all ${selectedProfile === profile.id
                  ? `${profile.bgColor} ${profile.borderColor} shadow-md`
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${profile.color} rounded-lg flex items-center justify-center`}
                >
                  <profile.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {profile.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {profile.description}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {travelerProfiles
              .find((p) => p.id === selectedProfile)
              ?.recommendations.map((trip, index) => (
                <motion.div
                  key={trip.title}
                  className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-gray-200 p-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Background Image */}
                  <div className="relative h-[30rem] overflow-hidden">
                    {/* Base image (clear) */}
                    <img
                      src="https://i.ibb.co/xSG8Lhpb/city-blue-sky.jpg"
                      alt={trip.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />

                    {/* Smooth blurred overlay for bottom portion */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-2xl blur-sm"
                      style={{
                        backgroundImage:
                          'url("https://i.ibb.co/xSG8Lhpb/city-blue-sky.jpg")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        maskImage:
                          "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.2) 35%, transparent 50%)",
                        WebkitMaskImage:
                          "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.2) 35%, transparent 50%)",
                      }}
                    />

                    {/* Overlay gradiet for text readability */}

                    <div className="absolute top-4 left-4 flex items-center justify-between w-[calc(100%-32px)]">
                      <div className="flex items-center space-x-4 bg-black/15 backdrop-blur-sm rounded-full p-2 border border-white/20">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white/90">{trip.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <Target className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white/90">
                            {trip.difficulty}
                          </span>
                        </div>
                      </div>
                      {/* Heart icon */}
                      <motion.button
                        className="w-12 h-12 bg-black/15 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className="w-6 h-6 text-white" />
                      </motion.button>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{trip.title}</h3>
                      <p className="text-white/80 mb-4">{trip.location}</p>

                      {/* Trip details */}

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-white/70">from</span>
                          <span className="text-xl font-bold text-white">
                            {trip.price}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/70">
                          <Plane className="w-4 h-4" />
                          <span className="text-sm">
                            {trip.location.split(",")[1]?.trim() || "TUR"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>



        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Recent Trips */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg shadow-black/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Son Seyahatler
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Güncel seyahat planların ve geçmiş deneyimlerin
                  </p>
                </div>
                <motion.button
                  className="text-[#357A38] hover:text-[#568203] font-medium flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                >
                  <span>Tümünü Gör</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="space-y-4">
                {recentTrips.map((trip, index) => (
                  <motion.div
                    key={trip.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {trip.name}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{trip.destination}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{trip.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{trip.participants}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {trip.progress}%
                        </div>
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-full bg-gradient-to-r from-[#357A38] to-[#568203] rounded-full"
                            style={{ width: `${trip.progress}%` }}
                          />
                        </div>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(
                          trip.status
                        )}`}
                      >
                        {getStatusText(trip.status)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg shadow-black/5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Hızlı İşlemler
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    className={`${action.color} ${action.hover} text-white p-4 rounded-xl transition-colors text-left`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <action.icon className="w-6 h-6" />
                      <div>
                        <div className="font-medium">{action.title}</div>
                        <div className="text-sm opacity-90">
                          {action.description}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>



            {/* Personal Goals */}
            <motion.div
              className="bg-gradient-to-br from-[#357A38] to-[#568203] rounded-2xl p-6 text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">2024 Hedefi</h3>
                <div className="text-3xl font-bold mb-2">15/20</div>
                <p className="text-white/80 text-sm mb-4">Seyahat tamamlandı</p>

                <div className="w-full bg-white/20 rounded-full h-3 mb-4">
                  <div
                    className="bg-white h-full rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <p className="text-white/90 text-sm">
                  Harika gidiyorsun! 5 seyahat daha kaldı.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
