import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors:{
          bg:"#151c2c",
          bgSoft:"#182237",
          bgMoreSoft:"#2e374a",
          text:"white",
          textSoft:"#b7bac1",
          cyan:"#4DD0E1"

        
      }
    },
  },
  plugins: [],
};
export default config;
