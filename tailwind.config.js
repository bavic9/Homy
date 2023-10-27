/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '979px',
      xl: '1440px'
    },

    borderRadius: {
      topRightLeft: '15rem 15rem 0 0',
      small: '5px',
      card: '5%',
      full: '100%',
      md: '10px'
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
        dark: '#131110',
        blueIsh: 'hsl(214, 57%, 28%)',
        blueIshLight: 'hsl(214, 57%, 88%)',
        lightBlue: 'hsl(228, 66%, 47%)',
        skyBlue: '#4066ff',
        orange: 'hsl(29, 100%, 59%)',
        lightOrange: 'hsl(29, 100%, 74%)',
        red: 'red',
      },

      width: {
        full: '30rem',
        search: '65%',
        stat: '70%',
        '100%': '100%',
        vw: '88vw',
        half:   '50%',
        logo: '100px',
        card: '90vw',
        img: '95%',
        '33': '255px'
      },

      height: {
        full: '35rem',
        orange: '4rem',
        '100%': '100%',
        card: '100%',
        img: '180px',
        vh: '80vh',
      }
    },
  },
  plugins: [],
}

