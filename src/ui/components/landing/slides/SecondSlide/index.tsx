/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo, Dispatch, SetStateAction, FC, useRef, useEffect, useCallback,
} from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { Section } from '../../Section';
import { applyAnimations } from '../../../../animations/landingPage/reveal';
import { Background } from '../../../athoms/Background';
import { tablet } from '../../../helpers/responsive';
import { triggerCallbackOnEnterInViewport } from '../../../../animations/helpers/triggerOnViewport';
import { Image } from '../../../molecules/Image';

const backgroundImage = './images/2.jpg';

interface Props {
  setHeaderColor: Dispatch<
  SetStateAction<{
    color: string;
  }>
  >;
}

const Title = styled.h1`
  font-size: 50px;

  color: #000;

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

const ImageContainer = styled.div`
  width: 100%;
  height: 200%;
  transform: translateY(calc(-50% / 2));

  border-radius: 15px;
  overflow: hidden;
`;
const puzatiyIhorImage = './images/puzatiy_ihor.jpg';

const currentSlideHeaderTextColor = '#000';

export const SecondSlide: FC<Props> = memo(({ setHeaderColor }) => {
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
      <Background src={backgroundImage} />
      <ContentContainer>
        <Title className="gs_reveal gs_duration-2">Why we?</Title>
        <Title>
          <p className="gs_reveal gs_duration-2">
            We make an amazing thing!
          </p>
          <p
            style={{ paddingTop: '70px' }}
            className="gs_reveal gs_duration-2"
          >
            Just look!
          </p>
        </Title>
      </ContentContainer>
    </Section>
  );
});
