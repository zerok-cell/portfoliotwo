"use client"
import {CSSProperties} from "react";
import {Transition, LazyMotion, domAnimation} from "motion/react";
import * as m from "motion/react-m"
import {LightCircleProps} from "@/types/types";
import {useViewportSize} from "@mantine/hooks";



const LightCircle = ({w,h,c,opc,blur,z, anim, styles,ref}:LightCircleProps) => {
    const {width} = useViewportSize();







    const style:CSSProperties = {
        width:w==='max'? '100%': w ||'100px',
        height:h||'100px',
        userSelect:"none",
        opacity: opc || 0.5,
        background:c||"white",
        filter:blur ? `blur(${blur}px)` : width <= 576 ? "blur(50px)":`blur(100px)`,
        zIndex:z || -1,
        ...styles
    }

    const transition:Transition = {
        duration: Array.isArray(anim) ? null: anim?.time ? anim.time : 2

    }
    return (
        <LazyMotion features={domAnimation}>
            <m.div ref={ref}

                   animate={anim?.animate}
                   transition={transition}
                   initial={anim?.initial} style={style}/>
        </LazyMotion>
    )
}

export default LightCircle