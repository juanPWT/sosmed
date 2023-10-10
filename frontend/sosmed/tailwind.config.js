/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-25deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 400ms ease-in-out",
      },
    },
  },
  plugins: [require("daisyui"), require("@headlessui/tailwindcss")],
};
