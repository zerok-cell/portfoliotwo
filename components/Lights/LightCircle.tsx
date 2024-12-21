"use client"
import {CSSProperties, FC, memo} from "react";
import {LazyMotion, domAnimation, motion} from "motion/react";
import {LightCircleProps} from "@/types/types";
import {useViewportSize} from "@mantine/hooks";



const LightCircle:FC<LightCircleProps> = memo(({w,h,c,opc,blur,z,...props}) => {
    const {width} = useViewportSize();

    const style:CSSProperties = {
        width:w==='max'? '100%': w ||'100px',
        height:h||'100px',
        userSelect:"none",
        opacity: opc || 0.5,
        background:c||"white",
        filter:blur ? `blur(${blur}px)` : width <= 576 ? "blur(50px)":`blur(100px)`,
        zIndex:z || -1,

    }


    return (
        <LazyMotion features={domAnimation}>
            <motion.div style={style}  {...props} />
        </LazyMotion>
    )
})

export default LightCircle