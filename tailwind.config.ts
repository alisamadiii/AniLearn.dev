import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background) / <alpha-value>)",
        foreground: "rgba(var(--foreground) / <alpha-value>)",
        primary: "rgba(var(--primary) / <alpha-value>)",
      },
      fontFamily: {
        body: "var(--body-font)",
        display: "var(--display-font)",
      },
      boxShadow: {
        navbar: "0 4px 50px rgba(0, 0, 0, .25)",
      },
    },
  },
  plugins: [],
};
export default config;
