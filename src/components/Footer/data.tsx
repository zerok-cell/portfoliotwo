import SocialLinks from "@/src/components/Footer/types";
import {IconBrandTelegram, IconMail, IconPhone} from "@tabler/icons-react";
import {Text} from "@mantine/core"

const data:SocialLinks[] = [
    {
        displayText:<IconBrandTelegram/>,
        linkText:'https://t.me/zerokcell',
        hintText:'Go to my telegram @zerokcell',
        action:'redirect'
    },
    {
        displayText:<><IconPhone/> <Text> My number </Text></>,
        linkText:'+7 915 661 8387',
        hintText:"Phone number",
        action:'copy',
        copiedTextDisplay:'Phone number copy'

    },
    {
        displayText:<IconMail/>,
        linkText:"swiftkey382@gmail.com",
        hintText:'My gmail',
        action:'copy',
        copiedTextDisplay:'Mail copy'
    }
]
export default data