/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F2E9",
        charcoal: "#111111",
        gold: "#C6A864",
        deepgreen: "#1B4332",
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
      },
      borderRadius: {
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
};
