/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import Logo from '../../athoms/Logo';
import {
  GridItemArea,
  GridWithTemplate,
} from '../../helpers/grid';
import Visible from '../../helpers/mediaVisible';
import { Container as ResponsiveContainer } from '../../helpers/responsive';

import Cart from '../../molecules/Cart';
import Nav from '../../molecules/Nav';
import ThemeSwitcher from '../../molecules/ThemeSwitcher';

const logoImage = '/images/Logo.webp';

const Container = memo(styled.header`
  background-color: #222;
  color: #fff;

  position: sticky;
  top: 0;
  z-index: 999;
`);

const Header: FC<{}> = memo(() => {
  return (
    <Container>
      <ResponsiveContainer>
        <GridWithTemplate
          mobileColumnsCount="2"
          tabletColumnsCount="2"
          desktopColumnsCount="3"
          mobileGridGap="25px"
          tabletGridGap="20px"
          desktopGridGap="15px"
          templateAreasMobile={'"logo cart"'}
          templateAreasTablet={'"logo cart" "nav nav"'}
          templateAreasDesktop={'"logo nav cart"'}
          style={{
            padding: '10px 0',
          }}
        >
          <GridItemArea areaName="logo">
            <Logo size="50px" imgUrl={logoImage} linkHref="#">
              <Visible mobileVisible={false}>
                <p>My pizza</p>
              </Visible>
            </Logo>
          </GridItemArea>

          <GridItemArea
            areaName="cart"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <ThemeSwitcher sx={{ m: 1 }} />
            <Cart />
          </GridItemArea>

          <GridItemArea mobileVisible={false} areaName="nav">
            <Nav />
          </GridItemArea>
        </GridWithTemplate>
      </ResponsiveContainer>
    </Container>
  );
});

export default Header;
