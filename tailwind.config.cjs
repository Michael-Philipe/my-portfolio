/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Bowlby One'],
      },
      colors: {
        'blue-button': 'rgba(0, 212, 255, 1)',
      },
      backgroundImage: {
        header: "url('/src/assets/bg-header.png')",
        mundo: "url('/src/assets/2150265.svg')",
        wave: "url('https://waveofchange.com/wp-content/themes/bigdrop-theme/dist/images/wave.png')",
        printGhibli: "url('/src/assets/img/print_ghibli.png')",
      },
    },
  },
  plugins: [],
};
