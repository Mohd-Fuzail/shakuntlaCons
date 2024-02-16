// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{html,js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#00040f",
//         secondary: "#00f6ff",
//         dimWhite: "rgba(255, 255, 255, 0.7)",
//         dimBlue: "rgba(9, 151, 124, 0.1)",
//       },
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//     },
//     screens: {
//       xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1060px",
//       lg: "1200px",
//       xl: "1700px",
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{html,js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#00040f",
//         secondary: "#00f6ff",
//         dimWhite: "rgba(255, 255, 255, 0.7)",
//         dimBlue: "rgba(9, 151, 124, 0.1)",
//       },
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//       animation: {
//         'infinite-scroll': 'infinite-scroll 25s linear infinite',
//       },
//       keyframes: {
//         'infinite-scroll': {
//           from: { transform: 'translateX(0)' },
//           to: { transform: 'translateX(-100%)' },
//         }
//       }                    
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
