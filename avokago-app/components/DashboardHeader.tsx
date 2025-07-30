"use client";

import { useSession } from "next-auth/react";
import { motion } from "motion/react";
import { Search, Mail, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DashboardHeader() {
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.header
      className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 flex-1 max-w-lg">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search task"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#357A38] focus:border-transparent"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
              ⌘F
            </span>
          </div>
        </div>

        {/* Right Side - Notifications and User */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <motion.button
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5" />
          </motion.button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer">
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {session?.user?.name?.charAt(0) || "T"}
                </span>
              </div>
            )}
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">
                {session?.user?.name || "Totok Michael"}
              </div>
              <div className="text-xs text-gray-500">
                {session?.user?.email || "tmicheal20@gmail.com"}
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
