/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      height: {
        'screen-1/2': '50vh',
        'screen-1/3': '33.333333vh',
        'screen-2/3': '66.666667vh',
        'screen-1/4': '25vh',
        'screen-5/6': '83.333333vh'
      },
      width: {
        'screen-1/2': '50vw',
        'screen-1/3': '33.333333vw',
        'screen-2/3': '66.666667vw',
        'screen-1/4': '25vw',
        'screen-5/6': '83.333333vw'
      },
      colors: {
        custom_black: '#1d2536',
        custom_black_sidebar: '#0c121f',
        custom_green: '#69b7c3'
      }
    }
  },
  plugins: []
}
