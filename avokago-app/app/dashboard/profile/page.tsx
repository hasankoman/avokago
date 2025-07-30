"use client";

import { motion } from "motion/react";
import { User, ArrowLeft, Mail, Calendar, UserCheck } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { supabase, User as SupabaseUser } from "@/lib/supabase";

export default function Profile() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (session?.user?.id) {
        try {
          const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (error) throw error;
          setUserData(user);
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [session?.user?.id]);

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
            <User className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-3xl font-bold text-[#6B4F1D] mb-4">Profilim</h1>

          {loading ? (
            <div className="text-[#6B4F1D]/70 mb-8">
              <p>Kullanıcı bilgileri yükleniyor...</p>
            </div>
          ) : userData ? (
            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="w-5 h-5 text-[#357A38]" />
                  <h2 className="text-xl font-semibold text-[#6B4F1D]">Kullanıcı Bilgileri</h2>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#357A38]" />
                    <span className="text-[#6B4F1D]">{userData.email}</span>
                  </div>

                  {userData.name && (
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-[#357A38]" />
                      <span className="text-[#6B4F1D]">
                        {userData.name} {userData.surname || ''}
                      </span>
                    </div>
                  )}

                  {userData.profile_type && (
                    <div className="flex items-center space-x-3">
                      <UserCheck className="w-4 h-4 text-[#357A38]" />
                      <span className="text-[#6B4F1D]">
                        Profil Tipi: {userData.profile_type}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-[#357A38]" />
                    <span className="text-[#6B4F1D]">
                      Kayıt: {new Date(userData.created_at).toLocaleDateString('tr-TR')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#357A38] bg-[#357A38]/10 px-4 py-2 rounded-full inline-block">
                Bu bilgiler Supabase veritabanından gelmektedir.
              </div>
            </div>
          ) : (
            <div className="text-[#6B4F1D]/70 mb-8">
              <p>Kullanıcı bilgileri bulunamadı.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
