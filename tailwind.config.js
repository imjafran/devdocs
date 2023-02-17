/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",
    "./src/App.vue",
    "./src/components/*.vue",
    "./src/views/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss')
  ],
}
