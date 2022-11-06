import React, {
  memo, Dispatch, SetStateAction, FC, useRef, useLayoutEffect,
} from 'react';
import { gsap } from 'gsap';
import { BackgroundVideo } from '../../../athoms/BackgroundVideo';
import { Section } from '../../Section';

const videoBg = './assets/first_slide_background_video.mp4';

interface Props {
  setHeaderColor: Dispatch<
  SetStateAction<{
    color: string;
  }>
  >;
}

export const FirstSlide: FC<Props> = memo(() => {
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
            start: 'bottom bottom',
          },
          onEnter: () => {
            // eslint-disable-next-line no-console
            console.log('entered');
          },
        },
      );
    }, container);

    return () => {
      gsapContext.revert();
    };
  }, [container]);

  return (
    <Section ref={container} style={{ position: 'relative' }}>
      <BackgroundVideo src={videoBg} />
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
