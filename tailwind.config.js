/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
      },
      // animation: {
      //   "animate-ping": "ping 10s cubic-bezier(0, 0, 0.2, 1) infinite",
      // },

    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'purple': '#3f3cbb',
    //   'midnight': '#121063',
    //   'metal': '#565584',
    //   'tahiti': '#3ab7bf',
    //   'silver': '#ecebff',
    //   'bubble-gum': '#ff77e9',
    //   'bermuda': '#78dcca',
    // },
  },
  plugins: [],
};
