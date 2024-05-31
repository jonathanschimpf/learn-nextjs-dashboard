import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          custom: '#d7d7d7', // APPROXIMATELY rgb(215, 215, 215)
        },
        blue: {
          400: '#71717a',
          500: '#52525b',
          600: '#3f3f46',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
