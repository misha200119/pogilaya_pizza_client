import React, { memo, useMemo, FC } from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from '../../athoms/Button';
import { useAppSelector } from '../../../../utils/hooks/reduxHooks';
import { cartProducts } from '../../../../store/slices/cartSlice';
import PizzaInCart from '../../../../utils/types/pizzaInCart';

const CartContainer = memo(styled.div`
  padding: 1px;

  display: flex;
  align-items: center;
  gap: 10px;

  height: 55px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};

  border-radius: 25px;
`);

const CartButton = memo(styled(Button)`
  background-color: gray;

  &:hover {
    background-color: #696969;
  }

  transition: all 0.3s ease;
`);

const CartInfoPrice = memo(styled.p`
  width: max-content;
  word-break: normal;
  font-size: 16px;
`);

const CheckoutButton = memo(styled(Button)`
  padding: 0 25px;
  color: #fff;

  background-color: #e31837;
  
  &:hover {
    background-color: #a31228;
  }

  transition: all 0.3s ease;
`);

const CartButtonContentContainer = memo(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);

const Cart: FC<{}> = memo(() => {
  const cartProductsMap = useAppSelector(cartProducts);

  const countGoodsInCartAndCost = useMemo(() => {
    let countGoods = 0;
    let totalCost = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(cartProductsMap)) {
      countGoods += cartProductsMap[key];
      totalCost += (JSON.parse(key) as PizzaInCart).cost * cartProductsMap[key];
    }

    return { countGoods, totalCost: (totalCost.toFixed(2)) };
  }, [cartProductsMap]);

  return (
    <CartContainer>
      <CartButton
        borderRadius="50%"
        width="50px"
        height="50px"
      >
        <CartButtonContentContainer>
          <span>
            {countGoodsInCartAndCost.countGoods}
          </span>
          <AiOutlineShoppingCart />
        </CartButtonContentContainer>
      </CartButton>

      <CartInfoPrice>
        {countGoodsInCartAndCost.totalCost}
        UAH
      </CartInfoPrice>

      <CheckoutButton
        borderRadius="25px"
        height="50px"
      >
        Checkout
      </CheckoutButton>
    </CartContainer>
  );
});

export default Cart;
