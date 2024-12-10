import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: '#37faa2',
            50: '#f0fdfb',
            100: '#e6fbf7',
            200: '#b3f7e3',
            300: '#80f3cf',
            400: '#4df0bb',
            500: '#1aeaa7',
            600: '#00b87f',
            700: '#008a63',
            800: '#005c46',
            900: '#002e2a',
            foreground: '#000000',
          }
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: '#26a16a',
            foreground: '#ffffff',
            900: '#f0fdfb',
            800: '#e6fbf7',
            700: '#b3f7e3',
            600: '#80f3cf',
            500: '#4df0bb',
            400: '#1aeaa7',
            300: '#00b87f',
            200: '#008a63',
            100: '#005c46',
            50: '#002e2a',
          },
          
        }
      },
    }
  })],
}
