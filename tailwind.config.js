/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(255, 90, 0)'
      }
    },
    fontFamily : {
      'hero-font' :'Sriracha'
    }
  },
  plugins: [],
}

