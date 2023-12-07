/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary':['Heebo', "sans-serif"],
        'secondary':['Indie Flower', "cursive"],
        'homefont':['Abril Fatface', 'serif']
      
        
      },
      backgroundImage:{
        'carousel1': "url('../assets/')"
      }
    },
  },
  plugins: [],
}

