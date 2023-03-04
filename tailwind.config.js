/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: "0 11px 31px rgba(0, 0, 0, .25)",
        card: "-1rem 0 20px rgba(0, 0, 0, .25)",
        warning: "inset 0 0 5px",
        error: "inset 0 0 5px",
        success: "inset 0 0 5px",
      },
      colors: {
        primary: "#0057FF",
        paypal: "#002C8A",
        warning: "#FFCC00",
        error: "red",
        success: "green",
        "code-background": "rgb(40, 44, 52)",
        "code-title": "rgb(53, 59, 69)",
      },
      space: {
        img_overlapping: "-10px",
      },
      backgroundImage: {
        "slide-animation": "url('../public/section1.gif')",
        "square-pattern": `linear-gradient(rgba(0, 0, 0, 0.036) 2px, transparent 2px), linear-gradient(90deg, rgba(0, 0, 0, 0.036) 1px, transparent 1px);`,
      },
      backgroundSize: {
        pattern: "40px 40px, 40px 40px, 20px 20px, 20px 20px",
      },
      backgroundPosition: {
        pattern: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
      },
    },
  },
  plugins: [],
};
