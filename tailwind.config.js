/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-gray': '#ecf0f1',
        'midnight-blue': '#2c3e50',
        'carrot': '#e67e22',
      },
    },
  },
  plugins: [],
}
