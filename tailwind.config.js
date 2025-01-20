/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Arial', 'sans-serif'],
      },
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '1200px' },
        lg: '1200px',
      },
      colors: {
        'main-color': '#025fc4',
        'black-color': '#333',
        'menu-color-blue': '#0056b3',
        'menu-hover-blue': '#0049a2',
      },
      fontSize: {
        'menu': '18px',
        'menu-tablet': '16px',
        'menu-mobile': '14px',
      },
      spacing: {
        'navbar-px-xs': '10px',
        'navbar-px-md': '15px',
        'navbar-px-lg': '15vh',
        'navbar-py': '25px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}