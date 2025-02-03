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
      colors: {
        background: {
          white: "#FFFFFF;",
          gray: "#F8F8F8;",
        },
        accent: {
          orange: "#FF8B43;",
          darkorange: "#FE724C",
          yellow: "#fff5cc",
          brown: "#A2845E",
          green: "#244937;",
        },
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [require("tailwindcss-animate")],
};
