import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import {chakra} from "@/public/fonts";
// import "./global.scss"
export const metadata = {
  title: 'Shakhsinov Murad',
  description: 'Shakhsinov Murad Portfolio. See about me',
    keywords:["Shakhsinov Murad","Шахсинов Мурад","Мурад", "Шахсинов","Программист",'Shakhsinov Murad portfolio','Шахсинов Мурад портфолио'],
    viewport: "minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"

};
import('../styles/global.scss').then()

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps} style={{background:"black"}} >
      <head>
          <ColorSchemeScript />

        <link rel="shortcut icon" href='../public/logotype.svg' />

      </head>
      <body className={`${chakra.className}`}>
        <MantineProvider defaultColorScheme="dark" theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
