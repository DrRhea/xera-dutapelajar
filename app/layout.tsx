import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duta Pelajar Remaja Indonesia Tahun 2026",
  description: "Remaja hebat, cerdas dan berkualitas - Wujudkan Perubahan Positif, Jadilah Generasi Emas 2045. Program di bawah naungan CV. Pesona Prestasi Official.",
  icons: {
    icon: [
      { url: '/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png', sizes: 'any' },
      { url: '/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

