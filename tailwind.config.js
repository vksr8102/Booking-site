/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green:{
        50 : "rgb(240 253 244)",
        100 : "rgb(220 252 231)",
        200: "rgb(187 247 208)",
        300: "rgb(134 239 172)",
        400: "rgb(74 222 128)",
        500: "rgb(34 197 94)",
        1000:"#40E501"
      },
      white: {
        5 : "#fff",
        10 : "#F8F8F8"
      },
      black:{ 
        0:"#F8F8F8",
        5:"#383A47",
        10:"#717171",
        50:"#9A9A9A",
        100:"#172121",
        1000:"#000"
      },
      transparent: "#ffffff00",
      richblue : {
        5:"#002257",
        10:"#0A225F",
        15:"#14274A",
      }

    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      gradientColorStops: {
        'grad1': '35.42%, rgba(253, 255, 252, 0.80) 50.52%, rgba(253, 255, 252, 0.60) 65.11%, rgba(253, 255, 252, 0.40) 78.13%, transparent 100%',
      },
      backgroundImage: {
        'host':"url('/img/Header Background.svg')",
        'home' : "url('/img/Rectangle 3.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      flex: {
        '2': '2 2 0%',
        '4':'4 4 0%'
      }

    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}
