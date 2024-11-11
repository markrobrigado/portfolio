/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"Helvetica"', "sans-serif"],
    },
    extend: {
      textColor: {
        "transparent-fill": "transparent",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "loop-scroll-reverse": "loop-scroll-reverse 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        "loop-scroll-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent",
          "-webkit-text-stroke": "6px gray",
        },
      });
    },
  ],
};
