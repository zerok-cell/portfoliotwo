import {ReactNode} from "react";

interface SocialLinks {
    hintText:string
    linkText:string
    action: 'copy'|'redirect'
    copiedTextDisplay?:string
    displayText:string|ReactNode

}
export default SocialLinks;