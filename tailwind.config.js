module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue"],
      rajdhani: ["Rajdhani", "sans-serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
    extend: {
      colors: {
        orange: {
          tron: "#ff6b00",
          lt: "#ff9500",
        },
      },
    },
  },
  variants: { extend: {} },
  plugins: [require("@tailwindcss/forms")],
};
