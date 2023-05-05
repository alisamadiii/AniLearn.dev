/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8000FF",
        secondary: "#F8522E",
        button: "#1C1F26",
        "font-clr": "rgba(227, 229, 232, 0.56)",
        "background-clr": "#0D0E12",
        "blur-clr": "rgba(170, 63, 255, 0.07)",
        box: "rgba(18, 20, 24)",
        "mouse-move": "rgba(92, 92, 92, 0.09)",
        "white-low-opacity": "rgba(255, 255, 255, 0.07)",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(270deg, #F8522E, #AA3FFF, #6557FF)",
        "gradient-text-2":
          "radial-gradient(73.51% 119.23% at 50% 49.23%, rgba(227, 229, 232, 0.52) 0%, rgba(227, 229, 232, 0.26) 100%)",
      },
      boxShadow: {
        "main-button": "0px 1px 17px rgba(170, 63, 255, 0.46)",
        "main-button-hover": "0px 1px 30px 3px rgba(170, 63, 255, 0.46)",
      },
    },
  },
  plugins: [],
};
