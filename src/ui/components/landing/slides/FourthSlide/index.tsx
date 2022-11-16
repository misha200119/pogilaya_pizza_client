import React, {
  Dispatch, FC, memo, SetStateAction, useCallback, useEffect, useRef,
} from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { triggerCallbackOnEnterInViewport } from '../../../../animations/helpers/triggerOnViewport';
import { applyAnimations } from '../../../../animations/landingPage/reveal';
import { tablet } from '../../../helpers/responsive';
// eslint-disable-next-line import/no-cycle
import { Section } from '../../Section';

// const backgroundImage = './images/3.jpg';

const ContentContainer = styled.div`
  padding: 75px 0 0 0;

  ${tablet(`
    padding: 150px 0 0 0;
  `)}
`;

const Title = styled.h1`
  font-size: 50px;

  color: #fff;

  max-width: 100%;

  ${tablet(`
    max-width: 50%;
  `)}
`;

interface Props {
  setHeaderColor: Dispatch<
  SetStateAction<{
    color: string;
  }>
  >;
}

const currentSlideHeaderTextColor = '#000';

export const FourthSlide: FC<Props> = memo(({ setHeaderColor }) => {
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
      <div className="bg"></div>
      <ContentContainer>
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
      </ContentContainer>
    </Section>
  );
});
