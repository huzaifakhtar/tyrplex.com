import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'conic-gradient-from-[#10B981]': 'conic-gradient(from 225deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10B981 25deg, #EDFAF6 285deg, #FFFFFF 345deg, rgba(16, 185, 129, 0) 360deg)',
      },
      keyframes: {
        'tile-4': {
          '0%': { transform: 'rotate(30deg) scale(1)', opacity: '0' },
          '50%': { transform: 'rotate(30deg) scale(1.25)', opacity: '1' },
          '100%': { transform: 'rotate(30deg) scale(1)', opacity: '0' },
        },
        'tile-5': {
          '0%': { transform: 'rotate(-30deg) scale(1)', opacity: '0' },
          '50%': { transform: 'rotate(-30deg) scale(1.25)', opacity: '1' },
          '100%': { transform: 'rotate(-30deg) scale(1)', opacity: '0' },
        },
        'tile-6': {
          '0%': { transform: 'rotate(60deg) scale(1)', opacity: '0' },
          '50%': { transform: 'rotate(60deg) scale(1.25)', opacity: '1' },
          '100%': { transform: 'rotate(60deg) scale(1)', opacity: '0' },
        },
        'tile-7': {
          '0%': { transform: 'rotate(-60deg) scale(1)', opacity: '0' },
          '50%': { transform: 'rotate(-60deg) scale(1.25)', opacity: '1' },
          '100%': { transform: 'rotate(-60deg) scale(1)', opacity: '0' },
        },
        'tile-8': {
          '0%': { transform: 'scale(1)', opacity: '0' },
          '50%': { transform: 'scale(1.25)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        'line-1': {
          '0%': { transform: 'rotate(45deg) scaleX(1)', opacity: '0' },
          '50%': { transform: 'rotate(45deg) scaleX(1.5)', opacity: '1' },
          '100%': { transform: 'rotate(45deg) scaleX(1)', opacity: '0' },
        },
        'line-2': {
          '0%': { transform: 'rotate(45deg) scaleX(1)', opacity: '0' },
          '50%': { transform: 'rotate(45deg) scaleX(1.5)', opacity: '1' },
          '100%': { transform: 'rotate(45deg) scaleX(1)', opacity: '0' },
        },
        'line-3': {
          '0%': { transform: 'rotate(45deg) scaleX(1)', opacity: '0' },
          '50%': { transform: 'rotate(45deg) scaleX(1.5)', opacity: '1' },
          '100%': { transform: 'rotate(45deg) scaleX(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
