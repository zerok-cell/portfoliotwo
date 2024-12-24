import {ButtonProps, PolymorphicComponentProps} from "@mantine/core";

export interface SubmitProps extends  PolymorphicComponentProps<'button', ButtonProps>{
    c?: string;
    insideText:string

}

