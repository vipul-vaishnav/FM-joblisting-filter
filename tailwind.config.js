/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkCyan: '#5ba4a4',
        lightGrayishCyanOne: '#effafa',
        lightGrayishCyanTwo: '#eef6f6',
        darkGrayishCyan: '#7b8e8e',
        veryDarkGrayishCyan: '#2c3a3a',
      },
      fontFamily: {
        fontDefault: ['League Spartan', 'sans-serif'],
      },
      borderWidth: {
        6: '6px',
      },
      boxShadow: {
        job: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
      },
    },
  },
  plugins: [require('daisyui')],
};
