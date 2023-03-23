/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFC700",
        "dark-primary": "#1ed760",
      },
      boxShadow: {
        button: "0 0 0px 2px white, 0 0 0px 4px black",
        anilearn:
          "0 20px 25px -5px rgba(0,0,0,.05),0 8px 10px -6px rgba(0,0,0,.05)",
      },
      backgroundImage: {
        pattern: `linear-gradient(rgba(25, 25, 25, .5) 2px, transparent 2px), linear-gradient(90deg, rgba(25, 25, 25, .5) 1px, transparent 1px);`,
      },
      backgroundSize: {
        pattern: "40px 40px, 40px 40px, 20px 20px, 20px 20px",
      },
      backgroundPosition: {
        pattern: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
      },
      animation: {
        background: "background 10s infinite alternate",
      },
      keyframes: {
        background: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
