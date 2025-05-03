/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  safelist: ['theme-uswds'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // defined below with semantic colors
        // primary: {},
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        link: {
          DEFAULT: 'var(--link)',
          visited: 'var(--link-visited)',
          hover: 'var(--link-hover)',
          active: 'var(--link-active)',
        },

        // semantic colors
        base: {
          100: 'var(--color-base-100)', // #f7f6f7
          200: 'var(--color-base-200)', // #f0f0f0
          300: 'var(--color-base-300)', // #9b9d9f
          400: 'var(--color-base-400)', // #6b6b6b
          500: 'var(--color-base-500)', // #565c65
          600: 'var(--color-base-600)', // #3d4551
          700: 'var(--color-base-700)', // #1b1b1b
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          100: 'var(--color-primary-100)', // #eff6fb
          200: 'var(--color-primary-200)', // #d9e8f6
          300: 'var(--color-primary-300)', // #24a1ff
          400: 'var(--color-primary-400)', // #005ea2
          500: 'var(--color-primary-500)', // #1a4480
          600: 'var(--color-primary-600)', // #162e51
          700: 'var(--color-primary-700)', // #252f3e
        },
        success: {
          100: 'var(--color-success-100)', // #ecf3ec
          200: 'var(--color-success-200)', // #dbebde
          300: 'var(--color-success-300)', // #70e17b
          400: 'var(--color-success-400)', // #00a91c
          500: 'var(--color-success-500)', // #008817
          600: 'var(--color-success-600)', // #216e1f
          700: 'var(--color-success-700)', // #154c21
        },
        danger: {
          100: 'var(--color-danger-100)', // #f8eff1
          200: 'var(--color-danger-200)', // #ffd7d7
          300: 'var(--color-danger-300)', // #f2938c
          400: 'var(--color-danger-400)', // #d83933
          500: 'var(--color-danger-500)', // #b50909
          600: 'var(--color-danger-600)', // #8b0a03
          700: 'var(--color-danger-700)', // #4f1c24
        },
        warning: {
          100: 'var(--color-warning-100)', // #faf3d1
          200: 'var(--color-warning-200)', // #fee685
          300: 'var(--color-warning-300)', // #ffbe2e
          400: 'var(--color-warning-400)', // #e5a000
          500: 'var(--color-warning-500)', // #c2850c
          600: 'var(--color-warning-600)', // #936f38
          700: 'var(--color-warning-700)', // #7a591a
        },
        info: {
          100: 'var(--color-info-100)', // #e7f6f8
          200: 'var(--color-info-200)', // #def7ff
          300: 'var(--color-info-300)', // #99deea
          400: 'var(--color-info-400)', // #00bde3
          500: 'var(--color-info-500)', // #009ec1
          600: 'var(--color-info-600)', // #0081a1
          700: 'var(--color-info-700)', // #00687d
        },
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 0.125rem)',
        sm: 'calc(var(--radius) - 0.25rem)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
