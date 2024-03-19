import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl1': {'raw': '(min-width: 1281px)'},
        // Define tus propios nombres y condiciones de media query personalizadas
      }
      ,
      colors: {
        btnblue:'#1d9bf0',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
