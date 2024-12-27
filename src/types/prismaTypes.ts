import { Prisma } from '@prisma/client';
import { z } from 'zod';

export type BlogType = Prisma.BlogScalarFieldEnum;
export type BlogTypeObj = Prisma.BlogSelectScalar;


export const BlogInputSchema = z.object({
    id:z.number().readonly(),
    content:z.string().nonempty().readonly(),
    title:z.string().nonempty().readonly(),
}).passthrough()

export type BlogInputType = z.infer<typeof BlogInputSchema>


