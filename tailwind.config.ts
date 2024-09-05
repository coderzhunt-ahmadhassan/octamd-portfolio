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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        appointmentForm: '0px 0px 30px 0px rgba(2, 29, 53, 0.08)'
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
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
