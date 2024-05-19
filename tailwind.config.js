/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        xl: "3rem",
        xl2: "2.2rem",
      },
      boxShadow: {
        "card-plant": "0px 6.48px 6px 0px rgba(41, 41, 41, 0.08)",
      },

      fontFamily: {
        raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        "eb-garamond": ["EB Garamond", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        pacifico: ["Pacifico", ...defaultTheme.fontFamily.sans],
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      filter: {
        "custom-drop-shadow":
          "drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.35))",
      },
      backgroundImage: {
        "footer-image": "url('./assets/bgFooter2.png')",
      },
    },
  },
  plugins: [],
};
