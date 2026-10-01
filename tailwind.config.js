/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        surface: {
          DEFAULT: 'var(--bg-surface)',
          elevated: 'var(--bg-surface-elevated)',
          translucent: 'var(--bg-surface-translucent)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          medium: 'var(--border-medium)',
          focus: 'var(--border-focus)',
        },
        ink: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        accent: {
          gold: 'var(--accent-gold)',
          terracotta: 'var(--accent-terracotta)',
          glow: 'var(--accent-glow)',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Intel One Mono"', 'monospace'],
        urdu: ['"Noto Nastaliq Urdu"', 'Amiri', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 2.8s linear infinite',
      }
    },
  },
  plugins: [],
}
