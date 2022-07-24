import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mappableRoutes } from '../../../../utils/routes';

const NavContainer = memo(styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`);

const StyledNavLink = memo(styled(NavLink)`
  color: ${(props) => props.theme.primary};
  &.active {
    color: ${(props) => props.theme.secondary};
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
