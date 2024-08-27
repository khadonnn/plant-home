/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      colors: {
        'cus-dark': '#09090b',
        'cus-brown': '#18181b'
      }
    },
  },
  plugins: [],
}