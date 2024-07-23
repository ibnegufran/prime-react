/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color':'#FE8E97',
        'secondry-color':'#E6B392',

      },
      backgroundImage: {
        'about-image': "url('../public/aboutpage.jpg')",
        
      }
    },
  },
  plugins: [],
}

