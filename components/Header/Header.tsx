'use client'

import {useAnimate} from "motion/react"
import {Flex} from "@mantine/core";
import Link from "next/link";
import {useEffect} from "react";
import './header.scss'
import {IconStack2, IconStar,IconAddressBook} from "@tabler/icons-react";

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
        <Flex gap={40} justify="center" color="white"  align="center" id="header" ref={scope}>
            {data.map((item,index) => (
                <Flex key={index}>
                    {item.icon}
                    <Link href={item.src}>{item.text}</Link>
                </Flex>
            ))}
        </Flex>
    )
}

export default Header