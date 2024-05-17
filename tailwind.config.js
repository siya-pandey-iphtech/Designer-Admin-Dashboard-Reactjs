/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],  theme: {
    extend: {
      width: {
        '120': '30rem', // Add more widths as needed
        // ...
       '125':'35rem',
        '130':'40rem'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    


  ],
}

