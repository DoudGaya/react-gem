/** @type { import('tailwindcss').Config } */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], // 08062249834
  theme: {
    extend: {
      fontFamily: {
        banner: ['DM Serif Display', 'serif']
      }
    },
  },
  plugins: [],
}

