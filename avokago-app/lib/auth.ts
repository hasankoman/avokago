import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import "./auth-types";

// Supabase'i koşullu olarak import et
let supabase: any = null;
try {
  const { supabase: supabaseClient } = require("./supabase");
  supabase = supabaseClient;
} catch (error) {
  console.log("Supabase not available:", (error as Error).message);
}

export const authOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('=== SIGNIN CALLBACK STARTED ===');
      console.log('User email:', user.email);
      console.log('Account provider:', account?.provider);
      console.log('Profile:', profile?.email);

      // Basit test - her zaman true döndür
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
