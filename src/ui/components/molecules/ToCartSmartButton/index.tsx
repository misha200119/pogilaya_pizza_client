import React, { memo, FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../../utils/hooks/reduxHooks';
import { addGood, removeGood } from '../../../../store/slices/cartSlice';
import PizzaInCart from '../../../../utils/types/pizzaInCart';
import Good from '../../../../utils/types/good';
import Button from '../../athoms/Button';

const IncrementDecrementButtonsContainer = memo(styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  border: 1px solid rgba(0,0,0,.08);
  border-radius: 15px;
`);

const ToCartButton = memo(styled(Button)`
  height: 100%;
  width: 100%;
  border-radius: 30px;

  color: #fff;
  background-color: #e31837;
  
  &:hover {
    background-color: #a31228;
  }

  transition: all 0.3s ease;
`);

const IncrementDecrementButton = memo(styled(Button)`
  height: 100%;
  min-width: 50px;

  border: 1px solid rgba(0,0,0,.08);
  border-radius: 15px;

  background-color: #f8f8f8;

  &:hover {
    background-color: #fff;
  }
`);

interface Props {
  cartMap: {[key: string]: number};
  curentGoodBySelectedParamsAsString: string;
  curentGoodBySelectedParamsAsObject: Good | PizzaInCart;
}

export const ToCartSmartButton: FC<Props> = memo(({
  cartMap,
  curentGoodBySelectedParamsAsString,
  curentGoodBySelectedParamsAsObject,
}) => {
  const dispatch = useAppDispatch();

  const countInCart = cartMap[curentGoodBySelectedParamsAsString];

  if (!countInCart) {
    return (
      <ToCartButton
        onClick={() => {
          dispatch(addGood(curentGoodBySelectedParamsAsObject));
        }}
      >
        To Cart
      </ToCartButton>
    );
  }

  return (
    <IncrementDecrementButtonsContainer>
      <IncrementDecrementButton
        onClick={() => {
          dispatch(removeGood(curentGoodBySelectedParamsAsObject));
        }}
      >
        -
      </IncrementDecrementButton>
      <p>
        {countInCart}
      </p>
      <IncrementDecrementButton
        onClick={() => {
          dispatch(addGood(curentGoodBySelectedParamsAsObject));
        }}
      >
        +
      </IncrementDecrementButton>
    </IncrementDecrementButtonsContainer>
  );
});
