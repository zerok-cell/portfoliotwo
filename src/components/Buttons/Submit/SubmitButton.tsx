import {Button, Flex} from "@mantine/core";
import {FC} from "react";
import {SubmitProps} from "@/components/Buttons/Submit/types";
import {IconSend} from "@tabler/icons-react";

const SubmitButton:FC<SubmitProps> = ({insideText, c, ...props}) => (
    <Button  {...props} type='submit' bg={c||'var(--color-blue)'}>
        <Flex justify="center" align="center">
            <IconSend/>
            {insideText}
        </Flex>
    </Button>
)
export default SubmitButton