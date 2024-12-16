'use client'

import {Avatar, Button, Flex, Text, Title} from "@mantine/core";
import {chakra} from "@/public/fonts";
import avatar from '@/public/avatar_zerok.webp'
import Image from 'next/image'
import {IconBrandGithub} from "@tabler/icons-react";

const Github = () =>(
    <Flex gap="md" direction="column">

        <Image width={150} style={{
            borderRadius: "50%",
            border:"3px white solid",
        }} src={avatar} alt="My github avatar"/>
        <Button variant="outline"> <IconBrandGithub/> My github</Button>
    </Flex>
)

const WelcomeCenter = () => {
    return (
        <>

        <Flex bg="black" gap="lg" justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap">
            <Title  c='white' className={`${chakra.className}`} >Welcome to my portfolio</Title>
            <Github/>
        </Flex>
        </>
    )
}

export default WelcomeCenter;