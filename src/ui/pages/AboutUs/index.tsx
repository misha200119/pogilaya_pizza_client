/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { gsap } from 'gsap';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/organisms/Header';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';
import { BackgroundVideo } from '../../components/athoms/BackgroundVideo';

const videoBg = './assets/nigger_eats_pizza.mp4';

const Section = memo(styled(ResponsiveContainer)`
  min-height: 100vh;
  width: 100%;
`);

const HeaderSection = memo(styled(Section)`

`);

// const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
//   height: 50vh;

//   background-color: ${(props) => props.theme.background};
//   color: ${(props) => props.theme.primary};
// `);

export const AboutUs = memo(() => {
  /* const contentContainer = useRef<HTMLDivElement | null>(null); */

  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <HeaderSection>
        <BackgroundVideo src={videoBg} />
      </HeaderSection>
    </>
  );
});
