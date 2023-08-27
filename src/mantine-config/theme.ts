import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  breakpoints: {
    xs: '30em',
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em',
  },
  colors: {
    primary: ['#337357'],
    secondary: ['#e84414'],
    error: ['#D92D20'],
    success: ['#12B76A'],
    blue: ['#0B1031', '#444862', '#5A7AF9', '#475467', '#4965CA'],
    gray: [
      '#D0D5DD',
      '#6D767E',
      '#EAECF0',
      '#667085',
      '#1D2939',
      '#98A2B3',
      '#505255',
      '#344054',
      '#F2F4F7',
    ],
    orange: ['#F7D07A'],
    white: ['#FFFFFF'],
    transparent: ['#00000000'],
  },
};
