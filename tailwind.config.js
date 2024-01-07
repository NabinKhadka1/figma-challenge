/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'active-button': '#FFD540',
        'normal-button': '#EBECF5'
      }
    },
  },
  plugins: [],
}

