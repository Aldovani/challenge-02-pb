/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        customRadial: "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)"
      },
      colors: {
        white: "#FCFCFC",
        "athena-grey": "#F8F9FB",
        wisper: "#F0F1EE",
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
      fontSize: {
        64: "4rem",
      },
      fontFamily: {
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        "eb-garamond": ["EB Garamond", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
