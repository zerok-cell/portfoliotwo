'use client'
import WelcomeCenter from "@/components/Welcome/Welcome-Center/Welcome-Center";
import {Center, Grid} from "@mantine/core";
import LightCircle from "@/components/Lights/LightCircle";
import AboutMe from "@/components/AboutMe/AboutMe";
import { memo} from "react";


const Welcome = memo(() => {


    return (
        <>
            <Grid gutter={100}    justify="center"  align="center" >
                <Grid.Col span="auto">
                    <LightCircle w='max' opc={0.2} animate={{opacity:[0.1, 0.2, 0.0, 0.1],
                    }} initial={{opacity:0}} transition={{duration:2}}    />
                </Grid.Col>
                <Grid.Col span={12}>
                    <WelcomeCenter/>
                </Grid.Col>
                <Grid.Col  span={12}>

                    <Center> <AboutMe/> </Center>

                </Grid.Col>


            </Grid>
        </>


    )
})

export default Welcome