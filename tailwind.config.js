/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xsm": "425px",
        "sm": "600px",
        "smd": "700px",
        "lg": "1024px",
        "xlg": "1280px",
        "xl": "1440px",
      },
      colors: {
        sidebarBg: '#D7D9F3', // Custom sidebar background color
        boxBg: '#F8F8FB', // Box background color
      },
    },
    fontSize: {
      'xsm': '0.7rem',
      'sm': '0.8rem',
      'md': '0.9rem',
      'base': '0.95rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
    }
  },
  plugins: [],
}