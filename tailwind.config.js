/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        kufam: ["Kufam"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        lite: "#555555",
        dark: "#333333",
      },
    },
  },
  plugins: [],
}
