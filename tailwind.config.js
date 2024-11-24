/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ['Poppins'],
    },
    colors: {
      primary: '#4b5563',
      secondary: '#9ca3af',
    }
  },
  plugins: [],
  }
}
