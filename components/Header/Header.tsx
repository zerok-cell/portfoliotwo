'use client'

import {Flex, Grid} from "@mantine/core";
import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image"
import {useAnimate} from "motion/react";
import {IconStack2, IconStar,IconAddressBook} from "@tabler/icons-react";
import logotype from "@/public/logotype.svg"
import ChildrenStyles from "@/components/utils/ChildrenStyles";
import { useViewportSize} from "@mantine/hooks";
import table from "@/components/adaptiveTable";


const Header = () => {
    const [scope, animate] = useAnimate()
    const [cssLoad, setCssLoad] = useState(false)
    const {width} = useViewportSize();
    useEffect(() => {
        import('./header.scss').then(()=> {
            setCssLoad(true)
            cssLoad && animate(scope.current,{borderWidth:'1px'})
            cssLoad && animate('*',{opacity:'100%'},{duration:1,})
        })

    })

    const data = [
        {src:'#about-me', icon:<IconStar  className="icon"/>, text:"About me"},
        {src:'#my-stack', icon:<IconStack2  className="icon"/>, text:"My stack"},
        {src:'/', icon:<IconAddressBook className="icon"/>, text:"Contact"},

    ]
    return (

        cssLoad && (
            <Grid  bg="rgba(255,255,255,0)" columns={12} id="header" className={'noisy'} ref={scope} justify="start" align="center">
                <Grid.Col visibleFrom="sm" span="content">
                    <Image style={{height: "4rem", marginLeft: 20, }} width={40} src={logotype} alt="logotype"/>


                </Grid.Col>

                <Grid.Col span={{sm: 10, base: 11, md: 11}}>
                    <Flex gap={40} h={{
                        base: '4rem'

                    }} color="white" ml="5%" justify="center" align='center'>
                        {data.map((item, index) => (
                            <Flex gap={5} key={index}>
                                {width > table.xs && (
                                    <ChildrenStyles c="gray">
                                        {item.icon}
                                    </ChildrenStyles>
                                )}
                                <Link style={{fontWeight: "500", textAlign: 'center'}} className="archer-link"
                                      href={item.src}>{item.text}</Link>
                            </Flex>
                        ))}
                    </Flex>
                </Grid.Col>
            </Grid>
        )
    )
}

export default Header