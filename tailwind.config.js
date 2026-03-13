/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Tailwind CSS v4 lê cores automaticamente do @theme no CSS
      // Apenas definindo extensões específicas aqui
      fontFamily: {
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
        tangerine: ['Tangerine', 'cursive'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
        'section': ['clamp(1.75rem, 3vw, 2.5rem)', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'subtitle': ['clamp(1.125rem, 2vw, 1.5rem)', {
          lineHeight: '1.4',
          letterSpacing: '-0.005em',
          fontWeight: '600',
        }],
        'body': ['1rem', {
          lineHeight: '1.6',
          letterSpacing: '0.01em',
        }],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
        '7': '7px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
