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
        "navy-primary": "#06234B",
        "navy-dark": "#03172F",
        "navy-secondary": "#0D376B",
        "navy-body": "#18375D",
        "accent-red": "#FF1735",
        "light-blue": "#EEF6FD",
        "light-gray": "#F7F9FC",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        handwritten: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
