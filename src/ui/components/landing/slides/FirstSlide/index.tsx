/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo, Dispatch, SetStateAction, FC, useRef, useLayoutEffect, useEffect,
} from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { BackgroundVideo } from '../../../athoms/BackgroundVideo';
// eslint-disable-next-line import/no-cycle
import { Section } from '../../Section';
import { applyAnimations } from '../../../../animations/landingPage/reveal';
import { tablet } from '../../../helpers/responsive';

const videoBg = './assets/first_slide_background_video.mp4';

interface Props {
  setHeaderColor: Dispatch<
  SetStateAction<{
    color: string;
  }>
  >;
}

const Title = styled.h1`
  font-size: 50px;

  color: #fff;

  max-width: 100%;

  ${tablet(`
    max-width: 50%;
  `)}
`;

const ContantContainer = styled.div`
  padding: 75px 0 0 0;

  ${tablet(`
    padding: 150px 0 0 0;
  `)}
`;

export const FirstSlide: FC<Props> = memo(() => {
  const container = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      applyAnimations();
    }, container);

    return () => {
      gsapContext.revert();
    };
  }, [container]);

  return (
    <Section HTMLElementRef={container}>
      <BackgroundVideo src={videoBg} />

      <ContantContainer>
        <Title className="gs_reveal gs_reveal_fromLeft gs_duration-2 gs_delay-0.5">
          <p>We make an amazing thing!</p>
          <p>Just look!</p>
        </Title>
      </ContantContainer>
    </Section>
  );
});
