import React, { memo, FC } from 'react';
import styled from 'styled-components';
import { GridWithTemplate, GridItemArea } from '../../components/helpers/grid';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';
import { OrderForm } from '../../components/molecules/OrderForm';

const Container = memo(styled.main`
  margin-bottom: 30px;
`);

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
`);

export const Checkout: FC<{}> = memo(() => {
  return (
    <Container>
      <StyledResponsiveContainer>
        <GridWithTemplate
          mobileColumnsCount="1"
          tabletColumnsCount="2"
          desktopColumnsCount="2"
          templateAreasMobile={'"your-order" "placing-an-order" '}
          templateAreasTablet={'"placing-an-order your-order"'}
          templateAreasDesktop={'"placing-an-order your-order"'}
        >
          <GridItemArea
            areaName="placing-an-order"
          >
            <OrderForm />
          </GridItemArea>
          <GridItemArea
            areaName="your-order"
          >
            Your order
          </GridItemArea>
        </GridWithTemplate>
      </StyledResponsiveContainer>
    </Container>
  );
});
