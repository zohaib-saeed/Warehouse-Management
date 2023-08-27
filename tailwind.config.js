/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',

    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['var(--notosans-font)'],
      },
      colors: {
        primary: '#7e22ce',
        orange: '#FF4F00',
        gray: {
          dark: '#A9A9A9',
          storm: '#6D767E',
          iron: '#D0D5DD',
          amour: '#EAECF0',
          mist: '#667085',
          timber: '#1D2939',
          santa: '#98A2B3',
          davy: '#505255',
          pickeld: '#344054',
          fantasy: '#F2F4F7',
          bright: '#344054',
          snow: '#F9FAFB',
        },
        venus: '#838C9A',
        zues: '#242424',
        black: '#000000',
        onyx: '#161616',
        white: '#fff',
        snow: '#f8f9fa',
      },
      screens: {
        xs: '480px',
        mds: '568px',
        sm: '640px',
        md: '768px',
        mdl: '920px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
