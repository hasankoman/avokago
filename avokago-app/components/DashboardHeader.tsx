"use client";

import { useSession } from "next-auth/react";
import { motion } from "motion/react";
import { Mail, Bell } from "lucide-react";
import { useState } from "react";

export default function DashboardHeader() {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.header
      className="bg-[#f4f4f4] px-6 py-4 sticky top-0 z-40 rounded-2xl border border-gray-200 shadow-lg shadow-black/10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between">
        {/* Right Side - Notifications and User */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Notifications */}
          <motion.button
            className="w-10 h-10 flex items-center justify-center bg-[#FEFDFF] rounded-full text-gray-600 hover:text-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="w-10 h-10 flex items-center justify-center bg-[#FEFDFF] rounded-full text-gray-600 hover:text-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5" />
          </motion.button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 rounded-lg transition-colors cursor-pointer">
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {session?.user?.name?.charAt(0) || "T"}
                </span>
              </div>
            )}
            <div className="text-left h-10 flex flex-col justify-between">
              <div className="font-semibold text-gray-900">
                {session?.user?.name || "Totok Michael"}
              </div>
              <div className="text-xs text-gray-500">
                {session?.user?.email || "tmicheal20@gmail.com"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
