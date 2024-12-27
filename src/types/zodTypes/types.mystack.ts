import {z} from 'zod'


export const ImagesTextDatSchema = z.object({
  text: z.string().nonempty().readonly().optional(),
  description: z.string().nonempty().readonly().optional(),
  alt: z.string().nonempty().readonly().optional(),
})

export type ImagesTextDataType<T> = {
  imageIcon: T | string ;
} & z.infer<typeof ImagesTextDatSchema>

