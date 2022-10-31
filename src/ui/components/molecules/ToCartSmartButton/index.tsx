import React, { memo, FC } from 'react';
import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
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

  border: 1px solid ${({ theme }) => hexToRgba(theme.primary, 0.2)};
  border-radius: 15px;
`);

const ToCartButton = memo(styled(Button)`
  height: 100%;
  width: 100%;
  border-radius: 15px;

  font-weight: 700;
  font-size: 18px;
  color: #fff;

  background-color: #e31837;
  
  &:hover {
    background-color: #a31228;
  }

  transition: all 0.3s ease;
`);

const CounterInCartDisplayer = memo(styled.p`
  color: #4f4f4f;
  font-weight: 700;
  font-size: 18px;
`);

const IncrementDecrementButton = memo(styled(Button)`
  height: 100%;
  min-width: 50px;

  border: 1px solid ${({ theme }) => hexToRgba(theme.primary, 0.1)};

  border-radius: 15px;

  background-color: #f8f8f8;

  & > svg {
    width: 14px;
    height: 14px;
  }

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 491.858 491.858"
        >
          <path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"></path>
        </svg>
      </IncrementDecrementButton>
      <CounterInCartDisplayer>{countInCart}</CounterInCartDisplayer>
      <IncrementDecrementButton
        onClick={() => {
          dispatch(addGood(curentGoodBySelectedParamsAsObject));
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path>
        </svg>
      </IncrementDecrementButton>
    </IncrementDecrementButtonsContainer>
  );
});
