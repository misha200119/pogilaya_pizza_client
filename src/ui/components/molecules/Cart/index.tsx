import React, { memo } from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from '../../athoms/Button';

const CartContainer = memo(styled.div`
  padding: 1px;

  display: flex;
  align-items: center;
  gap: 10px;

  height: 50px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};

  border-radius: 25px;
`);

const CartButton = memo(styled(Button)`
  background-color: gray;
`);

const CartInfoPrice = memo(styled.p`
  width: max-content;
  word-break: normal;
  font-size: 16px;
`);

const CheckoutButton = memo(styled(Button)`
  padding: 0 25px;
  background-color: red;
`);

const CartButtonContentContainer = memo(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);

const Cart = memo(() => {
  return (
    <CartContainer>
      <CartButton
        borderRadius="50%"
        width="50px"
        height="50px"
      >
        <CartButtonContentContainer>
          00
          <AiOutlineShoppingCart />
        </CartButtonContentContainer>
      </CartButton>

      <CartInfoPrice>1488.00 UAH</CartInfoPrice>

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
