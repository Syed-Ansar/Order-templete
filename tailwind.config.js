module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/pattern-backround-desktop.svg')",
      },
      colors: {
        dark: "#3829e0",
        light: "#e0e8ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
