import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tinkerbell: {
          cta: "#D4AF37", // Emas - Warna Aksen Utama (CTA/Highlight)
          secondary: "#8B0000", // Merah Marun - Warna Aksen Sekunder (Header/Garis)
          bg: "#FAF9F6", // Putih Gading - Latar Belakang
          text: "#333333", // Abu-abu Gelap - Teks Utama
          textSecondary: "#666666", // Abu-abu Sedang - Teks Sekunder
        },
      },
    },
  },
  plugins: [],
};
export default config;

