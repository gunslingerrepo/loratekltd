/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        forum: ['Forum', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#000000', 2: '#252525', 3: '#555555', 4: '#888888' },
        line: '#e4e4e4',
        bg: '#f7f7f7',
        blue: { DEFAULT: '#0c2461', mid: '#1a4494', light: '#2563eb', accent: '#60a5fa', pale: '#eff6ff', tag: '#dbeafe' },
        dark: '#07111f',
        green: { neon: '#6dff8a' },
      },
      keyframes: {
        fadeup: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.3' } },
      },
      animation: {
        fadeup: 'fadeup 0.8s ease both',
        fadeup1: 'fadeup 0.8s 0.15s ease both',
        fadeup2: 'fadeup 0.8s 0.25s ease both',
        blink: 'blink 3s infinite',
      },
    },
  },
  plugins: [],
}
