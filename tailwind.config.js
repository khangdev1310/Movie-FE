/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: '#6c5ce7',
        'purple-hover': '#8d65ea',
        dark: '#12181B',
        'dark-hovered': '#1b2428',
        'purple-900': '#210035',
        'purple-700': '#5D0096',
        'pink-500': '#AD26FF',
        'yellow-500': '#e2d51a',
      },
      gridTemplateColumns: {
        'fill-small': 'repeat(auto-fill, minmax(150px, 1fr))',
        'fill-medium': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
      boxShadow: {
        md: '6px 6px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3)',
      },
    },
  },
  important: true,
  plugins: [require('@tailwindcss/line-clamp')],
};
