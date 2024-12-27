import {ButtonProps, PolymorphicComponentProps} from "@mantine/core";
import {z} from 'zod'


export const SubmitPropsSchema = z.object({
        insideText: z.string().nonempty(),
    }
)

export type SubmitProps = z.infer<typeof SubmitPropsSchema>
    & PolymorphicComponentProps<'button', ButtonProps>

