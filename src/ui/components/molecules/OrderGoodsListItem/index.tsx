import React, { FC, memo, useMemo } from 'react';
import styled from 'styled-components';
import { cartProducts } from '../../../../store/slices/cartSlice';
import { useAppSelector } from '../../../../utils/hooks/reduxHooks';
import PizzaInCart from '../../../../utils/types/pizzaInCart';
import { Image } from '../../athoms/Image';
import { mobile, tablet } from '../../helpers/responsive';

const OrderGoodListItemContainer = memo(styled.li`
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
  font-size: 14px;
  color: #222;
`);

const GoodToppingsContainer = memo(styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  font-size: 11px;
`);

const Toppings = memo(styled.p`
  color: #4f4f4f;
`);

const DoughSizeAndPizzaSize = memo(styled.span`
`);

const GoodDescriptionFooter = memo(styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
`);

const GoodTotalCost = memo(styled.p`
  font-size: 18px;
`);

interface Props {
  productJSON: string;
}

export const OrderGoodsListItem: FC<Props> = memo(({
  productJSON,
}) => {
  const productAsObject: PizzaInCart = JSON.parse(productJSON);
  const productsMap = useAppSelector(cartProducts);

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
            <span
              style={{
                fontSize: '11px',
              }}
            >
              UAH
            </span>
          </GoodTotalCost>
        </GoodDescriptionFooter>
      </DescriptionContainer>
    </OrderGoodListItemContainer>
  );
});
