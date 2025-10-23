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
        alenia: ['"New Alenia Bold"', "Inter", "sans-serif"],
        biennale: ['"Biennale"', "Inter", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ['"Biennale"', "Inter", "sans-serif"], // default
    },

    backgroundImage: {
      "elvanex-gradient": "linear-gradient(120deg, #0770FD 0%, #FD34FF 50%, #1FEDFB 100%)",
    },
    boxShadow: {
      elvanex: "0 2px 10px rgba(7, 112, 253, 0.25)",
      card: "0 2px 8px rgba(7, 112, 253, 0.25)",
       
    },
  },
  plugins: [],
};
