"use client";

import { motion } from "motion/react";

// Bar Chart Component
export function BarChart() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const data = [20, 65, 70, 80, 45, 30, 25];

  return (
    <div className="h-40 flex items-end justify-between px-4">
      {days.map((day, index) => {
        const height = (data[index] / 100) * 100;
        const isActive = index === 3; // Wednesday is active

        return (
          <div key={index} className="flex flex-col items-center space-y-2">
            <motion.div
              className={`w-8 rounded-t-md ${
                isActive ? "bg-[#357A38]" : "bg-gray-200"
              }`}
              style={{ height: `${height}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />
            <span className="text-xs text-gray-500 font-medium">{day}</span>
          </div>
        );
      })}
    </div>
  );
}

// Circular Progress Chart
interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 8,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative">
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          className="text-[#357A38]"
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
          <div className="text-xs text-gray-500">Project Ended</div>
        </div>
      </div>
    </div>
  );
}

// Time Tracker Component
export function TimeTracker() {
  return (
    <div className="bg-gradient-to-br from-[#357A38] to-[#568203] rounded-2xl p-6 text-white">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Time Tracker</h3>
        <div className="text-4xl font-bold mb-4">01:24:08</div>
        <div className="flex justify-center space-x-4">
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
            <div className="w-4 h-4 bg-white rounded-sm ml-1"></div>
          </button>
          <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
