import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { gsap } from 'gsap';

export const Circle = forwardRef(
  ({ size, delay }: { size: string; delay: number }, ref) => {
    const el = useRef<null | HTMLDivElement>(null);

    useImperativeHandle(
      ref,
      () => {
        // return our API
        return {
          moveTo(x: number, y: number) {
            gsap.to(el.current, { x, y, delay });
          },
        };
      },
      [delay],
    );

    return <div style={{ width: size, height: size }} ref={el}></div>;
  },
);
