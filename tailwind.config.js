/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/*/*.html',
    './layouts/partials/*.html',
    './layouts/*.html',
    './layouts/_default/*.html'
  ],
  theme: {
    fontFamily: {
      merri: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    colors: {
      primaryBlack: "#050d1a",
      secondaryGreen: "#2aad92",
      darkGreen: "#003949",
      whiteBg: "#f4f4f5",
      white: "#fff",
      lightParrot: "#7ee2c4",
      randomBlack: "#323843"
    },
    extend: {},
  },
  plugins: [],
}
