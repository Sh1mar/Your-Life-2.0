/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*{html,js}",
    "./js/*.js",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',

        primaryColor: '#212121',
      },
      gridTemplateColumns: {
         // Simple 16 column grid
         '13': 'repeat(13, minmax(0, 1fr))',
         '26': 'repeat(26, minmax(0, 1fr))',
         '52': 'repeat(52, minmax(0, 1fr))',
      },  
    },
  },
  plugins: [],
}

