"use client"
import './light.scss'
import {CSSProperties} from "react";
import {motion, Target, TargetAndTransition, Transition} from "motion/react";


interface AnimationProps{
    initial:Target,
    animate:TargetAndTransition
    time?:number,
}

interface LightCircleProps {
    w?:string|number,
    h?:string|number,
    c?:string,
    opc?:string|number,
    blur?:string,
    z?:number
    anim?:AnimationProps | undefined

}




const LightCircle = ({w,h,c,opc,blur,z, anim}:LightCircleProps) => {



    const style:CSSProperties = {
        width:w||'100px',
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