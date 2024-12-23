'use client';
import {domAnimation, LazyMotion} from "motion/react"
import * as m from 'motion/react-m'
import {memo} from "react";
import './about-me.scss'
import AboutMeLanguageCard from "@/components/AboutMe/AboutMe-Text/AboutMe-LanguageCard";
import data from "@/components/AboutMe/AboutMe-Text/data";

 const AboutMe =  () => {



     return (
         <LazyMotion  features={domAnimation}>
             <m.div id="about-me"  data-testid="about-me" animate={{opacity:1}} transition={{duration:1}} className="about-me_noisy">
                 <AboutMeLanguageCard data={data}/>
             </m.div>

         </LazyMotion>
     )

 }
export default AboutMe