"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
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
} from "lucide-react";
import { signOut } from "next-auth/react";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Map,
    label: "Keşfet",
    href: "/dashboard/explore",
    badge: "5",
  },
  {
    icon: Calendar,
    label: "Seyahat Planları",
    href: "/dashboard/plans",
  },
  {
    icon: Heart,
    label: "Favoriler",
    href: "/dashboard/favorites",
  },
  {
    icon: Users,
    label: "Topluluk",
    href: "/dashboard/community",
  },
  {
    icon: Bot,
    label: "AI Asistan",
    href: "/dashboard/ai-chat",
  },
];

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
      className={`bg-[#1a1a1a] text-white h-screen sticky top-0 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-lg flex items-center justify-center">
                <Drama className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">avokaGo</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Section */}
      <div className="px-4 py-6">
        {!isCollapsed && (
          <div className="text-xs uppercase font-semibold text-gray-400 mb-4 px-2">
            MENÜ
          </div>
        )}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#357A38] text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="font-medium">{item.label}</span>
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
      <div className="px-4 py-6">
        {!isCollapsed && (
          <div className="text-xs uppercase font-semibold text-gray-400 mb-4 px-2">
            GENEL
          </div>
        )}
        <nav className="space-y-2">
          {generalItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.label}>
                {item.href === "#" ? (
                  <motion.button
                    onClick={() => handleItemClick(item)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all ${
                      item.label === "Çıkış Yap"
                        ? "text-red-400 hover:bg-red-500/20"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </motion.button>
                ) : (
                  <Link href={item.href}>
                    <motion.div
                      className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all ${
                        isActive
                          ? "bg-[#357A38] text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="font-medium">{item.label}</span>
                      )}
                    </motion.div>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Mobile App Section */}
      {!isCollapsed && (
        <div className="absolute bottom-6 left-4 right-4">
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-xl flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">
              Mobil Uygulamayı İndir
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Seyahatlerinizi her yerden planlayın!
            </p>
            <motion.button
              className="w-full bg-[#357A38] hover:bg-[#568203] text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              <span>İndir</span>
            </motion.button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
