import React, { FC, memo, useMemo } from 'react';
import styled from 'styled-components';
import { cartProducts, removeFullyGood } from '../../../../store/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/reduxHooks';
import PizzaInCart from '../../../../utils/types/pizzaInCart';
import Button from '../../athoms/Button';
import { Image } from '../../athoms/Image';
import { mobile, tablet } from '../../helpers/responsive';
import { GoodListItemCountButton } from '../GoodListItemCountButton';

const OrderGoodListItemContainer = memo(styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;

  display: flex;
  grid-gap: 15px;

  border-bottom: 1px solid #e5e5e5;
`);

const ImageWrapper = memo(styled.div`
  flex-shrink: 1;
  ${mobile(`
    width: 80px;
    height: 80px;
  `)}
  ${tablet(`
    width: 120px;
    height: 120px;
  `)}
`);

const DescriptionContainer = memo(styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`);

const GoodDescriptionTitle = memo(styled.h2`
  max-width: 85%;
  color: #222;
  font-size: 14px;
  font-weight: 600;
`);

const GoodToppingsContainer = memo(styled.div`
  max-width: 85%;

  display: flex;
  flex-direction: column;
  grid-gap: 5px;

  color: #4f4f4f;
  font-size: 11px;
  line-height: 1.3;
`);

const Toppings = memo(styled.p`
`);

const DoughSizeAndPizzaSize = memo(styled.span`
  font-weight: 700;
`);

const GoodDescriptionFooter = memo(styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`);

const GoodTotalCost = memo(styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: .03em;
`);

const CostCurrencySuffix = memo(styled.span`
  margin-left: 5px;
  font-size: 11px;
`);

const RemoveGoodButton = memo(styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 30px;
  height: 30px;

  background-color: #f8f8f8;

  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);

  &:hover svg > path {
    fill: #e31837;
  }

  & svg > path {
    transition: all 0.3s ease;
  }
`);

interface Props {
  productJSON: string;
}

export const OrderGoodsListItem: FC<Props> = memo(({
  productJSON,
}) => {
  const dispatch = useAppDispatch();
  const productsMap = useAppSelector(cartProducts);
  const productAsObject: PizzaInCart = JSON.parse(productJSON);

  const totalCostOfProduct = useMemo(() => {
    return productsMap[productJSON] * productAsObject.cost;
  }, [productsMap, productAsObject]);

  return (
    <OrderGoodListItemContainer>
      <ImageWrapper>
        <Image
          image={productAsObject.image}
        />
      </ImageWrapper>

      <DescriptionContainer>
        <GoodDescriptionTitle>
          {productAsObject.name}
        </GoodDescriptionTitle>

        <GoodToppingsContainer>
          <Toppings>
            {productAsObject.toppings}
          </Toppings>

          <DoughSizeAndPizzaSize>
            {`${productAsObject.size} ${productAsObject.doughSize}`}
          </DoughSizeAndPizzaSize>
        </GoodToppingsContainer>

        <GoodDescriptionFooter>
          <GoodTotalCost>
            {totalCostOfProduct}
            <CostCurrencySuffix>
              UAH
            </CostCurrencySuffix>
          </GoodTotalCost>

          <GoodListItemCountButton
            cartMap={productsMap}
            currentGood={productJSON}
            currentGoodAsObject={productAsObject}
          />
        </GoodDescriptionFooter>
      </DescriptionContainer>
      <RemoveGoodButton
        onClick={() => {
          dispatch(removeFullyGood(productAsObject));
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M13.3 2.1C13.6866 1.7134 13.6866 1.0866 13.3 0.7C12.9134 0.313401 12.2866 0.313401 11.9 0.7L7 5.6L2.1 0.7C1.7134 0.3134 1.0866 0.313401 0.7 0.7C0.313401 1.0866 0.313401 1.7134 0.7 2.1L5.6 7L0.7 11.9C0.3134 12.2866 0.313401 12.9134 0.7 13.3C1.0866 13.6866 1.7134 13.6866 2.1 13.3L7 8.4L11.9 13.3C12.2866 13.6866 12.9134 13.6866 13.3 13.3C13.6866 12.9134 13.6866 12.2866 13.3 11.9L8.4 7L13.3 2.1Z" fill="black"></path></svg>
      </RemoveGoodButton>
    </OrderGoodListItemContainer>
  );
});

export const MinifiedOrderGoodsListItem: FC<Props> = memo(({
  productJSON,
}) => {
  const dispatch = useAppDispatch();
  const productsMap = useAppSelector(cartProducts);
  const productAsObject: PizzaInCart = JSON.parse(productJSON);

  const totalCostOfProduct = useMemo(() => {
    return productsMap[productJSON] * productAsObject.cost;
  }, [productsMap, productAsObject]);

  return (
    <OrderGoodListItemContainer>
      <DescriptionContainer>
        <GoodDescriptionTitle>
          {productAsObject.name}
        </GoodDescriptionTitle>

        <GoodToppingsContainer>
          <Toppings>
            {productAsObject.toppings}
          </Toppings>

          <DoughSizeAndPizzaSize>
            {`${productAsObject.size} ${productAsObject.doughSize}`}
          </DoughSizeAndPizzaSize>
        </GoodToppingsContainer>

        <GoodDescriptionFooter>
          <GoodTotalCost>
            {totalCostOfProduct}
            <CostCurrencySuffix>
              UAH
            </CostCurrencySuffix>
          </GoodTotalCost>

          <GoodListItemCountButton
            cartMap={productsMap}
            currentGood={productJSON}
            currentGoodAsObject={productAsObject}
          />
        </GoodDescriptionFooter>
      </DescriptionContainer>
      <RemoveGoodButton
        onClick={() => {
          dispatch(removeFullyGood(productAsObject));
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="red" xmlns="http://www.w3.org/2000/svg"><path d="M13.3 2.1C13.6866 1.7134 13.6866 1.0866 13.3 0.7C12.9134 0.313401 12.2866 0.313401 11.9 0.7L7 5.6L2.1 0.7C1.7134 0.3134 1.0866 0.313401 0.7 0.7C0.313401 1.0866 0.313401 1.7134 0.7 2.1L5.6 7L0.7 11.9C0.3134 12.2866 0.313401 12.9134 0.7 13.3C1.0866 13.6866 1.7134 13.6866 2.1 13.3L7 8.4L11.9 13.3C12.2866 13.6866 12.9134 13.6866 13.3 13.3C13.6866 12.9134 13.6866 12.2866 13.3 11.9L8.4 7L13.3 2.1Z" fill="black"></path></svg>
      </RemoveGoodButton>
    </OrderGoodListItemContainer>
  );
});
