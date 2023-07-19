/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito, sans-serif'],
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
    },
  },
  plugins: [],
};