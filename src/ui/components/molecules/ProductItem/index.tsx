/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import React, {
  memo, FC, useContext, useState,
} from 'react';
import styled from 'styled-components';
import { DoughSize, Size } from '../../../../utils/types/pizza';
import PizzaSizes from '../PizzaSizes';
import { Image } from '../../athoms/Image';
import { ProductItemContext } from '../ProductSection';
import DoughtSizes from '../DoughtSizes';
import Button from '../../athoms/Button';
import { useAppSelector, useAppDispatch } from '../../../../utils/hooks/reduxHooks';
import { addGood, removeGood, cartProducts } from '../../../../store/slices/cartSlice';

const ProductItemContainer = memo(styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: red;

  border-radius: 25px;
`);

const DescriptionContainer = memo(styled.div`
  margin-top: 15px;
`);

const PizzaName = memo(styled.h2`
  margin-bottom: 15px;
`);

const PizzaToppings = memo(styled.span`
  display: block;
  margin-bottom: 15px;
`);

const PriceContainer = memo(styled.div`
  width: 100%;
  height: 50px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
`);

const ToCartButton = memo(styled(Button)`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`);

export const ProductItem: FC<{}> = memo(() => {
  const { product } = useContext(ProductItemContext);
  const {
    image,
    name,
    toppings,
    sizes,
    doughSizes,
    cost,
  } = product;

  const [currentPizzaSize, setCurrentPizzaSize] = useState<Size>(sizes[0]);
  const [selectedDoughSizes, setSelectedDoughSizes] = useState<DoughSize>(doughSizes[0]);

  const cartProductsMap = useAppSelector(cartProducts);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line no-console
  console.log(cartProductsMap);

  return (
    <ProductItemContainer>
      <Image
        image={image}
      />
      <DescriptionContainer>
        <PizzaName>
          {name}
        </PizzaName>
        <PizzaToppings>
          {toppings}
        </PizzaToppings>

        <PizzaSizes
          currentSize={currentPizzaSize}
          setCurrentSize={setCurrentPizzaSize}
          sizes={sizes}
        />

        <DoughtSizes
          sizes={doughSizes}
          currentSize={selectedDoughSizes}
          setCurrentSize={setSelectedDoughSizes}
        />

        <PriceContainer>
          <div>
            <p>
              {cost}
              UAH
            </p>
          </div>
          <ToCartButton
            onClick={() => {
              dispatch(addGood(product));
            }}
          >
            To Cart
          </ToCartButton>
        </PriceContainer>
      </DescriptionContainer>
    </ProductItemContainer>
  );
});
