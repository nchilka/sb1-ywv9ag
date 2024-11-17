/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A3926E',
          light: '#C3B9A6',
          dark: '#796232',
          darker: '#574626',
          darkest: '#2A2318',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, rgb(42 35 24 / 0.98), rgb(42 35 24 / 1))',
        'gradient-sidebar': 'linear-gradient(to bottom, rgb(71 56 30 / 0.98), rgb(42 35 24 / 1))',
        'gradient-card': 'linear-gradient(to bottom right, rgb(87 70 38 / 0.3), rgb(42 35 24 / 0.5))'
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};