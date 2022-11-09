/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'zoom': '700px 700px',
      }
    },
  },
  plugins: [],
}
