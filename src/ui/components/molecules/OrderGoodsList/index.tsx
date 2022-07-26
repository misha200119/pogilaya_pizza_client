import React, { FC, memo, useMemo } from 'react';
import styled from 'styled-components';
import { cartProducts } from '../../../../store/slices/cartSlice';
import { useAppSelector } from '../../../../utils/hooks/reduxHooks';
import { MinifiedOrderGoodsListItem, OrderGoodsListItem } from '../OrderGoodsListItem';

const OrderGoodsListContainer = memo(styled.ul`
  max-height: 420px;
  width: 100%;
  overflow-y: auto;
  z-index: 0;

  &::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.08);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border: 2px solid rgba(0, 0, 0, 0.08);
    border-radius: 15px;
  }
`);

interface Props {
  isMinified?: boolean;
}

export const OrderGoodsList: FC<Props> = memo(({ isMinified }) => {
  const cartProductsMap = useAppSelector(cartProducts);

  const products = useMemo(() => {
    return Object.keys(cartProductsMap);
  }, [cartProductsMap]);

  return (
    <OrderGoodsListContainer>
      {products.map((product) => (isMinified ? (
        <MinifiedOrderGoodsListItem productJSON={product} key={product} />
      ) : (
        <OrderGoodsListItem productJSON={product} key={product} />
      )))}
    </OrderGoodsListContainer>
  );
});
