/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rr-red": "#ff0044",
        "rr-black": "#000000",
      },
      backgroundImage: {
        "rr-gradient": "linear-gradient(135deg,#ff0044 0%, #000000 100%)",
      },
    },
  },
  plugins: [],
};
