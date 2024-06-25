import type { Config } from "tailwindcss";
import color from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        red: {
          DEFAULT: "#D70000",
          50: "#FBE6E6",
        },
        yellow: {
          DEFAULT: "#FFEB36",
        },
        green: {
          DEFAULT: "#127C12",
          "50": "#E7F2E7",
        },
        gray: {
          DEFAULT: "#f7f7f7",
          400: "#adadad",
        },
      },
      colors: {
        red: {
          DEFAULT: "#D70000",
          50: "#FBE6E6",
        },
        yellow: {
          DEFAULT: "#FFEB36",
        },
        green: {
          DEFAULT: "#127C12",
          "50": "#E7F2E7",
        },
        gray: {
          DEFAULT: "#f7f7f7",
          secondary:"#4e4e4e",
          400: "#adadad",
        },
        black: {
          DEFAULT: '#1E1E1E'
        }
      },
      boxShadow: {
        DEFAULT: "0px 8px 10px 0px #127C120D",
      },
      borderColor: {
        gray: {
          DEFAULT: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
