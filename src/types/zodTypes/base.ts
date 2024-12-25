import { z } from 'zod';

export const SoftGeometricSchema = z.object({
  w: z.string().nonempty().readonly().optional(),
  h: z.string().nonempty().readonly().optional(),
  z: z.string().nonempty().readonly().optional(),
});
export const StrictGeometricSchema = SoftGeometricSchema.extend({
  w: z.string().readonly(),
  h: z.string().readonly(),
  z: z.string().readonly(),
});

export const DecorativeStyle = z.object({
    c:z.string().nonempty().optional(),
    opc:z.string().nonempty().optional(),
    bg:z.string().nonempty().optional(),
})
