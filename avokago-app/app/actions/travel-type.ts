"use server";

import { supabaseAdmin } from "@/lib/supabase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function updateUserTravelType(travelType: string) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return { error: "Kullanıcı oturumu bulunamadı" };
        }

        const { error } = await supabaseAdmin
            .from('users')
            .update({ travel_type: travelType })
            .eq('email', session.user.email);

        if (error) {
            console.error('Travel type güncelleme hatası:', error);
            return { error: "Seyahat tipi güncellenemedi" };
        }

        return { success: true };
    } catch (error) {
        console.error('Travel type update action hatası:', error);
        return { error: "Bir hata oluştu" };
    }
} 