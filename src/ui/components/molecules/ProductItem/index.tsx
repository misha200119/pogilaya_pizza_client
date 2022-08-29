/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import React, {
  memo, FC, useContext, useState, useMemo,
} from 'react';
import styled from 'styled-components';
import {
  DoughSize, Size, SizeCost, DoughSizeCost,
} from '../../../../utils/types/pizza';
import PizzaSizes from '../PizzaSizes';
import { Image } from '../../athoms/Image';
import { ProductItemContext } from '../ProductSection';
import DoughtSizes from '../DoughtSizes';
import { useAppSelector, useAppDispatch } from '../../../../utils/hooks/reduxHooks';
import { cartProducts } from '../../../../store/slices/cartSlice';
import PizzaInCart from '../../../../utils/types/pizzaInCart';
import { ToCartSmartButton } from '../ToCartSmartButton';

const ProductItemContainer = memo(styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${(props) => props.theme.primary};

  &:hover{
    -webkit-box-shadow:0 0 15px rgba(0,0,0,.5);
    box-shadow:0 0 15px rgba(0,0,0,.5);
  }

  &:hover img{
    -webkit-transform:scale(1.01);
    -ms-transform:scale(1.01);
    transform:scale(1.01)
  }

  transition: all .3s ease;

  border: 1px solid #e0e0e0;
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

export const ProductItem: FC<{}> = memo(() => {
  const { product } = useContext(ProductItemContext);
  const {
    id,
    image,
    name,
    toppings,
    sizes,
    doughSizes,
    cost,
  } = product;

  const [currentPizzaSize, setCurrentPizzaSize] = useState<Size>(sizes[0]);
  const [selectedDoughSizes, setSelectedDoughSizes] = useState<DoughSize>(doughSizes[0]);

  const calculatedPizzaCost = useMemo<number>(() => {
    return cost + SizeCost[currentPizzaSize] + DoughSizeCost[selectedDoughSizes];
  }, [currentPizzaSize, selectedDoughSizes]);

  const currentPizzaBySelectedParamsAsObject = useMemo<PizzaInCart>(() => {
    return (
      {
        id,
        image,
        name,
        toppings,
        size: currentPizzaSize,
        doughSize: selectedDoughSizes,
        cost: calculatedPizzaCost,
      }
    );
  }, [currentPizzaSize, selectedDoughSizes, calculatedPizzaCost]);

  const currentPizzaBySelectedParamsAsString = useMemo(() => {
    return JSON.stringify(currentPizzaBySelectedParamsAsObject);
  }, [currentPizzaBySelectedParamsAsObject]);

  const cartProductsMap = useAppSelector(cartProducts);

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
              {calculatedPizzaCost}
              UAH
            </p>
          </div>
          <ToCartSmartButton
            cartMap={cartProductsMap}
            curentGoodBySelectedParamsAsString={currentPizzaBySelectedParamsAsString}
            curentGoodBySelectedParamsAsObject={currentPizzaBySelectedParamsAsObject}
          />
        </PriceContainer>
      </DescriptionContainer>
    </ProductItemContainer>
  );
});
