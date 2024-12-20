import { render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import AboutMe from "@/components/AboutMe/AboutMe";


it('about me renders', async () => {
    const { asFragment } = render(<AboutMe />, { wrapper: MantineProvider , });
    const ii = screen.getByTestId('light-block')
    expect(ii).toHaveStyle({
        width:'80%'
    })
    expect(asFragment()).toMatchSnapshot()

})

