import {ReactElement, ReactNode} from "react";

interface LinkProps {
    src:string,
    icon:ReactElement,
    text:string,
}


export interface AnchorProps {
    data:LinkProps[]
}
export default LinkProps