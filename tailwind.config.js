const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.light-gray'),
              textDecoration: 'underline',
            },
          },
        },
      }),
      colors: {
        'primary-dark': '#1a2940',
        'secondary-dark': '#0f172a',
        'accent-red': '#e63946',
        'accent-gray': '#374151',
        'light-gray': '#d1d5db',
        'border-dark': '#2d3748',
        'white': '#ffffff'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
