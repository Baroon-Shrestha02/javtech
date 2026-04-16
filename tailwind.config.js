/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EE005A",
        foreground: "#111111",
        elevated: "#0c0c12",
        muted: "#9b9bb3",
        accent: "#292829",
        accent2: "#E01522",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
