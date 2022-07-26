/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#6c5ce7",
        "purple-hover": "#8d65ea",
        dark: "#12181B",
        "dark-hovered": "#1b2428",
        "purple-900": "#210035",
        "purple-700": "#5D0096",
        "pink-500": "#AD26FF",
      },
      gridTemplateColumns: {
        "fill-small": "repeat(auto-fill, minmax(150px, 1fr))",
        "fill-medium": "repeat(auto-fill, minmax(180px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
