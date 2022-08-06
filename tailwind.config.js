/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#6c5ce7',
        'purple-hover': '#8d65ea',
        dark: '#12181B',
        'dark-hovered': '#1b2428',
      },
      gridTemplateColumns: {
        'fill-small': 'repeat(auto-fill, minmax(150px, 1fr))',
        'fill-medium': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
