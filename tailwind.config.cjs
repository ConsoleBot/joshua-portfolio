/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0172fd',
        'secondary': '#20232A',
        'tertiary': '#3C2133',
        'text1': '#C56A77',
        'text2': '#68CDFE',
        'text3': '#CE834A',
        'text4': '#569CD6',
        'text5': '#DCCD79',
        'text6': '#F1D710',
        'text7': '#FFB71',
        'text8': '#808073',
        'disabled': '#696969',
      },
      animation: {
        'bounceHero': 'bounceHero 5s linear infinite',
      },
      keyframes: {
        bounceHero: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      gridTemplateColumns: {
        'techonolgy-layout': 'repeat(auto-fit, minmax(315px, 1fr))'
      }
    },
  },
}
