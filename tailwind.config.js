/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],  theme: {
    extend: {
      width: {
        '120': '30rem', 
       '125':'35rem',
        '130':'40rem'
      },
      height:{
'50':'12.5rem'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '3xs': '0.5rem', // Add your desired size
      },
    },
  },
  plugins: [
    


  ],
}

