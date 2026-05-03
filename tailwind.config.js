/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inknut Antiqua', 'serif'],
        serif: ['Inknut Antiqua', 'serif'],
      },
    },
  },
  plugins: [],
}
