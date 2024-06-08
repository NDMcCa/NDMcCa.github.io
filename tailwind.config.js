/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      text: {
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "4rem",
      },
      maxWidth: {
        "1800": "1800px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        "mask": "mask-image, -webkit-mask-image",
      }, 
      transitionDuration: {
        "500": "500ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "ease-in-out",
      }
    },
  },
  variants: {
    extend: {
      maskImage: ['dark'],
      webkitMaskImage: ['dark'],
    },
  },
  plugins: [],
};
