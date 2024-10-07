/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ['"Fira Code"', 'monospace'], // Correctly defining the font family
      },
      colors: {
        main: '#1f1f1e',
        navbar: '#252427',
        navbarNotselected: '#2d2c2d',
        header: '#3c3c3c',
        customyellow: '#9e7b31',
      },
    },
  },
  plugins: [],
}
