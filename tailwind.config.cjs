/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.400'),
            '--tw-prose-bold': theme('colors.gray.300'),
          },
        },
      }),
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideBottom: 'slideBottom 0.4s linear both',
        slideLeft: 'slideLeft 0.6s linear both',
        slideRight: 'slideRight 0.6s 0.2s linear both',
        trackingIn: 'trackingIn 0.6s linear both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideBottom: {
          '0%': { transform: 'translateY(-100px)' },
          '70%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(1000px)' },
          '70%': { transform: 'translateX(-50px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-1000px)' },
          '70%': { transform: 'translateX(50px)' },
          '100%': { transform: 'translateX(0)' },
        },
        trackingIn: {
          '0%': { letterSpacing: '0.6em', opacity: 0 },
          '40%': { opacity: 0.6 },
          '100%': { letterSpacing: 'normal', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
