'use client'
import "@/public/buttons.scss"
import {Avatar, Button, Flex, Text, Title} from "@mantine/core";
import {chakra} from "@/public/fonts";
import {IconBrandGithub} from "@tabler/icons-react";
import {useAnimate} from "motion/react";
import {useEffect} from "react";
import Image from "next/image";
import avatar from "@/public/avatar_zerok.webp"
import {redirect} from "next/navigation";

const Github = () => {



    return (
        <Flex gap="md" direction="column">

            {/*<Avatar   size="150" src="https://avatars.githubusercontent.com/u/89585170?s=400&u=0cc721cc4706b241d7c6f9a4c015d8d34fb66c19&v=4" style={{*/}
            {/*    border: "3px solid ",*/}
            {/*    borderColor: "grey",*/}
            {/*}}*/}
            {/*alt={"My github avatar"}/>*/}

            <Image src={avatar} width={150} alt="My github avatar"  style={{
                borderRadius:'50%',
                border:"2px solid gray"
            }}/>

            <Button onMouseUp={()=>redirect('https://github.com/zerok-cell')} className="light-button" variant="default"> <IconBrandGithub/> My github</Button>
        </Flex>
    )
}

const WelcomeCenter = () => {
    const [scope, animate]=useAnimate()

    useEffect(() => {
        animate(scope.current,{marginRight:0, opacity:[0.1,0.3,.3,.5,1]},{duration:1})
    }, []);

    return (
        <>

        <Flex  columnGap={{base:0,sm:40}} gap="lg" justify="center"
                    align="center"
                    direction="row"
                    wrap="nowrap">
            <Flex ref={scope} opacity={0} mr={900} direction="column" justify="center">
                <Text >Shakhsinov Murad 💤</Text>
                <Title  w={{base:'min-content', sm:"max-content"}} className={`${chakra.className}`} >Welcome to my portfolio</Title>
            </Flex>
            <Github/>
        </Flex>
        </>
    )
}

export default WelcomeCenter;