const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      colors: {
        NBA: {
          RED: "#c9082a",
          BLUE: "#17408b",
          ATL: "#e13a3e",
          BOS: "#008348",
          CLE: "#860038",
          NOP: "#002b5c",
          CHI: "#ce1141",
          DAL: "#0064b1",
          DEN: "#4d90cd",
          GSW: "#fdb927",
          HOU: "#ce1141",
          LAC: "#ed174c",
          LAL: "#552583",
          MIA: "#98002e",
          MIL: "#00471b",
          MIN: "#005083",
          BKN: "#061922",
          NYK: "#006bb6",
          ORL: "#007dc5",
          IND: "#ffc633",
          PHI: "#ed174c",
          PHX: "#e56020",
          POR: "#061922",
          SAC: "#724c9f",
          SAS: "#061922",
          OKC: "#007dc3",
          TOR: "#000000",
          UTA: "#002b5c",
          MEM: "#7399c6",
          WAS: "#002b5c",
          DET: "#006bb6",
          CHA: "#00788c"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
