/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'backg': '#ecf2f9',
        'card1': '#723ec8',
        'card2': '#49556b',
        'card3': '#fefffe',
        'card4': '#19212d',
        'card5': '#fefffe'
      },
      fontFamily: {
        barlow: "'Barlow Semi Condensed', sans-serif"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px'
      },
    },
  },
  plugins: [],
}

