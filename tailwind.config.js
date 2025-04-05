/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInBottomToTop: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeInTopToBottom: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        moveLeftToRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        fadeInBottomToTop: "fadeInBottomToTop 2s ease-in-out",
        fadeInTopToBottom: "fadeInTopToBottom 2s ease-in-out",
        moveLeftToRight: "moveLeftToRight 10s linear infinite",
        scroll: "scroll 10s linear infinite",
      },
      colors: {
        primary: "#5A47FB",
        secondary: "#FF9800",
        accent: "#00C4B4",
        background: "#F5F5F5",
        text: "#333333",
      },
    },
  },
  plugins: [],
}
