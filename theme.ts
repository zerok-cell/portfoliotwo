'use client';

import { createTheme } from '@mantine/core';
import {chakra} from "@/public/fonts";
import {generateColors} from "@mantine/colors-generator";

export const theme = createTheme({
    fontFamily:chakra.className,

    primaryColor:'gray',

    colors:{
        white:generateColors('#ffffff'),
        green:generateColors('#30B089'),

    },
});
