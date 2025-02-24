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
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      text: {
        "2xs": "0.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "4rem"
      },
      colors: {
        "themed-neutral": "rgb(168, 195, 205)",
        "themed-light": "rgb(136, 173, 187)",
        "themed-inv-light": "rgb(119, 82, 68)",
        "themed-dark": "rgb(18, 26, 34)",
        "themed-mid": "rgb(23, 47, 69)",
        "themed-teal": "#017F7C",
        "themed-navy": "#304978"
      },
      screens: {
        '3xl': '1920px',
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
      },
      height: {
        'expand': '130%', // Adjust this value as needed
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  variants: {
    extend: {
      maskImage: ['dark'],
      webkitMaskImage: ['dark'],
      height: ['hover']
    },
  },
  plugins: [],
};
