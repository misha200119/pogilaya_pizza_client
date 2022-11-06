import React, { memo } from 'react';
import styled from 'styled-components';
import Logo from '../../athoms/Logo';
import Visible from '../../helpers/mediaVisible';
import { desktop, tablet } from '../../helpers/responsive';
// eslint-disable-next-line import/no-cycle
import Nav from '../../molecules/Nav';

const logoImage = './images/Logo.webp';

// for that component we use custom theme provider from styled component in Landing page
const Container = memo(styled.header`
  height: auto;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 15px;

  ${tablet(`
    padding: 15px 50px;
  `)}

  ${desktop(`
    padding: 15px 150px;
  `)}

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 99;

  color: ${({ theme }) => theme.color};

  transition: all 0.3s;
`);

export const LandingHeader = memo(() => {
  return (
    <Container>
      <Logo size="50px" imgUrl={logoImage} linkHref="#">
        <Visible>
          <p>My pizza</p>
        </Visible>
      </Logo>
      <Nav />
    </Container>
  );
});
