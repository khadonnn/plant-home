/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        'cus-dark': '#09090b',
        'cus-brown': '#18181b',
        'cus-white': '#edeff5',
        'cus-cream': '#f9fafb',
        'border-lig': '#6b7280',
        'border-dark': '#1f2937',

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
