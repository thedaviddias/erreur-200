module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#1a2940ff',
      'primaryDark': '#172130',
      'secondary': '#b12518ff',
      'tertiary': theme('colors.yellow.500')
     }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#1a2940ff',
      'secondary': '#b12518ff',
      'tertiary': theme('colors.yellow.500'),
      'twitter': '#1DA1F2'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#1a2940ff',
      'secondary': '#b12518ff',
      'tertiary': theme('colors.yellow.500')
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


/* SCSS HEX */
// $international-orange-engineering: #b12518ff;
// $oxford-blue: #1a2940ff;
// $pacific-blue: #47a8bdff;
// $corn: #f5e663ff;
// $rajah: #ffad69ff;


// divide-yellow-500
