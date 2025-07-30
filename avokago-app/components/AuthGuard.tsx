"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Drama, Loader2 } from "lucide-react";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading

    if (!session) {
      router.push("/auth/signin");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F9F9F4] via-[#F9F9F4] to-[#F0E68C]/30 bg-pattern flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-tr from-[#357A38] to-[#568203] rounded-3xl flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Drama className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div
            className="flex items-center space-x-2 text-[#6B4F1D]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm font-medium">Yükleniyor...</span>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect in useEffect
  }

  return <>{children}</>;
}
