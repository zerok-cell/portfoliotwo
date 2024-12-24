import {IconAddressBook, IconStack2, IconStar} from "@tabler/icons-react";
import LinkProps from "@/src/components/Header/types";

const data:LinkProps[] = [
    {src:'#about-me', icon:<IconStar  className="icon"/>, text:"About me"},
    {src:'#my-stack', icon:<IconStack2  className="icon"/>, text:"My stack"},
    {src:'/', icon:<IconAddressBook className="icon"/>, text:"Contact"},

]

export default data