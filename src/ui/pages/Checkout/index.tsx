import React, { memo, FC, useEffect } from 'react';
import styled from 'styled-components';
import { setCursorEffect } from '../../../store/slices/themeSlice';
import { CursorEffects } from '../../../utils/constants/ui/cursorEffects';
import { useAppDispatch } from '../../../utils/hooks/reduxHooks';
import { GridWithTemplate, GridItemArea } from '../../components/helpers/grid';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';
import { OrderForm } from '../../components/molecules/OrderForm';
import { OrderList } from '../../components/molecules/OrderList';
import Footer from '../../components/organisms/Footer';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/organisms/Header';

const Container = memo(styled.main`
  padding: 30px 0 30px 0;
`);

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
`);

export const Checkout: FC<{}> = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCursorEffect(CursorEffects.PIZZA_WITH_CURSOR));
  }, []);

  return (
    <>
      <Header />
      <StyledResponsiveContainer>
        <Container>
          <GridWithTemplate
            mobileColumnsCount="1"
            tabletColumnsCount="2"
            desktopColumnsCount="2"
            templateAreasMobile={'"your-order" "placing-an-order" '}
            templateAreasTablet={'"placing-an-order your-order"'}
            templateAreasDesktop={'"placing-an-order your-order"'}
            mobileGridGap="50px"
            tabletGridGap="50px"
            desktopGridGap="50px"
          >
            <GridItemArea areaName="placing-an-order">
              <OrderForm />
            </GridItemArea>
            <GridItemArea areaName="your-order">
              <OrderList />
            </GridItemArea>
          </GridWithTemplate>
        </Container>
      </StyledResponsiveContainer>
      <Footer />
    </>
  );
});
