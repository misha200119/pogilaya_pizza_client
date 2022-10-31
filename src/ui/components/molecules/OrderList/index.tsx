import React, { memo } from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import { countGoodsInCartAndCost } from '../../../../store/slices/cartSlice';
import { useAppSelector } from '../../../../utils/hooks/reduxHooks';
import { OrderGoodsList } from '../OrderGoodsList';
import { desktop } from '../../helpers/responsive';

const OrderListContainer = memo(styled.div`
  position: sticky;
  top: 160px;
  width: 100%;

  ${desktop('top: 110px')};

  display: flex;
  flex-direction: column;
`);

const OrderListWrapper = memo(styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => hexToRgba(theme.primary, 0.08)};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.background};

  opacity: 1;
  overflow: auto;
`);

const OrderListTitle = memo(styled.h1`
  margin: 0 0 30px 20px;
`);

const OrderListFooter = memo(styled.div`
  min-height: 50px;
  padding-right: 15px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`);

export const OrderList = memo(() => {
  // eslint-disable-next-line no-underscore-dangle
  const _countGoodsInCartAndCost = useAppSelector(countGoodsInCartAndCost);

  return (
    <OrderListContainer>
      <OrderListTitle>Your order</OrderListTitle>

      <OrderListWrapper>
        <OrderGoodsList />
        <OrderListFooter>
          {_countGoodsInCartAndCost.totalCost}
          UAH
        </OrderListFooter>
      </OrderListWrapper>
    </OrderListContainer>
  );
});

const MinifiedOrderListWrapper = memo(styled(OrderListWrapper)`
  color: ${({ theme }) => theme.primary};
  padding: 20px 10px 10px 20px;
  box-shadow: 0 0 40px rgb(0 0 0 / 50%);
`);

export const MinifiedOrderList = memo(() => {
  // eslint-disable-next-line no-underscore-dangle

  return (
    <MinifiedOrderListWrapper>
      <OrderGoodsList isMinified />
    </MinifiedOrderListWrapper>
  );
});
