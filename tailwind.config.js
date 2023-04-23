/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black:        '#000000',
        white:        '#FFFFFF',
        grau: {
          100:    '#181314',
          200:    '#282324',
          300:    '#403739',
          400:    '#5B4F52',
          500:    '#74666A',
          600:    '#8C8285',
          700:    '#A49E9F',
          800:    '#BDBABB',
          900:    '#D7D7D7',
          950:    '#E7E7E7',
          990:    '#F7F7E4',  
        },
        coral: {
          300:   '#642537',
          400:   '#9B2F50',
          500:   '#BF4459',
          600:   '#DC5F64',
          700:   '#F47D72',
          800:   '#FDA387',
          900:   '#FFCCA6',
          950:   '#FBE4C1',
        },

        seaform: {
          300: '#1E4450',
          400: '#2E616E',
          500: '#3E7C88',
          600: '#569997',
          700: '#6FB7A6',
          800: '#89D6B5',
          900: '#C3E4C6',
          950: '#E1EDD8',  
        },

        azure: {
          300:   '#2E376B',
          400:   '#305799',
          500:   '#3277C4',
          600:   '#4896CF',
          700:   '#5EB7D6',
          800:   '#74D8DE',
          900:   '#B8E4E4',
          950:   '#CFF1F0',
        }
      },
      fontFamily: {
        RHMono: ["Red Hat Mono", "monospace"],
        RHDisplay: ["Red Hat Display", "sans-serif"],
        RHText: ["Red Hat Text", "sans-serif"],
       },
    },
  },
  plugins: [],
}