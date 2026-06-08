/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          light: '#22c55e',
          dark: '#15803d',
          xdark: '#166534',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f0fdf4',
          muted: '#dcfce7',
        },
      },
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}