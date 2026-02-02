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
        luxury: {
          scaffold: "#1A0505",       // Deepest Burgundy (main bg)
          radialCenter: "#2B0A0A",   // Radial gradient center
          glass: "#3E1212",          // Dark glass card bg
          text: "#F2F0E6",           // Off-white (main text)
          textMuted: "rgba(242,240,230,0.75)",
          accent: "#D4AF37",         // Gold Satin (buttons, icons)
        },
        tinkerbell: {
          cta: "#D4AF37",
          secondary: "#8B0000",
          bg: "#FAF9F6",
          text: "#333333",
          textSecondary: "#666666",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        "glass": "0 0 20px -5px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;

