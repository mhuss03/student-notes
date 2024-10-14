/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#152b4d",
        secondary: "#cea434",
        greybg: "#eef2f5",
        accent: "#0e1f33",
      },
      fontFamily: {
        ayah: ['"Scheherazade New"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
