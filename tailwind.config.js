/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/images/bg.png')",
        'footer-image': "url('/src/assets/images/footer_bush.png')",
      },
      colors: {
        'theme': '#B6DB12',
        'tab':'#F4EFFC80',
        'activeTab':'#F4EFFC',
        'pageHeading':'#212B36',
        'lightText':'#919EAB',
      },

      textStrokeWidth: {
        '1-0': '1px',
        '1-5': '1.5px',
      },
      textStrokeColor: theme => theme('colors'),
    },plugins: [],
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-black-1-5': {
          WebkitTextStrokeWidth: 'var(--text-stroke-width-1-5, 1.5px)',
          WebkitTextStrokeColor: 'var(--text-stroke-color, black)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

