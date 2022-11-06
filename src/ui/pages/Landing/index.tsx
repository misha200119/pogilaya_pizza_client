/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo, useCallback, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import styled, { ThemeProvider } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { gsap } from 'gsap';
import { LandingHeader } from '../../components/landing/Header';
import { Section } from '../../components/landing/Section';
import { FirstSlide } from '../../components/landing/slides/FirstSlide';
import { SecondSlide } from '../../components/landing/slides/SecondSlide';

const SlidesContainer = memo(styled.div`
  max-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`);

const image2 = './images/2.jpg';
const image3 = './images/3.jpg';

export const Landing = memo(() => {
  const container = useRef(null);
  const currentSection = useRef(null);
  const [headerTextColor, setHeaderTextColor] = useState({ color: '#fff' });

  const setHeaderTextColor_ = useCallback((color: string) => {
    setHeaderTextColor({ color });
  }, [setHeaderTextColor]);

  return (
    <SlidesContainer>
      <ThemeProvider theme={headerTextColor}>
        <LandingHeader />
        <FirstSlide setHeaderColor={setHeaderTextColor} />

        <SecondSlide setHeaderColor={setHeaderTextColor} />

        <Section backgroundImage={image2}>
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
            hello world
          </div>
        </Section>
        <Section backgroundImage={image3}>
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
            hello world
          </div>
        </Section>
      </ThemeProvider>
    </SlidesContainer>
  );
});
