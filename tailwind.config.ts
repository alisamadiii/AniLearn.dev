import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        dvh: "100dvh",
        svh: "100svh",
      },
      colors: {
        background: "rgba(var(--background) / <alpha-value>)",
        foreground: "rgba(var(--foreground) / <alpha-value>)",
        primary: "rgba(var(--primary) / <alpha-value>)",
        paragraph: "rgba(var(--paragraph) / <alpha-value>)",
        muted: "rgba(var(--muted) / <alpha-value>)",
        "outline-button": "rgba(var(--outline-button) / <alpha-value>)",
        box: "rgba(var(--box) / <alpha-value>)",
        html: "#E34C26",
        css: "#264DE4",
        js: "#F0DB4F",
      },
      fontFamily: {
        body: "var(--body-font)",
        display: "var(--display-font)",
      },
      boxShadow: {
        navbar: "0 4px 50px rgba(0, 0, 0, .25)",
        "ham-menu":
          "0 0 0 2px rgba(var(--background)), 0 0 0 4px rgba(var(--foreground))",
      },
      animation: {
        html: "rotate 5s infinite linear",
        css: "rotate 2s infinite linear",
        js: "rotate 3s infinite linear",
      },
      keyframes: {
        rotate: {
          from: {
            rotate: "0deg",
          },
          to: {
            rotate: "-360deg",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
