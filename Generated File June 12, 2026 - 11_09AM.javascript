/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff', 100: '#dbeafe', 600: '#2563eb', 700: '#1d4ed8', 900: '#1e3a8a',
        },
      },
      borderRadius: {
        'pcwyse': '32px',
      },
    },
  },
  plugins: [],
}