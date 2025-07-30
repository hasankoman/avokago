"use client";

import { useSession, signOut } from "next-auth/react";
import { motion } from "motion/react";
import { Drama, User, LogOut, Settings, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardHeader() {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <motion.header
      className="bg-white/80 backdrop-blur-sm border-b border-[#A7C957]/20 sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/dashboard">
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className="text-[#6B4F1D] hover:text-[#357A38] transition-colors font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/explore"
              className="text-[#6B4F1D] hover:text-[#357A38] transition-colors font-medium"
            >
              Keşfet
            </Link>
            <Link
              href="/dashboard/favorites"
              className="text-[#6B4F1D] hover:text-[#357A38] transition-colors font-medium"
            >
              Favoriler
            </Link>
            <Link
              href="/dashboard/ai-chat"
              className="text-[#6B4F1D] hover:text-[#357A38] transition-colors font-medium"
            >
              AI Chat
            </Link>
          </nav>

          {/* User Menu */}
          <div className="relative">
            <motion.button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-3 bg-[#A7C957]/10 hover:bg-[#A7C957]/20 p-2 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {session?.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
              <span className="hidden md:block text-[#6B4F1D] font-medium">
                {session?.user?.name || "Kullanıcı"}
              </span>
              <ChevronDown className="w-4 h-4 text-[#6B4F1D]" />
            </motion.button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-[#A7C957]/20 py-2"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 py-3 border-b border-[#A7C957]/20">
                  <p className="text-sm font-medium text-[#6B4F1D]">
                    {session?.user?.name}
                  </p>
                  <p className="text-xs text-[#6B4F1D]/60">
                    {session?.user?.email}
                  </p>
                </div>

                <Link
                  href="/dashboard/profile"
                  className="flex items-center space-x-3 px-4 py-3 text-[#6B4F1D] hover:bg-[#A7C957]/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User className="w-4 h-4" />
                  <span>Profil</span>
                </Link>

                <Link
                  href="/dashboard/settings"
                  className="flex items-center space-x-3 px-4 py-3 text-[#6B4F1D] hover:bg-[#A7C957]/10 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  <span>Ayarlar</span>
                </Link>

                <hr className="my-2 border-[#A7C957]/20" />

                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Çıkış Yap</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </motion.header>
  );
}
