import {Button, Flex} from "@mantine/core";
import {FC} from "react";
import {SubmitProps, SubmitPropsSchema} from "@/types/zodTypes/buttonSubmit";
import {IconSend} from "@tabler/icons-react";

const SubmitButton:FC<SubmitProps> = ({insideText,  ...props}) => {

    console.log(insideText)
    const validateProps = SubmitPropsSchema.parse({insideText})

    return (
        <Button  {...props} type='submit' bg={props.c || 'var(--color-blue)'}>
            <Flex justify="center" align="center">
                <IconSend/>
                {validateProps.insideText}
            </Flex>
        </Button>

    )
}
export default SubmitButton