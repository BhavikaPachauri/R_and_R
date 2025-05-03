/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        bgfull: "100% 100%",
      },
      boxShadow: {
        gradient: `2px 4px 3.4px 0px #1d55b0,  
   -2px -2px 3.4px 0px #1d55b0,  
    4px -1px 3.4px 0px #1d55b0,  
   -4px 1px 3.4px 0px #1d55b0`,

        custom: "0px 4px 14px 0px rgba(0, 0, 0, 0.12)",

        doctorcard: "0px 10px 10px 0px #00000024",

        shabtn: "0px 4px 14px 0px #1d55b0",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
