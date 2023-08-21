/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        main_bg: '#1F2937',
        p_text: '#EEEEEE',
        h_text: '#00ADB5',
        c_bg :'#2f3540'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require("daisyui"),
  ],
}

