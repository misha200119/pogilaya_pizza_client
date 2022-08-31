import React, { FC, memo } from 'react';
import styled from 'styled-components';

const OrderGoodListItemContainer = memo(styled.li`
`);

interface Props {
  productJSON: string;
}

export const OrderGoodsListItem: FC<Props> = memo(() => {
  return (
    <OrderGoodListItemContainer>
      OrderGoodsListItem
    </OrderGoodListItemContainer>
  );
});
