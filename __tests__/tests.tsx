import { render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import AboutMe from "@/components/AboutMe/AboutMe";
import Login from "@/components/Login/Login";
import {i} from "framer-motion/m";


it('about me renders', async () => {
    const { asFragment } = render(<Login />, { wrapper: MantineProvider , });
    for (let i=0; i<10; i++) {
        render(<Login />, { wrapper: MantineProvider , })
    }

})

