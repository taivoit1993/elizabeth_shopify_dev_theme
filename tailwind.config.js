/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/*.liquid',
    './snippets/*.liquid',
    './sections/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /.+/,
    },
  ],
}

