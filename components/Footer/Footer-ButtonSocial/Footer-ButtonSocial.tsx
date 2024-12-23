import {CSSProperties, FC} from "react";
import {Button, CopyButton} from "@mantine/core";
import {redirect} from "next/navigation";
import SocialLinks from "@/components/Footer/types";

const FooterButtonSocial:FC<SocialLinks> = ({hintText,displayText,linkText, action,copiedTextDisplay })=>{
    const style:CSSProperties = {
        width:"max-content"
    }
    const colorButton = "var(--color-blue)"


    return (
        action === 'copy' ? (
            <CopyButton  value={linkText}>
                {({copied,copy})=>(
                    <Button bg={colorButton} style={style} title={hintText} onMouseUp={copy}>
                        {copied ? copiedTextDisplay : displayText }
                    </Button>
                )}
            </CopyButton>
        ): <Button  bg={colorButton} title={hintText} onMouseUp={()=>redirect(linkText as string)}>
            {displayText}
        </Button>
    )

}


export default FooterButtonSocial;