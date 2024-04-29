/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm": {"min":"100px","max":"550px"},
        "md": {"min":"550px","max":"800px"},
        "lg": {"min":"830px","max":"1500px"}
      }
    },
  },
  plugins: [],
}

