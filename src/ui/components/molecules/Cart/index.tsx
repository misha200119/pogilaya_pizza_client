import React, { memo, FC } from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '../../athoms/Button';
import { useAppSelector } from '../../../../utils/hooks/reduxHooks';
import { countGoodsInCartAndCost } from '../../../../store/slices/cartSlice';
import { Routes } from '../../../../utils/constants/routes';

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
  const navigate = useNavigate();

  // eslint-disable-next-line no-underscore-dangle
  const _countGoodsInCartAndCost = useAppSelector(countGoodsInCartAndCost);

  return (
    <CartContainer>
      <CartButton
        borderRadius="50%"
        width="50px"
        height="50px"
      >
        <CartButtonContentContainer>
          <span>
            {_countGoodsInCartAndCost.countGoods}
          </span>
          <AiOutlineShoppingCart />
        </CartButtonContentContainer>
      </CartButton>

      <CartInfoPrice>
        {_countGoodsInCartAndCost.totalCost}
        UAH
      </CartInfoPrice>

      <CheckoutButton
        borderRadius="25px"
        height="50px"
        onClick={() => {
          navigate(Routes.Checkout);
        }}
      >
        Checkout
      </CheckoutButton>
    </CartContainer>
  );
});

export default Cart;
