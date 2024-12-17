'use client'

import {useAnimate} from "motion/react"
import {Flex, Grid} from "@mantine/core";
import Link from "next/link";
import {useEffect} from "react";
import './header.scss'
import Image from "next/image"
import {IconStack2, IconStar,IconAddressBook} from "@tabler/icons-react";
import logotype from "@/public/logotype.svg"

const Header = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate(scope.current,{width:'100%'})
        animate('*',{opacity:'100%'})
    })

    const data = [
        {src:'/', icon:<IconStar className="icon"/>, text:"About me"},
        {src:'/', icon:<IconStack2 className="icon"/>, text:"My stack"},
        {src:'/', icon:<IconAddressBook className="icon"/>, text:"Contact"},

    ]
    return (
                <Grid columns={12} id="header" ref={scope}  justify="start" align="center">
                    <Grid.Col  visibleFrom={'sm'}  span="content"  >
                        <Image  style={{height:"4rem", marginLeft:20}} width={40} src={logotype} alt="logotype"/>
                    </Grid.Col>

                    <Grid.Col span={{sm:11,base:12}}>
                        <Flex gap={40} h={{
                            sm:'4rem'
                        }} color="white" justify="center" align='center'  >
                            {data.map((item,index) => (
                                <Flex key={index}>
                                    {item.icon}
                                    <Link href={item.src}>{item.text}</Link>
                                </Flex>
                            ))}
                        </Flex>
                    </Grid.Col>
                </Grid>
    )
}

export default Header