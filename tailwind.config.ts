import type {Config} from 'tailwindcss'

export default {
  content: [
    './index.html',
    './Void/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      base: ['16px', '1.5'],
      sm: ['14px', '1.5'],
      lg: ['20px', '1.5'],
      xl: ['24px', '1.5'],
    }
  },
  plugins: [
    require('tailwindcss-transition'),
  ],
} satisfies Config
