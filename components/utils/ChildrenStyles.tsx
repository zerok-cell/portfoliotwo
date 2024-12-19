import {cloneElement, CSSProperties, ReactElement, ReactNode} from "react";

interface PropsRezie{
    children: ReactElement;
    w?: CSSProperties['width'];
    h?: CSSProperties['height']
    style?: CSSProperties;
    scale?: CSSProperties['scale'];
    bg?:CSSProperties['backgroundColor'];
    p?:CSSProperties['padding'];
    rounded?:CSSProperties['borderRadius'];
    c?:CSSProperties['color'];
}
type ChildrenStylesType = (props:PropsRezie)=>ReactNode

const ChildrenStyles: ChildrenStylesType  = ({children, w,h,scale,style,bg,p,rounded,c}:PropsRezie) => {
    const styleFromChildren:CSSProperties = {
        width: w||"auto",
        height: h|| 'auto',
        backgroundColor:bg||'transparent',
        scale:scale|| 1,
        borderRadius:rounded||0,
        padding:p||0,
        color:c||'initial',
        ...style
    }


    const styledChild =  cloneElement(children,{
        style:{
            ...styleFromChildren
        }
    })
    return (
        <div style={{
            width:'max-content',
            height:'max-content'
        }}>
            {styledChild}
        </div>
    )



}
export default ChildrenStyles