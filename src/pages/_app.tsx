import { useState } from 'react';
import '../styles/globals.css';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '../mantine-config/theme';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
      <Notifications />
    </MantineProvider>
  );
}
