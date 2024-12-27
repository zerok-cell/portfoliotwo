import { cloneElement, CSSProperties, FC, memo } from 'react';
import { PropsStyleChildren, PropsStyleChildrenSchema } from '@/types/zodTypes/childrenStyle.types';

const ChildrenStyles: FC<PropsStyleChildren> = memo(
  ({ children, w, h, scale, style, bg, p, rounded, c, ...iconProps }) => {
    PropsStyleChildrenSchema.parse({ w, h, scale, bg, p, rounded, c });

    const styleFromChildren: CSSProperties = {
      width: w || 'auto',
      height: h || 'auto',
      backgroundColor: bg || 'transparent',
      scale: scale || 1,
      borderRadius: rounded || 0,
      padding: p || 0,
      color: c || 'initial',
      ...style,
    };

    const styledChild = cloneElement(children, {
      style: {
        ...styleFromChildren,
      },
      ...iconProps,
    });
    return (
      <div
        style={{
          width: 'max-content',
          height: 'max-content',
        }}
      >
        {styledChild}
      </div>
    );
  }
);
export default ChildrenStyles;
