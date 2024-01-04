/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'hard-background': '#1d2021',
        foreground: '#fbf1c7',
        green: '#b8bbb26',
        orange: '#fe8019',
        blue: '#83a598',
        aqua: '#8ec07c',
        yellow: '#fabd2f',
        'dim-yellow': '#d79921',
        'dim-orange': '#d65d0e',
        'dim-aqua': '#699d6a',
        'dim-blue': '#458588',
      },
    },
  },
  plugins: [],
}

