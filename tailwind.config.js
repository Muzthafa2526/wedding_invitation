/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF8',
          100: '#FAF7F0',
          200: '#F8F4E9', // Primary Background
          300: '#F0E8D5',
          400: '#E5D9BE',
          500: '#D8C6A0',
        },
        olive: {
          50: '#F6F7F2',
          100: '#EAECE0',
          200: '#D2D8BE',
          300: '#B4BF97',
          400: '#94A273',
          500: '#737B4B', // Secondary Color
          600: '#5C633A',
          700: '#454B2A',
          800: '#32371E',
          900: '#212513',
        },
        gold: {
          50: '#FCF9F2',
          100: '#F8F1E2',
          200: '#EFE0C2',
          300: '#E4CD9F',
          400: '#D5B87E',
          500: '#C5A46D', // Accent Color
          600: '#B28E51',
          700: '#8D6E37',
          800: '#684F25',
          900: '#463417',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #C5A46D 0%, #F4EBDA 50%, #A6844D 100%)',
        'olive-gradient': 'linear-gradient(135deg, #737B4B 0%, #454B2A 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 50px -10px rgba(115, 123, 75, 0.15)',
        'luxury-hover': '0 25px 60px -10px rgba(115, 123, 75, 0.25)',
        'gold-glow': '0 0 25px rgba(197, 164, 109, 0.35)',
        'wax-seal': '0 8px 20px rgba(115, 123, 75, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'petal-fall': 'petalFall 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.02)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) rotate(360deg) translateX(50px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
