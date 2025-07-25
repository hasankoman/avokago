"use client";

import { motion } from "motion/react";
import { Compass, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Explore() {
  return (
    <div className="min-h-screen bg-[#F9F9F4] p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard">
          <motion.button
            className="flex items-center space-x-2 text-[#357A38] hover:text-[#568203] mb-6"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard'a Dön</span>
          </motion.button>
        </Link>

        <motion.div
          className="card p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="w-24 h-24 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-3xl flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Compass className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-3xl font-bold text-[#6B4F1D] mb-4">Keşfet</h1>
          <p className="text-[#6B4F1D]/70 mb-8">
            Size özel destinasyonları keşfedin ve yeni deneyimler yaşayın.
          </p>
          <p className="text-sm text-[#357A38] bg-[#357A38]/10 px-4 py-2 rounded-full inline-block">
            Bu sayfa yakında geliştiriliyor...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
