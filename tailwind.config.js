/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/***/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    screens: {
      "2xs": { max: "424px" },
      xs: { min: "425px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        backgroundColor: "#121212",
        headColor: "#ffffff",
        textColor: "#c4c4c4",
        buttonBgColor: "#ffffff",
        buttonTextColor: "#121212",
        navlinkColor: "#ffffff",
        navlinkActiveColor: "#86D293",
        iconColor: "#e3e3e3",
        iconBgColor: "#009dda",
        footerBgColor: "#292930",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "regular"],
    },
  },
  plugins: [],
};
