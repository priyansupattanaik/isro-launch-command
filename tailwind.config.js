/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#0b0c15", // Deep space black
          900: "#1a1b26", // Panel background
          800: "#2f334d", // Panel border
        },
        brand: {
          400: "#38bdf8", // Cyan/Hologram glow
          500: "#0ea5e9",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #2f334d 1px, transparent 1px), linear-gradient(to bottom, #2f334d 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
