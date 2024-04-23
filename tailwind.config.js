/** @type {import('tailwindcss').Config} */
const colors = require("./src/styles/colors.json");
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      },
      colors,
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
    },
  },
  plugins: [],
};
