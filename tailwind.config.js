/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          accent: "#DDDEA0",
          avacado: "#8A9B6E",
          "lunar-green": "#354733",
        },
        dark: {
          IBBNB: "#1E1E24",
          gray: "#AFB2AA",
        },
        secondary: {
          Teak: "#B99274",
          secondary: "#808276",
        },
      },
    },
  },
  plugins: [],
};
