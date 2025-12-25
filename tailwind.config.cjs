module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    // include the original HTML so Tailwind keeps classes used there
    '../Books - James Clear.html',
    // also scan any files in the exported HTML assets folder
    '../Books - James Clear_files/**/*.*'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-dark': '#B8860B',
        'site-black': '#070707',
        // Bookish Linen theme
        'linen-bg': '#F8F3E9',
        ink: '#2B2B20',
        maroon: '#7A2E2E',
        'warm-gold': '#C8A85A'
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}
