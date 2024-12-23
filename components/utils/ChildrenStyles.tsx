import {cloneElement, CSSProperties, HTMLAttributes, memo, ReactElement, ReactNode} from "react";
import {IconProps} from "@tabler/icons-react";

interface PropsRezie extends HTMLAttributes<IconProps>{
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

const ChildrenStyles: ChildrenStylesType  = memo(
    ({children, w,h,scale,style,bg,p,rounded,c,...iconProps}:PropsRezie) => {
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

            },
                ...iconProps
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
)
export default ChildrenStyles