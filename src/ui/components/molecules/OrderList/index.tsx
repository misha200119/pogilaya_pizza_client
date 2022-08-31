import React, { memo } from 'react';
import styled from 'styled-components';
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
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 25px;
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
      <OrderListTitle>
        Your order
      </OrderListTitle>

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
