import {ColorSchemeScript, mantineHtmlProps, MantineProvider} from "@mantine/core";
import {chakra} from "~/public/fonts";
import {theme} from "~/theme";
import React from "react";
import('@/styles/global.scss').then()

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