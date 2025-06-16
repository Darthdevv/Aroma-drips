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
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
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
          white: "var(--background-white, #FFFFFF)",
          gray: "var(--background-gray, #F8F8F8)",
          navy: "var(--background-navy, #0B0F14)",
          navygrey: "var(--background-navygrey, #141B22)",
        },
        accent: {
          orange: "var(--accent-orange, #FF8B43)",
          darkorange: "var(--accent-darkorange, #FE724C)",
          yellow: "var(--accent-yellow, #fff5cc)",
          brown: "var(--accent-brown, #A2845E)",
          green: "var(--accent-green, #244937)",
        },
        text: {
          whitish: "var(--text-whitish, #E6E6E6)",
          blackish: "var(--text-blackish, #141B22)",
          greyish: "var(--text-greyish, #999999)",
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
    "reduced-motion",
    "no-flash",
    "safe-colors",
    "no-animations",
    "seizure-safe",
    "keyboard-navigation",
    "keyboard-focusable",
    "screen-reader-optimized",
    "sr-only"
  ],
};