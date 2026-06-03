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
        "dark-bg": "#2B2B2B",
        "dark-card": "#353535",
        "dark-border": "#454545",
        "off-white": "#F5F0EB",
        "gray-text": "#B0B0B0",
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
