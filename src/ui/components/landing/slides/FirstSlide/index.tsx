/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo,
  Dispatch,
  SetStateAction,
  FC,
  useRef,
  useEffect,
  useCallback,
  Ref,
  useState,
  ForwardRefExoticComponent,
} from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { Bounce } from 'gsap/all';
import { Background } from '../../../athoms/Background';
// eslint-disable-next-line import/no-cycle
import { Section } from '../../Section';
import { applyAnimations } from '../../../../animations/landingPage/reveal';
import { tablet } from '../../../helpers/responsive';
import { triggerCallbackOnEnterInViewport } from '../../../../animations/helpers/triggerOnViewport';
import { Image } from '../../../molecules/Image';
import Visible from '../../../helpers/mediaVisible';

const videoBg = './assets/first_slide_background_video.mp4';
const puzatiyIhorImage = './images/puzatiy_ihor.jpg';
const pizzaInsideBelly = './images/pizza_carton_image.png';

const Title = styled.h1`
  font-size: 50px;

  color: #fff;

  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200%;
  transform: translateY(calc(-50% / 2));

  border-radius: 15px;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  padding: 75px 0 0 0;

  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;

  ${tablet(`
    grid-gap: 70px;
  `)};

  max-width: 100%;

  ${tablet(`
    padding: 150px 0 0 0;
  `)}
`;

interface Props {
  setHeaderColor: Dispatch<
  SetStateAction<{
    color: string;
  }>
  >;
}

const currentSlideHeaderTextColor = '#fff';

export const FirstSlide: FC<Props> = memo(({ setHeaderColor }) => {
  const container = useRef<null | HTMLElement>(null);

  const headerColorSetter = useCallback(() => {
    setHeaderColor({ color: currentSlideHeaderTextColor });
  }, []);

  const customImageParallax = useCallback((tween: gsap.core.Tween) => {
    gsap.fromTo(
      '.p-content',
      {
        yPercent: -50,
        opacity: 1,
      },
      {
        yPercent: 50,
        ease: 'none',
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        onReverseComplete: () => {
          gsap.to('.pizza-inside-belly', {
            opacity: 1,
            duration: 1,
          }).then(() => tween.play());
        },
        onStart: () => {
          gsap.to('.pizza-inside-belly', {
            opacity: 0,
            duration: 1,
          }).then(() => tween.pause());
        },
      },
    );
  }, [container]);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      applyAnimations();
      triggerCallbackOnEnterInViewport([headerColorSetter], container);
      const tween = gsap.fromTo(
        '.pizza-inside-belly',
        {
          scale: 1,
        },
        {
          scale: 1.5,
          duration: 1,
          ease: 'circ.in',
          repeat: -1,
          yoyo: true,
        },
      );

      customImageParallax(tween);
    }, container);

    return () => {
      gsapContext.revert();
    };
  }, [container]);

  return (
    <Section HTMLElementRef={container}>
      <Background isVideo src={videoBg} />
      <ContentContainer>
        <Title>
          <p className="gs_reveal gs_reveal_fromLeft gs_duration-2">
            I make an amazing things!
          </p>
          <p
            style={{ paddingTop: '70px' }}
            className="gs_reveal gs_reveal_fromLeft gs_duration-2"
          >
            Just look!
          </p>
        </Title>
        <ImageContainer>
          <Image
            src={puzatiyIhorImage}
            imgStyle={{ borderRadius: '15px', top: '50%' }}
            className="p-content"
          >
            <img
              className="pizza-inside-belly"
              src={pizzaInsideBelly}
              style={{
                maxHeight: '80px',
                width: '70px',
                height: 'auto',
                position: 'absolute',
                bottom: '100px',
                left: 'calc(50% - 35px)',
              }}
              alt="pizza inside belly"
            />
          </Image>
        </ImageContainer>
      </ContentContainer>
    </Section>
  );
});
