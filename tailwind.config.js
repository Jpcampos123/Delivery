/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
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
