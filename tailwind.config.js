/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violette': {
          '50': '#ebecff',
          '100': '#daddff',
          '200': '#bdbfff',
          '300': '#9595ff',
          '400': '#7b6cff',
          '500': '#6a4aff',
          '600': '#612aff',
          '700': '#551ee4',
          '800': '#451bb8',
          '900': '#3a1f90',
          '950': '#1d0f44',
        },
      }
    },
  },
  plugins: [],
}

