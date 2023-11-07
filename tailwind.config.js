/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      sm: "540px",
      md: "720px",
      lg:"1066px"
      // => @media (min-width: 540px) { ... }
    },
  },
  plugins: [],
};