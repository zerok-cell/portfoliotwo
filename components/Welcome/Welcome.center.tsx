'use client'
import "@/public/buttons.scss"
import {Avatar, Button, Flex, Text, Title} from "@mantine/core";
import {chakra} from "@/public/fonts";
import {IconBrandGithub} from "@tabler/icons-react";

const Github = () => {

    return (
        <Flex gap="md" direction="column">

            <Avatar   size="150" src="https://avatars.githubusercontent.com/u/89585170?v=4" style={{
                border: "3px solid grey",
                borderColor: "grey",
            }}/>
            {/*<Image width={150} style={{*/}
            {/*    borderRadius: "50%",*/}
            {/*    border: "3px #D0D5DB solid",*/}
            {/*}} src={avatar} alt="My github avatar"/>*/}
            <Button className="light-button" bg="black"   variant="default"> <IconBrandGithub/> My github</Button>
        </Flex>
    )
}

const WelcomeCenter = () => {
    return (
        <>

        <Flex gap="lg" justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap">
            <Flex direction="column" justify={"center"}>
                <Text>Shakhsinov Murad 💤</Text>
                <Title className={`${chakra.className}`} >Welcome to my portfolio</Title>
            </Flex>
            <Github/>
        </Flex>
        </>
    )
}

export default WelcomeCenter;