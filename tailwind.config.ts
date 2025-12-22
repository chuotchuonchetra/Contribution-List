/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // This allows the Sun/Moon button to work
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        khmer: ["Kantumruy Pro", "serif"],
      },
    },
  },
  plugins: [],
};
