'use client';

import { CSSProperties, FC, memo } from 'react';
import { domAnimation, LazyMotion, motion } from 'motion/react';
import { useViewportSize } from '@mantine/hooks';
import { LightCircleProps, LightCircleSchema } from '@/types/zodTypes/light.types';

const LightCircle: FC<LightCircleProps> = memo(
  ({ w = 'max', h = 100, c = 'white', opc = 0.5, blur = '0.5', z = -1, ...props }) => {
    const { width } = useViewportSize();
    LightCircleSchema.parse({ w, h, c, opc, blur, z });
    const style: CSSProperties = {
      width: w === 'max' ? '100%' : w || 100,
      height: h,
      userSelect: 'none',
      opacity: opc || 0.5,
      background: c || 'white',
      filter: blur ? `blur(${blur}px)` : width <= 576 ? 'blur(50px)' : `blur(100px)`,
      zIndex: z || -1,
    };

    return (
      <LazyMotion features={domAnimation}>
        <motion.div style={style} {...props} />
      </LazyMotion>
    );
  }
);

export default LightCircle;
