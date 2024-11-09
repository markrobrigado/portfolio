/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"Helvetica"', "sans-serif"],
      mono: ['"Consolas"', "monospace"],
    },
    extend: {
      animation: {
        typing:
          "typing 1s steps(6) forwards, cursor 0.5s step-end infinite alternate",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        cursor: {
          "50%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
