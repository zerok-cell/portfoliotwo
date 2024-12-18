import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import {chakra} from "@/public/fonts";
export const metadata = {
  title: 'Zerok',
  description: 'My Portfolio',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps} style={{background:"black"}} suppressHydrationWarning>
      <head>
          <ColorSchemeScript />

        <link rel="shortcut icon" href='../public/logotype.svg' />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={`${chakra.className}`}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
