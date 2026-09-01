import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        surface: {
          DEFAULT: "#1E293B",
          light: "#334155",
          dark: "#0F172A",
          card: "#1E293B",
        },
        primary: {
          DEFAULT: "#6366F1",
          hover: "#4F46E5",
          light: "#818CF8",
          dark: "#4338CA",
        },
        cyan: {
          cyber: "#06B6D4",
          glow: "#22D3EE",
          dark: "#0891B2",
        },
        foreground: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-indigo": "0 0 25px -5px rgba(99, 102, 241, 0.45)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.45)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
