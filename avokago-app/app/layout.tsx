import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Providers } from "./providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "avokaGo - Kişiselleştirilmiş Seyahat Asistanı",
  description:
    "Kullanıcının kişisel yanıtları, alışkanlıkları ve hedefleri üzerinden onun için en uygun seyahati kişiselleştirilmiş bir asistan gibi planlar.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="tr">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
