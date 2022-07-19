/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'login-desktop': "url('/src/assets/bg.png')",
      }
    },
    colors: {
      'blue-berry': '#6769FF',
      'acian2': '#6464FA',
      'acian2-hover': '#6F7DFF',
      'acian1': '#939DFF',
      'red-rimac': '#FF1C44',
      'success': '#43B748',
      'gray2-p': '#676F8F',
      'gray1-t': '#494F66',
      'gray3': '#A9AFD9',
      'gray4': '#C5CBE0',
      'gray5': '#E4E8F7',
      'gray6': '#F0F2FA',
      'gray7': '#F7F8FC',
      'green2': '#43B748',
      'white': '#FFFFFF',
      'black': '#000000'
    },
  },
  plugins: [],
}
