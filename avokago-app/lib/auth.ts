import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { SupabaseAdapter } from "./supabase-adapter";
import { supabaseAdmin } from "./supabase";

// Google Profile interface tanımı
interface GoogleProfile {
  email: string;
  email_verified: boolean;
  name: string;
  picture: string;
  sub: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  adapter: SupabaseAdapter(supabaseAdmin),
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Google OAuth için ekstra güvenlik kontrolleri
      if (account?.provider === "google") {
        // Email doğrulaması yapılmış mı kontrol et
        const googleProfile = profile as GoogleProfile;
        if (googleProfile?.email_verified !== false) {
          return true;
        }
        return false;
      }
      return true;
    },
    async session({ session, user }) {
      // Add user ID and travel type to session
      if (user?.id) {
        session.user.id = user.id;
      }
      if (user?.travelType) {
        session.user.travelType = user.travelType;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Güvenli yönlendirme kontrolü
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 gün
    updateAge: 24 * 60 * 60, // 24 saatte bir güncelle
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
