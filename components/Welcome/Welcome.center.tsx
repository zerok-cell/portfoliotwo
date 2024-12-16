'use client'

import {Avatar, Button, Flex,Title} from "@mantine/core";
import {chakra} from "@/public/fonts";
import {IconBrandGithub} from "@tabler/icons-react";

const Github = () => {

    return (
        <Flex gap="md" direction="column">

            <Avatar   size="150" src="https://avatars.githubusercontent.com/u/89585170?v=4" style={{
                border: "3px solid",
                borderColor: "grey",
            }}/>
            {/*<Image width={150} style={{*/}
            {/*    borderRadius: "50%",*/}
            {/*    border: "3px #D0D5DB solid",*/}
            {/*}} src={avatar} alt="My github avatar"/>*/}
            <Button c="gray" variant="default"> <IconBrandGithub/> My github</Button>
        </Flex>
    )
}

const WelcomeCenter = () => {
    return (
        <>

        <Flex  gap="lg" justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap">
            <Title  className={`${chakra.className}`} >Welcome to my portfolio</Title>
            <Github/>
        </Flex>
        </>
    )
}

export default WelcomeCenter;