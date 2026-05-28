/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#003D64',
          gold: '#D59F0F',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
};
