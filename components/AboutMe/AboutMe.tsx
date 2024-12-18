'use client'
import {motion, useAnimate} from "motion/react"
import {useEffect} from "react";
import {Paper} from "@mantine/core";

 const AboutMe =  () => {
    const [scope,animate]= useAnimate()

     useEffect(() => {

        animate(scope.current, {width:'80%'}, {duration:1})
     }, []);


    return (
        <motion.div  ref={scope} style={{
            position:"absolute",
            width:'100%',
            borderRadius:'5px',
            border:"1px solid gray",
        }}>
            <Paper className="light-button" w={'fit-content'} p={20}>
                <p>Hi! My name is Murad, and I am a full—stack developer with experience in working with React, Django
                    and
                    Next.js.During the time In my career, I have managed to gather a wide range of skills and knowledge
                    that allow me
                    to develop complex and effective,web,applications.

                </p>
            </Paper>
        </motion.div>
    )

 }
export default AboutMe