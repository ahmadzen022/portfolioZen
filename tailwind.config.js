/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    container: {
      center: true,
      padding: '16px',

    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark:'#0f172a',
        secondary:'#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
        
        
      },
    },
  },
  plugins: [],
};
