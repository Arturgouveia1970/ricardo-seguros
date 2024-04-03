/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: ' #0f3a57',
        orange: '#e1890b',
        orange-light: '#ff'
      }
    },
  },
  plugins: [],
}

