const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold": {
          "normal": "#FFD875",
          "rose": "#FFCAC3",
        },
      },

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },

      screens: {
        'light': { 'raw': '(prefers-color-scheme: light)' },
      },

      gridTemplateColumns: {
        'produits': "repeat(auto-fit,minmax(280px,1fr))",
      },
    
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
    require("daisyui"),
  ],
};
