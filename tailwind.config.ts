/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './N7/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkmode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-transition'),
    require('tailwind-scrollbar-hide'),
  ],
}
