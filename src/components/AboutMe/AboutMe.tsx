'use client';
import {domAnimation, LazyMotion} from "motion/react"
import * as m from 'motion/react-m'
import {memo} from "react";
import {Flex,  Space, Text} from "@mantine/core";
import {IconComet, IconHeart, IconStack2, IconUserUp} from "@tabler/icons-react";
import ChildrenStyles from "@/components/utils/ChildrenStyles";

 const AboutMe =  memo(() => {
     const data = [
         {
             icon:<IconComet/>,
             text:"Hi! My name is Murad, I am 17 years old, and I am a Fullstack developer with a great interest in modern technologies and the creation of functional web applications."
         },
         {
             icon:<IconStack2/>,
             text:"My stack includes React, Python, Next.js, TypeScript, and JavaScript. These tools allow me to create user-friendly, productive and aesthetic solutions for users."
         },
         {
             icon:<IconHeart/>,
             text:"I like to solve complex tasks, design application architecture and implement new technologies to achieve maximum results."
         },
         {
             icon:<IconUserUp/>,
             text:"I always strive for professional growth and am open to interesting projects and cooperation. If you have any ideas or tasks that you want to implement, I will be glad to help!"
         }
     ]



     return (
         <LazyMotion  features={domAnimation}>
             <m.div id="about-me "   style={{
                 width: '80%',
                 borderRadius: '5px',
                 border: "2px solid gray",
                 padding:5,
                 opacity: 0,
                 background:'#090909'
             }} animate={{opacity:1}} transition={{duration:1}} className="light-block noisy">
                 {data.map((item, index) => (
                     <Flex wrap="nowrap"  style={{borderRadius: 5}} p={5} key={index}
                           direction={{base: "column", xs: "row", sm: 'row'}} align={{base: 'center', sm: "center"}}

                     >
                         <ChildrenStyles  c="gray" p={5} rounded={5}>
                             {item.icon}
                         </ChildrenStyles>
                         <Space w={{base: '0', md: '20px', sm: "20px"}}/>
                         <Text c="gray">
                             {item.text}

                         </Text>

                     </Flex>

                 ))}
             </m.div>

         </LazyMotion>
     )

 })
export default AboutMe