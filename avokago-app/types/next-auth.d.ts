import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      travelType?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
    travelType?: string | null;
  }
}


