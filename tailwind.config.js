/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- Add this line
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
   extend: {
  fontFamily: {
    sans: ['InterVariable', 'sans-serif'],
  },
}

  },
  plugins: [],
};
