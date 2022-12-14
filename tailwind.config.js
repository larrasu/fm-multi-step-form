/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('/images/bg-sidebar-mobile.svg')",
        desktop: "url('/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        primary: {
          100: "hsl(213, 96%, 18%)",
          200: "hsl(243, 100%, 62%)",
          300: "hsl(228, 100%, 84%)",
          400: "hsl(206, 94%, 87%)",
          red: "hsl(354, 84%, 57%)",
        },
        accent: {
          100: "hsl(231, 11%, 63%)",
          200: "hsl(229, 24%, 87%)",
          300: "hsl(217, 100%, 97%)",
          400: "hsl(231, 100%, 99%)",
        },
        ...defaultTheme.colors,
      },
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
