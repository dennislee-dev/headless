module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fade: "2s infinite linear fadeInBoost",
      },
      colors: {
        general: '#19806D',
        },
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        hero: "url('/public/hero.jpg')",
      },
    },
  },

  plugins: [],
};
