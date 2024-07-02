/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#071952",
        secondary: "#088395",
        accent: "#37B7C3",
        bgColor: "#EBF4F6",
      },
      fontFamily: {
        cabin: ['"Cabin"', "sans-serif"],
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
