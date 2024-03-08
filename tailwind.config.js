/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        '"Inter var", sans-serif',
      ],
    },
    plugins: [
      require('@tailwindcss/forms'),
      withMT
    ],
  }
}
