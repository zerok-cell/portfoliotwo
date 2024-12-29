import { z } from 'zod';

const xAndYOsi = ['start', 'center','end'] as const;




export const FormPropsSchema = z.object({
  children: z.any(),
  tt: z.string().nonempty().readonly().optional(),
  dr: z.enum(['row', 'column']).default('column').optional(),
  js: z.enum(xAndYOsi).readonly().default('center').optional(),
  al: z.enum(xAndYOsi).readonly().default('center').optional(),
  onSubmit:z.function().returns(z.void()),
  prv:z.boolean().default(true).optional(),
});

export type FormPropsType = z.infer<typeof FormPropsSchema>;
