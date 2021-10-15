module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/pattern-background-desktop.svg')",
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
