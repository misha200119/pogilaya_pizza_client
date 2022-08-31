import React, { memo } from 'react';
import styled from 'styled-components';
import { OrderGoodsList } from '../OrderGoodsList';

const OrderListContainer = memo(styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`);

const OrderListWrapper = memo(styled.div`

`);

const OrderListTitle = memo(styled.h1`
  margin: 0 0 30px 20px;
`);

export const OrderList = memo(() => {
  return (
    <OrderListContainer>
      <OrderListWrapper>
        <OrderListTitle>
          Your order
        </OrderListTitle>
        <OrderGoodsList />
      </OrderListWrapper>
    </OrderListContainer>
  );
});
