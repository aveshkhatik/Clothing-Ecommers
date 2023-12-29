/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
"Black": "#1E2832",
"primaryBG": "#ae28320d"
      },
      container: {
        center: true,
        padding: "15px"
      }
    },
  },
  plugins: [],
}

