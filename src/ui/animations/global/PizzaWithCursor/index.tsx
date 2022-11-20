/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-restricted-globals */

import React, {
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  memo,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const _Circle = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 0;
  left: 0;
  opacity: 0.3;

  background-color: green;

  border-radius: 50%;

  z-index: 999;

  pointer-events: none;
`;

const Circle = forwardRef(
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

    return <_Circle style={{ width: `${size}px`, height: `${size}px` }} ref={el}></_Circle>;
  },
);

export const PizzaWithCursor: FC<{}> = memo(() => {
  const forwardCircles = useRef<Array<Ref<HTMLElement>>>([]);
  const [circles, setCircles] = useState<
  Array<
  ForwardRefExoticComponent<
  {
    size: string;
    delay: number;
  } & React.RefAttributes<unknown>
  >
  >
  >([]);

  const addRef = useCallback(
    (ref: Ref<HTMLElement>) => {
      if (ref) {
        forwardCircles.current.push(ref);
      }
    },
    [forwardCircles],
  );

  const createCircles = useCallback(() => {
    for (let i = 0; i < 3; i += 1) {
      setCircles((prev) => [
        ...prev,
        (
          <Circle
            size={`${(i + 1) * 30}`}
            delay={i / 10}
            ref={addRef}
            key={`e${i}`}
          />
        ) as unknown as ForwardRefExoticComponent<
        {
          size: string;
          delay: number;
        } & React.RefAttributes<unknown>
        >,
      ]);
    }
  }, [circles, setCircles]);

  const removeCircles = useCallback(() => {
    setCircles([]);
  }, [setCircles, circles]);

  useEffect(() => {
    createCircles();

    return () => {
      removeCircles();
    };
  }, []);

  useEffect(() => {
    forwardCircles.current.forEach((ref) => (ref as any).moveTo(innerWidth / 2, innerHeight / 2));

    const onMove = ({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }) => {
      forwardCircles.current.forEach((ref) => (ref as any).moveTo(clientX, clientY));
    };

    window.addEventListener('pointermove', onMove);

    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return <>{circles.map((circle) => circle)}</>;
});
