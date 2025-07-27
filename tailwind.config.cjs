/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        'pastel-purple': '#B5A8E8',
        'pastel-pink': '#F8A5DE',
        'pastel-blue': '#AECBFF',
        'pastel-bg-light': '#F8F7FF',
        'pastel-text-light': '#3D3B56',
        'pastel-card-bg-light': 'rgba(255, 255, 255, 0.5)',
        'pastel-border-light': 'rgba(194, 186, 222, 0.4)',
        'pastel-shadow-light': 'rgba(120, 107, 179, 0.1)'
      },
      boxShadow: {
        'pastel-light': '0 8px 32px 0 rgba(120, 107, 179, 0.1)'
      },
      backdropBlur: {
        xs: '10px',
        sm: '30px'
      },
      borderRadius: {
        'xl': '1.25rem'
      }
    }
  },
  plugins: [],
}
