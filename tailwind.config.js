/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans: ['Barlow', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Barlow', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: 'var(--bg)',
          card: 'var(--bg-card)',
          cardSubtle: 'var(--bg-card-subtle)',
          ink: 'var(--ink)',
          mute: 'var(--mute)',
          line: 'var(--line)',
          lime: 'var(--c-lime)',
          orange: 'var(--c-orange)',
        },
      },
    },
  },
  plugins: [],
};
