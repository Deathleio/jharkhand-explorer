/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2a402b',
        'stone-gray': '#4d4d4d',
        'leaf-green': '#6a994e',
        'off-white': '#f5f5f5',
      }
    },
  },
  plugins: [],
};