import React, {
  memo, Dispatch, SetStateAction, FC, useRef, useLayoutEffect,
} from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// eslint-disable-next-line import/no-cycle
import { Section } from '../../Section';

const image1 = './images/1.jpg';

interface Props {
  setHeaderColor: Dispatch<
  SetStateAction<{
    color: string;
  }>
  >;
}

export const SecondSlide: FC<Props> = memo(() => {
  const container = useRef<HTMLElement| null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const gsapContext = gsap.context(() => {

    }, container);

    gsap.fromTo(
      '.appear-left',
      { opacity: 0, y: -300 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
        },
      },
    );

    gsap.to('.orange p', {
      scrollTrigger: '.orange',
      duration: 2,
      rotation: 360,
    });

    return () => {
      gsapContext.revert();
    };
  }, [container]);

  return (
    <Section HTMLElementRef={container} backgroundImage={image1}>
      <p className="appear-left paralaxEffect" style={{ color: '#fff' }}>
        FirstSlide
      </p>
      <p className="appear-left paralaxEffect" style={{ color: '#fff' }}>
        12321312
      </p>
      <p className="appear-left paralaxEffect" style={{ color: '#fff' }}>
        gfdhjbjskfbdjas
      </p>
    </Section>
  );
});
