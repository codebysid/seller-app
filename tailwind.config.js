/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        textColor: "rgba(var(--text-color))",
        green: "rgba(var(--green))",
        red: "rgba(var(--red))",
        layoutBg: "var(--layout-bg)",
        borderColor: "rgba(var(--border))",
        yellow: "rgba(var(--yellow))",
        orange: "rgba(var(--orange))",
        blue: "rgba(var(--blue))",
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
    },
  },
  plugins: [],
};
