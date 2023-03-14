/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
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
      animation: {
        "gradient-1": "animate-gradient-1 8s infinite",
        "gradient-2": "animate-gradient-2 8s infinite",
        "gradient-3": "animate-gradient-3 8s infinite",
      },
      keyframes: {
        "animate-gradient-1": {
          "0%, 16.667%, 100%": { opacity: "1" },
          "33.333%, 83.333%": { opacity: "0" },
        },
        "animate-gradient-2": {
          "0%, 16.667%, 66.667%, 100%": { opacity: "0" },
          "33.333%, 50%": { opacity: "1" },
        },
        "animate-gradient-3": {
          "0%, 50%,  100%": { opacity: "0" },
          "66.667%, 83.333%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
