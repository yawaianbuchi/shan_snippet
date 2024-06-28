import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        red: {
          DEFAULT: '#D70000',
          50: '#FBE6E6',
        },
        yellow: {
          DEFAULT: '#FFEB36',
        },
        green: {
          DEFAULT: '#127C12',
          '50': '#E7F2E7',
        },
        gray: {
          DEFAULT: '#f7f7f7',
          secondary: '#aeaeae',
          400: '#adadad',
        },
        orange: {
          DEFAULT: '#F76D31',
        },
      },
      colors: {
        red: {
          DEFAULT: '#D70000',
          50: '#FBE6E6',
        },
        yellow: {
          DEFAULT: '#FFEB36',
        },
        green: {
          DEFAULT: '#127C12',
          '50': '##E7F2E7',
        },
        gray: {
          DEFAULT: '#f7f7f7',
          secondary: '#aeaeae',
          400: '#adadad',
        },
        black: {
          DEFAULT: '#1E1E1E',
        },
      },
      boxShadow: {
        DEFAULT: '0px 8px 10px 0px #127C120D',
      },
      borderColor: {
        gray: {
          DEFAULT: '#EEEEEE',
        },
      },
      fontSize: {
        md: '16px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
