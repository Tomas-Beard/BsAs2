/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/places.html','./index.html','./pages/contact.html','./pages/factory.html','./pages/us.html'],
  theme: {
    extend: {
      fontFamily:{
        gobold:['Gobold','Gobold CUTS'],
        goboldBody:['Gobold Uplow'],
        goboldthin:['Gobold Thin Light'],
        gblowplus:['Gobold Lowplus']
      }
    },
  },
  plugins: [],
}

