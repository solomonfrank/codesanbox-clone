import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
        background: "var(--color-background)",
      },
      fontFamily: {
        body: "var(--font-inter), sans-serif",
        heading: "var(--font-cousine), serif",
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        13: "5.2rem",
        14: "5.6rem",
        15: "6rem",
        16: "6.4rem",
      },
      fontSize: {
        xs: "1.05rem",
        sm: "1.4rem",
        md: "1.575rem",
        lg: "1.7rem",
        xl: "2.1rem",
        "2xl": "4.2rem",
        "3xl": "6.3rem",
      },
      keyframes: {
        "icon-stroke": {
          from: {
            "stroke-dashoffset": "0",
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76, 1 )",
          },
          "50%, 99%": {
            "stroke-dashoffset": "400",
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76, 1 )",
          },
          to: {
            "stroke-dashoffset": "400",
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76, 1 )",
          },
        },
        "line-stroke": {
          from: {
            "stroke-dashoffset": "1067",
          },

          to: {
            "stroke-dashoffset": "0",
          },
        },
        circle: {
          from: {
            transform: "scale(0)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        "text-fadeIn": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        "icon-stroke": "icon-stroke 1.5s infinite forwards alternate",
        "line-stroke":
          "line-stroke 5s calc(var(--index) * 0.4s) ease forwards ",

        circle: "circle 0.6s calc(var(--cIndex) * 1s) ease forwards  ",
        "text-fadeIn1": "text-fadeIn 1s 0.8s ease forwards",
        "text-fadeIn2": "text-fadeIn 1s 2.6s ease forwards",
        "text-fadeIn3": "text-fadeIn 1s 2.8s ease forwards",
        "text-fadeIn4": "text-fadeIn 1s 4.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
