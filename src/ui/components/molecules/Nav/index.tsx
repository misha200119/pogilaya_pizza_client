import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { mappableRoutes } from '../../../../utils/routes';

const NavContainer = memo(styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 0;
`);

const StyledNavLink = memo(styled(NavLink)`
  color: inherit;
  font-weight: 400;
  opacity: 0.7;
  letter-spacing: .05em;

  &.active, &:hover {
    opacity: 1;
    color: #f8f8f8;
    font-weight: 700;
  }
  text-decoration: none;
`);

const Nav = memo(() => {
  return (
    <NavContainer>
      {mappableRoutes.map((route) => (
        <StyledNavLink
          key={route.link}
          to={route.link}
        >
          {route.linkText}
        </StyledNavLink>
      ))}
    </NavContainer>
  );
});

export default Nav;
