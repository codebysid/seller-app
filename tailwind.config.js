/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "white-60": "rgba(255, 255, 255, 0.6)",
      "white-20": "rgba(255, 255, 255, 0.2)",
      "white-16": "rgba(255, 255, 255, 0.16)",
      "white-8": "rgba(255, 255, 255, 0.08%)",
      yellow: "rgba(255, 215, 75)",
      orange: "rgba(255, 158, 43)",
      "light-red": "rgba(253, 213, 218)",
      "dark-red": "rgba(255, 94, 117)",
      "light-green": "rgba(184, 233, 212)",
      "dark-green": "rgba(44, 196, 131)",
      black: "rgba(0, 0, 0)",
      "black-60": "rgba(0, 0, 0, 0.6)",
      "black-16": "rgba(0, 0, 0, 0.16)",
      blue: "rgba(105, 111, 251)",
      "blue-60": "rgba(105, 111, 251, 0.6)",
      "blue-32": "rgba(105, 111, 251, 0.32)",
      "blue-20": "rgba(105, 111, 251, 0.2)",
      "blue-12": "rgba(105, 111, 251, 0.12)",
      "blue-8": "rgba(105, 111, 251, 0.8)",
      "black-4": "rgba(105, 111, 251, 0.04)",
    },
    fontSize: {
      "head-xl": ["34px", { fontWeight: 700 }],
      "head-l": ["26px", { fontWeight: 700 }],
      "head-s": ["18px", { fontWeight: 700 }],
      "body-text": ["14px", { fontWeight: 400 }],
      "body-text-bold": ["14px", { fontWeight: 700 }],
      "sbody-text": ["11px", { fontWeight: 400 }],
      "sbody-text-bold": ["12px", { fontWeight: 700 }],
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
