/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./details.html","./assets/**/*.{js,ts,jsx,tsx}", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
           dark:'#4d7c8a',
           lightBlue:'#9ED0E6'
      }
    },
  },
  plugins: [],
};
