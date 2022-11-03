import React, { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { gsap } from 'gsap';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/organisms/Header';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  height: 50vh;

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
`);

export const AboutUs = memo(() => {
  const contentContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

  }, []);

  return (
    <>
      <Header />
      <StyledResponsiveContainer ref={contentContainer}>
        <div>about us page</div>
      </StyledResponsiveContainer>
    </>
  );
});
