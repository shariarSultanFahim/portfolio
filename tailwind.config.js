/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Bruno Ace','sans-serif']
      },
      colors: {
        primary: '#00FF8F',
        icon: '#94A3B8',
        bg: '#0B0C10',
      },
      backgroundImage: {
        'custom-bg': "url('./assets/background_grain.png')",
        'grad-1': 'linear-gradient(to right, #00FF8F, #00A1FF)',
      },
      boxShadow: {
        'inner-custom': 'inset 0 0 10px  #1F2937',
      },
    },
  },
  plugins: [],
}