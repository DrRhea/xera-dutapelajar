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
        primary: "#780A0A",
        secondary: "#FFFFFF",
        accent: "#D4AF37",
        surface: "#FFF5F5",
        "text-dark": "#1F2937",
        "text-light": "#6B7280",
      },
      fontFamily: {
        sans: ['Google Sans', 'Product Sans', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;

