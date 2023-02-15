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
      },
      colors: {
        primary: "#0057FF",
      },
    },
  },
  plugins: [],
};
