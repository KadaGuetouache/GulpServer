/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%'
      },
      aspectRatio: {
        '16/9': '16 / 9',
        '9/16': '9 / 16',
      },
      gridTemplateRows: {
        'min': 'min-content'
      }
    },
    transitionDelay: {
      '400': '400ms',
      '600': '600ms',
      '800': '800ms',
      '900': '900ms',
    },
  },
  plugins: [],
}
