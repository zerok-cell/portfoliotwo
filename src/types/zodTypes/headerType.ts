import { ReactElement } from 'react';
import { z } from 'zod';

export const LinkElement = z.object({
  src: z.string().nonempty(),
  text: z.string().nonempty(),
});

export interface AnchorPropsType {
  data: (z.infer<typeof LinkElement> & { icon: ReactElement })[];
}
