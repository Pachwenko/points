/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        foreground: '#fbf1c7',
        'hard-background': '#1d2021',
        green: '#b8bbb26',
        orange: '#fe8019',
        aqua: '#8ec07c',
        yellow: '#fabd2f',
        'dim-yellow': '#d79921',
        'dim-orange': '#d65d0e',
      },
    },
  },
  plugins: [],
}

