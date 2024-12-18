'use client'
import WelcomeCenter from "@/components/Welcome/Welcome.center";
import {Center, Flex, Grid} from "@mantine/core";
import LightCircle from "@/components/Lights/LightCircle";
import React, {CSSProperties, Suspense} from "react";
import AboutMe from "@/components/AboutMe/AboutMe";

const WelcomeMain = () => {

    const dashedDiv:CSSProperties={
        width:'100%',
        margin:10,
    }
    return (
        <>
                <Grid gutter={100}   justify="center"  align="center" >
                    <Grid.Col span="auto">
                        <LightCircle w='max'  opc={0.2} anim={{time:4,animate:{opacity:[0.1, 0.2, 0.0, 0.1],
                            }, initial:{opacity:0} }} />
                    </Grid.Col>
                    <Grid.Col span={12}>
                            <WelcomeCenter/>
                    </Grid.Col>
                    <Grid.Col  span={12}>
                        <LightCircle z={2} w="max"  opc={0.2} anim={{animate:{opacity:[0.1,0.080],
                                height:['5rem'],
                            }, initial:{opacity:0} }} />
                            <Center> <AboutMe/> </Center>

                    </Grid.Col>


                </Grid>
        </>


    )
}

export default WelcomeMain