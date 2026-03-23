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
        "dark-bg": "#0A0A0A",
        "dark-card": "#141414",
        "dark-border": "#1E1E1E",
        "off-white": "#F5F0EB",
        "gray-text": "#9B9B9B",
        "gold": "#C9A84C",
        "gold-light": "#D4B96A",
        "gold-dark": "#A88A3D",
        "warm-cream": "#F5F0EB",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
