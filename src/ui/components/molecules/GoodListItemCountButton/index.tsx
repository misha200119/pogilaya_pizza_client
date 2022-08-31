import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../../utils/hooks/reduxHooks';
import { addGood, removeGood } from '../../../../store/slices/cartSlice';
import Good from '../../../../utils/types/good';
import PizzaInCart from '../../../../utils/types/pizzaInCart';
import Button from '../../athoms/Button';

const GoodListItemCountButtonContainer = memo(styled.div`
  height: 30px;
  width: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 15px;

  background-color: #e31837;
  color: #f8f8f8;
`);

const IncrementDecrementButton = memo(styled(Button)`
  width: 30px;
  height: 30px;

  border: 1px solid rgba(0,0,0,.08);
  border-radius: 15px;

  background-color: #e31837;

  &:hover {
    background-color: #a31228;
  }

  transition: all .3s ease;
`);

const CountGood = memo(styled.span`
`);

interface Props {
  cartMap: {[key: string]: number};
  currentGood: string;
  currentGoodAsObject: PizzaInCart | Good;
}

export const GoodListItemCountButton: FC<Props> = memo(({
  cartMap,
  currentGood,
  currentGoodAsObject,
}) => {
  const dispatch = useAppDispatch();
  const countInCart = cartMap[currentGood];

  return (
    <GoodListItemCountButtonContainer>
      <IncrementDecrementButton
        onClick={() => {
          dispatch(removeGood(currentGoodAsObject));
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#f8f8f8" x="0px" y="0px" viewBox="0 0 491.858 491.858"><path d="M465.167,211.613H240.21H26.69c-8.424,0-26.69,11.439-26.69,34.316s18.267,34.316,26.69,34.316h213.52h224.959 c8.421,0,26.689-11.439,26.689-34.316S473.59,211.613,465.167,211.613z"></path></svg>
      </IncrementDecrementButton>
      <CountGood>
        {countInCart}
      </CountGood>
      <IncrementDecrementButton
        onClick={() => {
          dispatch(addGood(currentGoodAsObject));
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#f8f8f8" viewBox="0 0 24 24"><path d="m23,10h-8.5c-0.3,0-0.5-0.2-0.5-0.5v-8.5c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v8.5c0,0.3-0.2,0.5-0.5,0.5h-8.5c-0.6,0-1,0.4-1,1v2c0,0.6 0.4,1 1,1h8.5c0.3,0 0.5,0.2 0.5,0.5v8.5c0,0.6 0.4,1 1,1h2c0.6,0 1-0.4 1-1v-8.5c0-0.3 0.2-0.5 0.5-0.5h8.5c0.6,0 1-0.4 1-1v-2c0-0.6-0.4-1-1-1z"></path></svg>
      </IncrementDecrementButton>
    </GoodListItemCountButtonContainer>
  );
});
