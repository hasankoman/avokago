import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
