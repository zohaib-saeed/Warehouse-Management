/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#337357',
        secondary: '#e84414',
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
        blue: {
          midnight: '#0B1031',
          riverbed: '#444862',
          cornflower: '#5A7AF9',
          vampire: '#475467',
          warm: '#4965CA',
          fuchsia: '#7B56BD',
        },
        black: {
          main: '#000000',
          mirage: '#101828',
        },
        white: {
          main: '#fff',
          zircon: '#F5F7F9',
          ghost: '#F8F9FE',
        },
        venus: '#838C9A',
        zues: '#242424',
        onyx: '#161616',
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
