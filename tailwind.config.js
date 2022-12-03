/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('~/assets/images/bg-sidebar-mobile.svg')",
        desktop: "url('~/assets/images/bg-sidebar-desktop.svg')",
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
      },
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
