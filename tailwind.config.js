/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        dyslexia: ["OpenDyslexic", "Arial", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        4: "4px",
      },
      boxShadow: {
        "hero-btn": "0px 6.25px 20px 0px #00000020",
      },
      borderRadius: {
        "t-lg": "16px 16px 0px 0px",
      },
      spacing: {
        13: "3.125rem",
        5.5: "1.125rem",
        18: "4.375rem",
      },
      colors: {
        background: {
          white: "#FFFFFF;",
          gray: "#F8F8F8;",
          navy: "#0B0F14",
          navygrey: "#141B22",
        },
        accent: {
          orange: "#FF8B43;",
          darkorange: "#FE724C",
          yellow: "#fff5cc",
          brown: "#A2845E",
          green: "#244937;",
        },
        text: {
          whitish: "#E6E6E6",
          blackish: "#141B22",
          greyish: "#999999",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "contrast-high",
    "grayscale",
    "dyslexia-font",
    "text-sm",
    "text-base",
    "text-lg",
  ],
};
