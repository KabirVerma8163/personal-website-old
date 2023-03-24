/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 1 0%',
        '3': '3 1 0%',
        '4': '4 1 0%',
        '5': '5 1 0%',
      },
      colors: {
        "lightPink": {
          DEFAULT: "#FFA5E2",
        },
        "lemonYellow": {
          DEFAULT: "#F9F871",
        },
        "discordBlue" : {
          DEFAULT: "#508FF8",
        },
        "diffGreen" : {
          DEFAULT: "#00B6C3",
        },
      },
    },
  },
  plugins: [],
}
