 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCharcoal: "#000000",
        sapphireSurge: "#0770FD",
        neonBloom: "#FD34FF",
        crystalAqua: "#1FEDFB",
        graphite: "#222222",
        grey: "#627186",
        accentWhite: "#FFFFFF",
      },
      fontFamily: {
        alenia: ['"New Alenia Bold"', 'sans-serif'],
        biennale: ['"Biennale"', 'sans-serif'],
      },
      backgroundImage: {
        'elvanex-gradient': 'linear-gradient(90deg, #0770FD 0%, #FD34FF 50%, #1FEDFB 100%)',
      },
      boxShadow: {
        elvanex: '0 4px 14px rgba(7, 112, 253, 0.25)',
      },
    },
  },
  plugins: [],
};
 