import React, {
  FC, memo, ReactNode, RefObject,
} from 'react';
import styled from 'styled-components';
import { desktop, tablet } from '../../helpers/responsive';
// eslint-disable-next-line import/no-cycle
import { LandingHeader } from '../LandingHeader';

interface ContainerProps {
  backgroundImage?: string;
}

export const Container = styled.section<ContainerProps>`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage ?? 'none'});
  /* scroll-snap-align: start; */

  padding: 0 15px;

  ${tablet(`
    padding: 0 50px;
  `)}

  ${desktop(`
    padding: 0 150px;
  `)}
`;

interface Props {
  HTMLElementRef: RefObject<HTMLElement>;
  backgroundImage?: string;
  children: ReactNode;
}

export const Section: FC<Props> = memo(
  ({ HTMLElementRef, backgroundImage, children }) => {
    return (
      <Container ref={HTMLElementRef} backgroundImage={backgroundImage} className="section">
        <LandingHeader />
        {children}
      </Container>
    );
  },
);
