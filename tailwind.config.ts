import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — lihat Blueprint bagian 6.1
        primary: {
          DEFAULT: "#1E3A8A", // Deep Navy Blue — trust, korporat
          light: "#3B82F6", // Sky Blue — aksen, CTA, link
          dark: "#152A63",
        },
        ink: "#0F172A", // Slate 900 — teks utama
        surface: {
          DEFAULT: "#F8FAFC", // background utama
          card: "#FFFFFF",
        },
        border: "#E2E8F0",
        success: "#10B981",
        pending: "#F59E0B", // badge "Coming Soon"
        dark: {
          bg: "#0B1220",
          card: "#111C33",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 12px 24px -8px rgba(30, 58, 138, 0.18)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
