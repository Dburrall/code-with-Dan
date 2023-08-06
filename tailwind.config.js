/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            './dist/**/*.{html,js}',
          ],
  theme: {
    extend: {
      colors: {
        'home-background': '#0F1C33',
        'home-font': '#38B6CF',
        'nav-color': '#22244E',
        'purple': '#6148A4',
        'darker-teal': '#327095'
      },
    },
  },
  plugins: [],
};

