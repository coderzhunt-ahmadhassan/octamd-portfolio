import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px'
    },
    extend: {
      backgroundImage: {
        'cta-gradient':
          'linear-gradient(90deg, #000D44 0%, rgba(0, 13, 68, 0.60) 27.37%, rgba(0, 13, 68, 0.41) 40.28%, rgba(0, 13, 68, 0.00) 55.47%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-subtitle-gradient':
          'linear-gradient(90deg, #04CE7855 0%, rgba(4, 206, 120, 0.00) 100%);',
        'green-radial-border':
          'radial-gradient(50% 50% at 50% 50%, #04CE78 56.77%, rgba(4, 206, 120, 0.00) 100%)',
        'blue-radial-border':
          'radial-gradient(50% 50% at 50% 50%, #1F5FFF 56.77%, rgba(31, 95, 255, 0.00) 100%)'
      },
      boxShadow: {
        appointmentForm: '0px 0px 30px 0px rgba(2, 29, 53, 0.08)',
        blogCard: '0px 10px 30px 0px rgba(0, 0, 0, 0.04)',
        headerShadow: '0px 10px 20px 0px rgba(2, 29, 53, 0.06)',
        cardShadow: '0px 6px 30px 0px rgba(0, 0, 0, 0.06)',
        buttonShadow: '0px 2px 4px 0px rgba(2, 29, 53, 0.10)'
      },
      borderColor: {
        outline: '#D8DDE1'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        themePrimary: '#04CE78',
        themeSecondary: '#1F5FFF',
        themeTertiary: '#01BDB2',
        titleColor: '#000D44',
        bodyColor: '#788094',
        smokeColor1: '#F6FBFF',
        smokeColor2: '#F5F8FD',
        lightBluishGray: '#F5F8FD',
        lightBrownishYellow: '#F6F1EB'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      fontFamily: {
        dm_sans: ['var(--font-dm_sans)'],
        outfit: ['var(--font-outfit)'],
        urbanist: ['var(--font-urbanist)']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
