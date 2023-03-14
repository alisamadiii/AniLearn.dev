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
        anilearn:
          "0 20px 25px -5px rgba(0,0,0,.05),0 8px 10px -6px rgba(0,0,0,.05)",
      },
    },
  },
  plugins: [],
};
