import { MutableRefObject } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const callCallbacks = (callbacks: Array<() => void>) => callbacks.forEach((callback) => callback());

export const triggerCallbackOnEnterInViewport = (
  callbacks: Array<() => void>,
  ref: MutableRefObject<null | HTMLElement>,
) => {
  const tryCheck = () => {
    const isInViewport = ScrollTrigger.isInViewport(ref.current as Element, 0.5);

    if (isInViewport) {
      callCallbacks(callbacks);
    }
  };

  ScrollTrigger.create({ onUpdate: tryCheck });
};
