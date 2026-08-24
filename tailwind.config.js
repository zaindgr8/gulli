/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F4E8',
          200: '#F0E5C9',
          300: '#E5D2A4',
          400: '#D8BC79',
          500: '#C5A85C',
          600: '#B08F42',
          700: '#8C6F2F',
          800: '#685021',
          900: '#483616',
        },
        champagne: {
          light: '#F5E6D3',
          DEFAULT: '#E3C8A8',
          dark: '#B89B72',
        },
        obsidian: {
          800: '#18181B',
          850: '#131316',
          900: '#0E0E11',
          950: '#070709',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'serif'],
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFBA73 0%, #C5A85C 50%, #9E7D38 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(223, 186, 115, 0.15) 0%, rgba(197, 168, 92, 0.05) 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(24, 24, 27, 0.7) 0%, rgba(14, 14, 17, 0.85) 100%)',
      },
    },
  },
  plugins: [],
};
