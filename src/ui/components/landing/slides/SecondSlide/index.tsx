/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo, Dispatch, SetStateAction, FC, useRef, useEffect, useCallback,
} from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
// eslint-disable-next-line import/no-cycle
import { Section } from '../../Section';
import { applyAnimations } from '../../../../animations/landingPage/reveal';
import { tablet } from '../../../helpers/responsive';
import { triggerCallbackOnEnterInViewport } from '../../../../animations/helpers/triggerOnViewport';

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

const ContantContainer = styled.div`
  padding: 75px 0 0 0;

  ${tablet(`
    padding: 150px 0 0 0;
  `)}
`;

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
    <Section HTMLElementRef={container} backgroundImage={backgroundImage}>
      <ContantContainer>
        <Title className="gs_reveal gs_duration-2 gs_delay-0.1">Why we?</Title>
        <Title>
          <p className="gs_reveal gs_duration-2 gs_delay-0.5">
            We make an amazing thing!
          </p>
          <p
            style={{ paddingTop: '70px' }}
            className="gs_reveal gs_duration-2 gs_delay-0.9"
          >
            Just look!
          </p>
        </Title>
      </ContantContainer>
    </Section>
  );
});
