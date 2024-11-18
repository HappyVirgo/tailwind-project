module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: {
          300: '#395F65',
          400: '#2C4B51',
        },
        secondary: {
          200: '#96FDE7'
        },
        natural: {
          10: '#FAFAFA',
          20: '#F4F5F5',
          30: '#E9ECEC',
          40: '#D8DFDF',
          50: '#C9D4D4',
          100: '#839697',
          400: '#4E696A',
          500: '#425F61',
          800: '#193C3E',
          900: '#152C2E'
        },
        text: {
          info: '#2F545D',
          positive: '#3C4B29',
          negative: '#643A3A',
          warning: '#55471B',
          hightlight: "#E4F4EB"
        },
        fill: {
          info: '#BAD8DE',
          positive: '#C6D6A9',
          negative: '#E6BCBC',
          warning: '#EDDCA1',
          light: '#BFD9CA'
        },
        surface: {
          info: '#E3EFF3',
          positive: '#E7EED9',
          negative: '#F6EAEA',
          warning: '#F8F2DE',
        }
      },
    },
  },
  plugins: [],
}
