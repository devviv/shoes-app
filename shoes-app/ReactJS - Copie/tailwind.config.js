/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        first:{
          100:"#010101",
        },
        second:{
          100:"#f2f0ea",
        },
        third:{
          100:"#edcf5d"
        },
        fourth:{
          100:"#a4a4a4"
        }
      },
    },
  },
  plugins: [],
}

