import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      blue: '#1c2895',
      red: '#e74865',
      yellow: '#cde894',
      aqua: '#16d1dd',
      green: {
        100: '#ccf6e5',
        500: '#54ef9b',
      }
    },
    fontFamily: {
      'dorsa': ['Dorsa', 'sans-serif'],
      'dm-sans': ["'DM Sans'", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

