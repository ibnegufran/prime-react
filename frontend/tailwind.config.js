/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color':'#3C1E55',
        'secondry-color':'#763BA7',

      },
      backgroundImage: {
        'about-image': "url('../public/aboutpage.jpg')",
        
      }
    },
  },
  plugins: [],
}

