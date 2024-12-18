import {Target, TargetAndTransition} from "motion/react";
import {CSSProperties, LegacyRef} from "react";

export interface AnimationPropsCustom{
    initial:Target,
    animate:TargetAndTransition
    time?:number,
}
type width = 'max'|string|number

export interface LightCircleProps {
    w?:width,
    h?:string|number,
    readonly c?:string,
    opc?:string|number,
    blur?:string,
    z?:number,
    anim?:AnimationPropsCustom | undefined
    styles?:CSSProperties
    ref?:LegacyRef<HTMLDivElement>

}

