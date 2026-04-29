/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './App.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EEEEFF',
          100: '#D9D8FE',
          200: '#B4B0FD',
          300: '#8F89FC',
          400: '#6A61FA',
          500: '#4F46E5',
          600: '#3730C2',
          700: '#2A248F',
          800: '#1E185C',
          900: '#110D2A',
        },
        secondary: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        danger: '#EF4444',
        warning: '#F59E0B',
        surface: '#F9FAFB',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['System'],
      },
    },
  },
  plugins: [],
};
