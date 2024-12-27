import { CSSProperties, HTMLAttributes, JSXElementConstructor, ReactElement } from 'react';
import { IconProps } from '@tabler/icons-react';
import { z } from 'zod';
import { DecorativeStyle, SoftGeometricSchema } from '@/types/zodTypes/base.types';

export const PropsStyleChildrenSchema = SoftGeometricSchema.extend({
  scale: z.number().or(z.string()).readonly().default(1).optional(),
  p: z.string().or(z.number()).readonly().default(0).optional(),
  rounded: z.string().or(z.number()).readonly().default(0).optional(),
}).merge(DecorativeStyle);

export type PropsStyleChildren = {
  style?: CSSProperties;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
} & z.infer<typeof PropsStyleChildrenSchema> &
  HTMLAttributes<IconProps>;
