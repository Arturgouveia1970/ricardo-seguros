// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        blue: ' #0f3a57',
        orange: '#e1890b',
        orangelight: '#ff9400'
      },
      backgroundImage: {
        'hero1': "url('src/assets/hero2.jpg') src/assets/hero2.jpg" alt='image1" style={{ objectFit: "contain" }}",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

