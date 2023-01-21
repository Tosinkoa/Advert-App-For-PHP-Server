/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["var(--font-openSans)"],
        rubikVinyl: ["var(--font-rubikVinyl)"],
      },
      backgroundImage: {
        "banner-image": "url('/images/arcewave-project-banner.jpg')",
      },
      colors: {
        primary: colors.blue,
      },
      screens: {
        sm: "1px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
