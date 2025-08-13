import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kivaGo - Kişiselleştirilmiş Seyahat Asistanı",
  description:
    "Kullanıcının kişisel yanıtları, alışkanlıkları ve hedefleri üzerinden onun için en uygun seyahati kişiselleştirilmiş bir asistan gibi planlar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
