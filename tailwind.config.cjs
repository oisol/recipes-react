/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        resp: '3vw'
      },
      boxShadow: {
        '3xl': '3px 5px 31px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
