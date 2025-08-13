"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useSession } from "next-auth/react";
import {
  LayoutDashboard,
  Map,
  Calendar,
  Heart,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Drama,
  Smartphone,
  Download,
  ChevronLeft,
  ChevronRight,
  Bot,
  Compass,
} from "lucide-react";
import { signOut } from "next-auth/react";

const generalItems = [
  {
    icon: Settings,
    label: "Ayarlar",
    href: "/dashboard/settings",
  },
  {
    icon: HelpCircle,
    label: "Yardım",
    href: "/dashboard/help",
  },
  {
    icon: LogOut,
    label: "Çıkış Yap",
    href: "#",
    action: "logout",
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
      exists: true,
    },
    {
      icon: Compass,
      label: "Seyahat Tipini Bul",
      href: "/dashboard/travel-type",
      exists: true,
    },
    {
      icon: Map,
      label: "Keşfet",
      href: "/dashboard/explore",
      badge: "5",
      exists: false,
    },
    {
      icon: Calendar,
      label: "Seyahat Planları",
      href: "/dashboard/plans",
      exists: false,
    },
    {
      icon: Heart,
      label: "Favoriler",
      href: "/dashboard/favorites",
      exists: false,
    },
    {
      icon: Users,
      label: "Topluluk",
      href: "/dashboard/community",
      exists: false,
    },
    {
      icon: Bot,
      label: "AI Asistan",
      href: "/dashboard/ai-chat",
      exists: true,
    },
  ];

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleItemClick = (item: any) => {
    if (item.action === "logout") {
      handleLogout();
    }
  };

  return (
    <motion.div
      className={`bg-[#f4f4f4] rounded-2xl text-black h-full border border-gray-200 shadow-lg shadow-black/10 sticky top-0 transition-all duration-300 ${isCollapsed ? "w-[46px]" : "w-64"
        }`}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7a6ded" offset="0%" />
          <stop stopColor="#591885" offset="100%" />
        </linearGradient>
        <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#2C6A49" offset="0%" />
          <stop stopColor="#399E71" offset="100%" />
        </linearGradient>
        <linearGradient
          id="kivago-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#6b9914" offset="0%" />
          <stop stopColor="#357A38" offset="100%" />
        </linearGradient>
        <linearGradient id="gray-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#6b7280" offset="0%" />
          <stop stopColor="#374151" offset="100%" />
        </linearGradient>
      </svg>
      {/* Header */}
      <div className="px-3 py-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <img
                src="/images/yeni_logo.png"
                alt="kivaGo"
                className="rounded-lg w-12"
              />
              <span className="font-bold text-xl text-black">kivaGo</span>
            </div>
          )}
          <motion.button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ x: 0 }}
            animate={{ x: isCollapsed ? "-2px" : "0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 " />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </motion.button>
        </div>
      </div>
      {/* Menu Section */}
      <div className="py-6">
        {!isCollapsed && (
          <div className="text-xs uppercase font-semibold text-gray-400 mb-4 px-3.5">
            MENÜ
          </div>
        )}
        <nav className="space-y-2 overflow-hidden">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            if (!item.exists) return null;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                    ? "text-gray-800"
                    : "text-gray-600 hover:text-gray-800"
                    } `}
                >
                  <AnimatePresence>
                    {isActive && !isCollapsed && (
                      <motion.div
                        className="absolute left-0 top-1/2 w-2 bg-gradient-to-r to-[#6b9914] from-[#357A38] to-60% rounded-r-full h-full"
                        initial={{ x: "-10px", y: "-50%", opacity: 0 }}
                        animate={{ x: 0, y: "-50%", opacity: 1 }}
                        exit={{ x: "-10px", y: "-50%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      ></motion.div>
                    )}
                  </AnimatePresence>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: isActive && !isCollapsed ? "8px" : "0px" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{
                        stroke: isActive
                          ? "url(#kivago-gradient)"
                          : "url(#gray-gradient)",
                      }}
                    />
                  </motion.div>

                  {!isCollapsed && (
                    <>
                      <motion.span
                        className="font-medium"
                        initial={{ x: 0 }}
                        animate={{ x: isActive ? "8px" : "0px" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {item.label}
                      </motion.span>
                      {item.badge && (
                        <span className="ml-auto bg-[#568203] text-white text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>
      {/* General Section */}
      <div className="py-6">
        {!isCollapsed && (
          <div className="text-xs uppercase font-semibold text-gray-400 mb-4 px-3.5">
            GENEL
          </div>
        )}
        <nav className="space-y-2 overflow-hidden">
          {generalItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.label}>
                {item.href === "#" ? (
                  <motion.button
                    onClick={() => handleItemClick(item)}
                    className={`w-full relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${item.label === "Çıkış Yap"
                      ? "text-red-400 hover:bg-red-500/20"
                      : "text-gray-600 hover:text-gray-800"
                      }`}
                  >
                    <motion.div
                      initial={{ x: 0 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex items-center"
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{
                          stroke:
                            item.label === "Çıkış Yap"
                              ? "#ef4444"
                              : "url(#gray-gradient)",
                        }}
                      />
                    </motion.div>
                    {!isCollapsed && (
                      <motion.span
                        className="font-medium"
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </motion.button>
                ) : (
                  <Link href={item.href}>
                    <motion.div
                      className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                        ? "text-gray-800"
                        : "text-gray-600 hover:text-gray-800"
                        }`}
                    >
                      <AnimatePresence>
                        {isActive && !isCollapsed && (
                          <motion.div
                            className="absolute left-0 top-1/2 w-2 bg-gradient-to-r to-[#6b9914] from-[#357A38] to-60% rounded-r-full h-full"
                            initial={{ x: "-10px", y: "-50%", opacity: 0 }}
                            animate={{ x: 0, y: "-50%", opacity: 1 }}
                            exit={{ x: "-10px", y: "-50%", opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          ></motion.div>
                        )}
                      </AnimatePresence>
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{
                          x: isActive && !isCollapsed ? "8px" : "0px",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex items-center"
                      >
                        <item.icon
                          className="w-5 h-5"
                          style={{
                            stroke: isActive
                              ? "url(#kivago-gradient)"
                              : "url(#gray-gradient)",
                          }}
                        />
                      </motion.div>
                      {!isCollapsed && (
                        <motion.span
                          className="font-medium"
                          initial={{ x: 0 }}
                          animate={{ x: isActive ? "8px" : "0px" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </motion.div>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}
