/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#f8f7f6',
        'deep-maroon': '#540a0f',
        'muted-brown': '#897567',
        'light-warm-gray': '#ccc4be',
        'golden-beige': '#b6966e',
        'dark-brownish-black': '#331314',
        'wine-brown': '#5b3637',
        'pale-cream': '#e5e0dd',
        'dusty-taupe': '#a89996',
        'true-white': '#fdfdfd',
        'charcoal-espresso': '#221511',
        'medium-mocha': '#6f5b58',
        // Aliases for easier use
        primary: '#540a0f',
        secondary: '#b6966e',
        dark: '#221511',
        light: '#f8f7f6',
        // Keep old names for compatibility during transition
        crimson: {
          DEFAULT: '#540a0f',
          dark: '#331314',
          light: '#5b3637',
        },
        'rich-black': '#221511',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
