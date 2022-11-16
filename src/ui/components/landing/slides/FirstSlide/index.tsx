import React, {
  memo, Dispatch, SetStateAction, FC, useRef, useEffect, useCallback,
} from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { BackgroundVideo } from '../../../athoms/BackgroundVideo';
// eslint-disable-next-line import/no-cycle
import { Section } from '../../Section';
import { applyAnimations } from '../../../../animations/landingPage/reveal';
import { tablet } from '../../../helpers/responsive';
import { triggerCallbackOnEnterInViewport } from '../../../../animations/helpers/triggerOnViewport';

const videoBg = './assets/first_slide_background_video.mp4';

const Title = styled.h1`
  font-size: 50px;

  color: #fff;

  max-width: 100%;

  ${tablet(`
    max-width: 50%;
  `)}
`;

const ContentContainer = styled.div`
  padding: 75px 0 0 0;

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
  const container = useRef(null);

  const headerColorSetter = useCallback(() => {
    setHeaderColor({ color: currentSlideHeaderTextColor });
  }, []);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      applyAnimations();
      triggerCallbackOnEnterInViewport([headerColorSetter], container);
    }, container);

    return () => {
      gsapContext.revert();
    };
  }, [container]);

  return (
    <Section HTMLElementRef={container}>
      <BackgroundVideo src={videoBg} />
      <div className="bg"></div>
      <ContentContainer>
        <Title>
          <p className="gs_reveal gs_reveal_fromLeft gs_duration-2 gs_delay-0.1">
            I make an amazing things!
          </p>
          <p
            style={{ paddingTop: '70px' }}
            className="gs_reveal gs_reveal_fromLeft gs_duration-2 gs_delay-0.5"
          >
            Just look!
          </p>
        </Title>
      </ContentContainer>
    </Section>
  );
});
