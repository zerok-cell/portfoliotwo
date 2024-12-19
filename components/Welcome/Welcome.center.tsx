'use client'
import "@/public/buttons.scss"
import { Button, Flex, Text, Title} from "@mantine/core";
import {chakra} from "@/public/fonts";
import {

    IconBrandAndroid,
    IconBrandApple,
    IconBrandGithub,
    IconBrandUbuntu,
    IconBrandWindows, IconDeviceUnknown
} from "@tabler/icons-react";
import {useAnimateMini} from "motion/react";
import { useEffect} from "react";
import Image from "next/image";
import avatar from "@/public/avatar_zerok.webp"
import {redirect} from "next/navigation";
import {OS, useOs} from "@mantine/hooks";

const Github = () => {



    return (
        <Flex gap="md" direction="column">
            <Image src={avatar} width={150} alt="My github avatar"  style={{
                borderRadius:'50%',
                border:"3px solid gray",
            }}/>
            <Button bg="var(--color-blue)" onMouseUp={()=>redirect('https://github.com/zerok-cell')} className="light-button" variant="default"> <IconBrandGithub/> My github</Button>
        </Flex>
    )
}

const WelcomeCenter =  () => {
    const [scope, animate]=useAnimateMini()
    const os = useOs()
    const dataOs:Record<OS, React.JSX.Element> = {
        android:<IconBrandAndroid color="#47ff2b"/>,
        linux:<IconBrandUbuntu color="#ff832b"/>,
        windows:<IconBrandWindows color="#2b5cff"/>,
        macos:<IconBrandApple color="white"/>,
        ios:<IconBrandApple color="white"/>,
        undetermined:<IconDeviceUnknown color="#ff2b2b"/>,
    }
    useEffect(() => {
        animate(scope.current,{marginRight:0, opacity:[0.1,0.3,.3,.5,1] ,gap:0},{duration:1})
    }, []);

    return (
        <>

        <Flex opacity={0} ref={scope} columnGap={{base:0,sm:40}} gap={200} justify="center"
                    align="center"
                    direction="row"
                    wrap="nowrap">
            <Flex   gap={5}   direction="column" justify="center">
                <Text >Shakhsinov Murad 💤</Text>
                <Title  w={{base:'min-content', sm:"max-content"}} className={`${chakra.className} gradient`} >Welcome to my portfolio</Title>
                <Flex mr={{base:20,sm:0}}  align="center" gap={5} direction="row">
                    {dataOs[os]}
                    <Text> Hello {os} user </Text>
                </Flex>
            </Flex>
            <Github/>
        </Flex>
        </>
    )
}

export default WelcomeCenter;