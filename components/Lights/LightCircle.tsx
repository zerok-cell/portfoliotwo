"use client"
import './light.scss'
import {CSSProperties} from "react";
import {motion, Transition} from "motion/react";

import {LightCircleProps} from "@/types/types";



const LightCircle = ({w,h,c,opc,blur,z, anim}:LightCircleProps) => {



    const style:CSSProperties = {
        width:w==='max'? '100%': w ||'100px',
        height:h||'100px',
        userSelect:"none",
        opacity: opc || 0.5,
        background:c||"#fff",
        filter:blur ? `blur(${blur}px)` : `blur(100px)`,
        zIndex:z || -1,
    }

    const transition:Transition = {
        duration: anim?.time ? anim.time : 2

    }
    return (
        <motion.div animate={anim?.animate}
                    transition={transition}
                    initial={anim?.initial} style={style} />
    )
}

export default LightCircle