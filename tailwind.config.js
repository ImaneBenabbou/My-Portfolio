/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66abf9',
          400: '#338ff7',
          500: '#0073f5',
          600: '#005cc4',
          700: '#004593',
          800: '#002e62',
          900: '#001731',
        },
        cyan: {
          50: '#e6faff',
          100: '#ccf4ff',
          200: '#99eaff',
          300: '#66dfff',
          400: '#33d5ff',
          500: '#00caff',
          600: '#00a2cc',
          700: '#007999',
          800: '#005166',
          900: '#002833',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};