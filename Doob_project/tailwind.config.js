/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "font-color": "#ACACAC",
        "border-color": "#ffffff1a"
      },
      backgroundImage:{
        "custom-image": "url('/public/bg-image-12.jpg')",
      }
    },
  },
  plugins: [],
}

