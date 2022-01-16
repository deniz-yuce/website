module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: [["Libre Baskerville"]],
      },
      colors: {
        primary: "#9350B9",
        secondary: {
          100: "#E5DBE6",
          200: "#CDB5D6",
        },
        card: "#FAF7FA",
        text: "#655C70",
      },
    },
    height: {
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "h-56": "14rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
