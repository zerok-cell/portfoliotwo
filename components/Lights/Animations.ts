import {AnimationPropsCustom} from "@/types/light_types";


export const opacityBugs:AnimationPropsCustom = {
    initial:{
        opacity:0,

    },animate:{
        opacity:[.1,.2,.3,.1],
    },time:2

}

export const resizeWidth:AnimationPropsCustom = {
    initial:{},
    animate:{height:[100,200,100,300,100]}
}

export const concatStyles:(val:AnimationPropsCustom[])=>AnimationPropsCustom = (styles:AnimationPropsCustom[]) => {
    const stylesResult:AnimationPropsCustom = {initial:{},animate:{}}

    styles.map(item => {
        const initialKeys = Object.keys(item.initial);
        const animateKeys = Object.keys(item.animate);

        initialKeys.map(inkey => {
            // @ts-ignore
            (stylesResult.initial as { [key: string]: any })[inkey] = item.initial[inkey];
        });
        animateKeys.map(ankey => {
            // @ts-ignore
            (stylesResult.animate as { [key: string]: any })[ankey] = item.animate[ankey] ;
        });
    });
    return stylesResult

}