// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    letterSpacing: {
      normal: '.025em',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}




//   theme: {
//     fontFamily: {
//       'sans': ['Georgia'],
//     },
//     extend: {},
//   },
//   plugins: [],
// }
