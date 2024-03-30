/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '490px',
      'sm': '640px',
      'md': '768px',
      'md-lg': '870px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      pacifico: ['Pacifico', 'cursive'],
    }
  },
  plugins: [],
}