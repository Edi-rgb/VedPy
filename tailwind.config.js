/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SpecialGray: "#1B1F24",
        SpecialWhite: "#fafafa",
        SpecialGradientColor1: "#02204f",
        SpecialGradinetColor2: "#3b096b",
      },
    },
  },
  plugins: [],
};
