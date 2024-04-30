import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        line: 'lineAnimation 3s linear infinite',
      },
      keyframes: {
        lineAnimation: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
      },
      colors:{
          bg:"#151c2c",
          bgSoft:"#182237",
          bgMoreSoft:"#2e374a",
          text:"white",
          textSoft:"#b7bac1",
          cyan:"#4DD0E1",
          pending:"#f7cb7375",
          done:"#afd6ee75",
          cancelled:"#f7737375",
          purpleBtn:"#6A1B9A",
          lightPurpleBtn:"#CE93D8",
          greenBtn:"#2E7D32",
          greenBlueBtnDark:"#00838F",
          redBtn:"#B71C1C"

        
      }
    },
  },
  plugins: [],
};
export default config;
