/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FF6F96',
        secondary:'#203D6A'
      }
    },
  },
  plugins: [require("daisyui")],
}

