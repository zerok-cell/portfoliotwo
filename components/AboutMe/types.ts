import {Icon, IconProps} from "@tabler/icons-react";
import * as react from "react";

interface DataProps {
    icon:react.ForwardRefExoticComponent<IconProps & react.RefAttributes<Icon>>,
    text:string,
}

export default DataProps;