/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#299D91"
      },
      fontFamily: {
        body: ['Sixtyfour Convergence']
      }

    },
  },
  plugins: [],
}

