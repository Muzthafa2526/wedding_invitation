/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#180004',
          900: '#2B0008', // Dark Maroon
          800: '#43000D', // Deep Burgundy
          700: '#590014', // Rich Wine Red
          600: '#75001C',
          500: '#920526',
        },
        gold: {
          100: '#FFF4DF', // Soft Ivory
          200: '#FBE8C4',
          300: '#F1D99A', // Champagne Gold
          400: '#E4C381',
          500: '#D4AF67', // Metallic Gold
          600: '#BA9248',
          700: '#A77B35', // Dark Gold
          800: '#875F22',
          900: '#5F4114',
        },
      },
      fontFamily: {
        calligraphy: ['"Pinyon Script"', '"Alex Brush"', '"Great Vibes"', 'cursive'],
        script: ['"Pinyon Script"', '"Alex Brush"', '"Great Vibes"', 'cursive'],
        cinzel: ['"Cinzel"', '"Cinzel Decorative"', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F1D99A 0%, #D4AF67 50%, #A77B35 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #D4AF67 0%, #FFF4DF 50%, #D4AF67 100%)',
        'burgundy-gradient': 'radial-gradient(ellipse at center, #590014 0%, #43000D 50%, #2B0008 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 103, 0.45)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 103, 0.65)',
        'burgundy-shadow': '0 25px 60px -15px rgba(43, 0, 8, 0.9)',
      },
    },
  },
  plugins: [],
}
