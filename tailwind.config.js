const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    colors: {
      ...colors,
      'blue': {
        '50': '#E1F2FD',
        '100': '#B3D8FA',
        '200': '#85BDF7',
        '300': '#57A2F4',
        '400': '#2988F1',
        '500': '#2196F3', // Your provided color
        '600': '#1A83D4',
        '700': '#146FB5',
        '800': '#0E5B96',
        '900': '#084777',
        '950': '#023358'
      },
      green: {
        '50': '#EDF8ED',
        '100': '#DAF4DA',
        '200': '#C7EFC7',
        '300': '#B4EBB4',
        '400': '#A1E6A1',
        '500': '#A5D6A7', // Your provided color
        '600': '#8AC68A',
        '700': '#6FB76F',
        '800': '#55A855',
        '900': '#3B9A3B',
        '950': '#208B20'
      },
      yellow: {
        '50': '#FFFCE5',
        '100': '#FFF9CC',
        '200': '#FFF7B2',
        '300': '#FFF498',
        '400': '#FFF27F',
        '500': '#FFEB3B', // Your provided color
        '600': '#E3CE33',
        '700': '#C7B02A',
        '800': '#AB9222',
        '900': '#8F7419',
        '950': '#735610'
      },
      red: {
        '50': '#FFD6D6',
        '100': '#FFB9B9',
        '200': '#FF9D9D',
        '300': '#FF8080',
        '400': '#FF6464',
        '500': '#FF5252', // Your provided color
        '600': '#E34949',
        '700': '#C74040',
        '800': '#AB3838',
        '900': '#8F2F2F',
        '950': '#732626'
      },
      purple: {
        '50': '#EDE7F6',
        '100': '#D1BEEC',
        '200': '#B695E1',
        '300': '#9B6CD7',
        '400': '#8063CD',
        '500': '#B39DDB', // Your provided color
        '600': '#9568B8',
        '700': '#7B5394',
        '800': '#613F70',
        '900': '#482A4D',
        '950': '#2F1629'
      },
      pink: {
        '50': '#FFDAE5',
        '100': '#FFB3CA',
        '200': '#FF8CB0',
        '300': '#FF6695',
        '400': '#FF407B',
        '500': '#FF80AB', // Your provided color
        '600': '#E36894',
        '700': '#C7507E',
        '800': '#AB3867',
        '900': '#8F2051',
        '950': '#73163A'
      },
      orange: {
        '50': '#FFEDD9',
        '100': '#FFD7B3',
        '200': '#FFC18C',
        '300': '#FFAB66',
        '400': '#FF9540',
        '500': '#FF7849', // Your provided color
        '600': '#E36A40',
        '700': '#C75C38',
        '800': '#AB4D30',
        '900': '#8F3E28',
        '950': '#732F20'
      }
    },
    fontSize: {
      'xs': '.75rem',     // 12px
      'sm': '.875rem',    // 14px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '4rem',      // 64px
    },
    extend: {
      colors: {
        primary: colors.yellow,
        secondary: colors.green,
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
