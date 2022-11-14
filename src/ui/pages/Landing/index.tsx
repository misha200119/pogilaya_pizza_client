/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo, useCallback, useLayoutEffect, useRef, useState,
} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LandingHeader } from '../../components/landing/LandingHeader';
import { FirstSlide } from '../../components/landing/slides/FirstSlide';
import { SecondSlide } from '../../components/landing/slides/SecondSlide';

const SlidesContainer = memo(styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
`);

const image2 = './images/2.jpg';
const image3 = './images/3.jpg';

export const Landing = memo(() => {
  const container = useRef<null | HTMLElement>(null);
  const currentSection = useRef(null);
  const [headerTextColor, setHeaderTextColor] = useState({ color: '#fff' });

  useLayoutEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause',
      scroller: container.current,
    });
  }, [container]);

  const setHeaderTextColor_ = useCallback((color: string) => {
    setHeaderTextColor({ color });
  }, [setHeaderTextColor]);

  return (
    <ThemeProvider theme={headerTextColor}>
      <LandingHeader position="fixed" isVisible />
      <SlidesContainer ref={container}>
        <FirstSlide setHeaderColor={setHeaderTextColor} />
        <SecondSlide setHeaderColor={setHeaderTextColor} />
      </SlidesContainer>
    </ThemeProvider>
  );
});
