'use client'
import WelcomeCenter from "@/components/Welcome/Welcome.center";
import {Grid} from "@mantine/core";
import LightCircle from "@/components/Lights/LightCircle";


const WelcomeMain = () => {


    return (
        <>
                <Grid bg="#000" justify="center"  align="center" >
                    <Grid.Col span={6}>
                        <LightCircle w={300}  opc={0.2} anim={{time:4,animate:{opacity:[0.1, 0.2, 0.0, 0.2],

                            width:['1rem', '10rem','50rem','30rem','70rem','50rem']}, initial:{opacity:0} }} />
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <WelcomeCenter/>
                    </Grid.Col>
                    <Grid.Col  span={12}>
                        <LightCircle w={600}  opc={0.2} anim={{animate:{opacity:[0.1, 0.2, 0.0, 0.2].reverse(),
                            width:['10rem','20rem','10rem' ,"50rem","30rem" ,'100rem'],
                            }, initial:{opacity:0} }} />
                    </Grid.Col>
                </Grid>
        </>


    )
}

export default WelcomeMain