import {
    MotionProps,
} from "motion/react";
import {ClassAttributes, HTMLAttributes, PropsWithoutRef, RefAttributes} from "react";




type width = 'max'|string|number

type motionType = PropsWithoutRef<ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & MotionProps> & RefAttributes<HTMLDivElement>

export interface LightCircleProps extends motionType {
    w?:width,
    h?:string|number,
    readonly c?:string,
    opc?:string|number,
    blur?:string,
    z?:number,

}

