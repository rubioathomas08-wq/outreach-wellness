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
        "dark-bg": "#1E1E1E",
        "dark-card": "#282828",
        "dark-border": "#383838",
        "off-white": "#F5F0EB",
        "gray-text": "#B0B0B0",
        "light-bg": "#D8D8D8",
        "light-text": "#1E1E1E",
        "light-text-muted": "#5A5A5A",
        "light-border": "#BCBCBC",
        "gold": "#E8C547",
        "gold-light": "#F5D83A",
        "gold-dark": "#B8941F",
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
