/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC700",
      },
      boxShadow: {
        button: "0 0 0px 2px white, 0 0 0px 4px black",
      },
    },
  },
  plugins: [],
};
