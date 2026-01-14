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
  keywords: [
    "Duta Pelajar Remaja Indonesia",
    "DPRI 2026",
    "Pelajar Indonesia",
    "Generasi Emas 2045",
    "Pesona Prestasi Official",
    "Kompetisi Pelajar",
    "Kepemimpinan Remaja",
    "Pembinaan Karakter",
    "SMP MTs SMA SMK MA",
  ],
  authors: [{ name: "CV. Pesona Prestasi Official" }],
  creator: "CV. Pesona Prestasi Official",
  publisher: "CV. Pesona Prestasi Official",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://duta-pelajar-remaja-indonesia.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Duta Pelajar Remaja Indonesia Tahun 2026",
    description: "Remaja hebat, cerdas dan berkualitas - Wujudkan Perubahan Positif, Jadilah Generasi Emas 2045. Program di bawah naungan CV. Pesona Prestasi Official.",
    url: "https://duta-pelajar-remaja-indonesia.vercel.app",
    siteName: "Duta Pelajar Remaja Indonesia",
    images: [
      {
        url: "/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Logo Duta Pelajar Remaja Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duta Pelajar Remaja Indonesia Tahun 2026",
    description: "Remaja hebat, cerdas dan berkualitas - Wujudkan Perubahan Positif, Jadilah Generasi Emas 2045",
    images: ["/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png"],
    creator: "@dpr_indonesia.official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png', sizes: 'any' },
      { url: '/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png' },
    ],
  },
  verification: {
    // Tambahkan verification codes jika diperlukan
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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

