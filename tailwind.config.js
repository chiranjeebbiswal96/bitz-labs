/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom-xl': '40px',
      },
      fontSize: {
        '36px': '36px', 
      },
      lineHeight: {
        '43.2': '43.2px', 
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'], 
      },
      colors:{
         'custom-yellow': '#f9D03f',
      }
    },
  },
  plugins: [],
}