'use client';

import { createTheme } from '@mantine/core';
import {chakra} from "~/public/fonts";
import {generateColors} from "@mantine/colors-generator";

export const theme = createTheme({
    fontFamily:chakra.className,

    primaryColor:'gray',

    colors:{
        whiteMy:generateColors('#ffffff'),
        greenPastel:generateColors('#30B089'),
        blueOxide:generateColors('#6567FF')

    },
});
