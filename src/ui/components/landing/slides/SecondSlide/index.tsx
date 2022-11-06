import React, {
  memo, Dispatch, SetStateAction, FC, useRef, useLayoutEffect,
} from 'react';
import { gsap } from 'gsap';
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
  const container = useRef(null);

  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
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
    }, container);

    return () => {
      gsapContext.revert();
    };
  }, [container]);

  return (
    <Section ref={container} backgroundImage={image1}>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '70px',
          fontWeight: 700,
        }}
      >
        <div className="appear-left" style={{ color: '#fff' }}>
          FirstSlide
        </div>
        <div className="appear-left" style={{ color: '#fff' }}>
          12321312
        </div>
        <div className="appear-left" style={{ color: '#fff' }}>
          gfdhjbjskfbdjas
        </div>
      </div>
    </Section>
  );
});
