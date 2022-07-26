/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo, FC, useMemo, useCallback, useState,
} from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '../../athoms/Button';
import { useAppSelector } from '../../../../utils/hooks/reduxHooks';
import { countGoodsInCartAndCost } from '../../../../store/slices/cartSlice';
import { Routes } from '../../../../utils/constants/routes';
import { tablet, config } from '../../helpers/responsive';
import { Portal } from '../Portal';
import { PortalContainersIDs } from '../../../../utils/constants/portalContainersIDs';
import { MinifiedOrderList } from '../OrderList';

const CartContainer = memo(styled.div`
  padding: 2px;

  display: flex;
  align-items: center;
  gap: 10px;

  height: 50px;

  background-color: #fff;
  color: #4f4f4f;
  &:hover {
    color: #222;
    cursor: pointer;
  }

  border-radius: 25px;

  box-shadow: 0 0 15px #000;

  position: fixed;
  left: 10px;
  bottom: 40px;

  ${tablet(`
    position: static;
    left: 0;
    bottom: 0;

    box-shadow: none;
    color: #4f4f4f;

    &:hover {
      color: #4f4f4f;
      cursor: initial;
    }
  `)}

  z-index: 10;
`);

interface CollapsedOrderListContainerProps {
  isOpened: boolean;
}

const CollapsedOrderListContainer = styled.div<CollapsedOrderListContainerProps>`
  position: absolute;
  width: 100%;
  margin-top: 1px;

  transform-origin: top;
  transform-style: flat;


  transform: ${({ isOpened }) => (isOpened ? 'scaleY(1)' : 'scaleY(0)')};

  transition: transform 0.3s;
`;

const WrapperForCollapse = memo(styled.div`
  position: relative;
`);

const CartButton = memo(styled(Button)`
  background-color: #e31837;

  &:hover {
    background-color: #222;
  }

  ${tablet(`
    background-color: #4f4f4f;

    &:hover {
    background-color: #222;
    }
  `)}
  margin: 1px;
  color: #fff;

  transition: all 0.3s ease;
`);

const CartInfoPrice = memo(styled.p`
  width: 120px;
  ${tablet(`
    width: max-content;
  `)}

  display: flex;
  justify-content: center;

  font-weight: 700;

  word-break: normal;
  font-size: 16px;
`);

const CheckoutButton = memo(styled(Button)`
  height: 45px;
  padding: 0 25px;
  color: #fff;
  font-weight: 600;
  font-size: 17px;

  background-color: #e31837;
  
  &:hover {
    background-color: #a31228;
  }

  transition: all 0.3s ease;
`);

const CartButtonContentContainer = memo(styled.div`
  font-size: 15px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);

const Cart: FC<{}> = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  // eslint-disable-next-line no-underscore-dangle
  const _countGoodsInCartAndCost = useAppSelector(countGoodsInCartAndCost);
  const matches = useMediaQuery(`(max-width:${config.tablet}px)`);
  const navigateToCart = useCallback(() => {
    navigate(Routes.Checkout);
  }, [navigate]);
  const [isCartListOpen, setIsCartListOpen] = useState(false);
  const switchOpenCloseCartList = useCallback(() => {
    if (location.pathname === Routes.Checkout) {
      setIsCartListOpen(false);

      return;
    }

    setIsCartListOpen((prev) => !prev);
  }, [location, setIsCartListOpen]);

  const component = useMemo(() => {
    return (
      <WrapperForCollapse>
        <CartContainer
          onClick={() => {
            if (matches) {
              navigateToCart();
            }
          }}
        >
          <CartButton
            borderRadius="50%"
            width="44px"
            height="44px"
            onClick={switchOpenCloseCartList}
          >
            <CartButtonContentContainer>
              <span>{_countGoodsInCartAndCost.countGoods}</span>
              <AiOutlineShoppingCart />
            </CartButtonContentContainer>
          </CartButton>

          <CartInfoPrice>
            {`${_countGoodsInCartAndCost.totalCost} `}
            UAH
          </CartInfoPrice>

          {!matches && (
            <CheckoutButton
              borderRadius="25px"
              height="50px"
              onClick={navigateToCart}
            >
              Checkout
            </CheckoutButton>
          )}
        </CartContainer>
        <CollapsedOrderListContainer isOpened={isCartListOpen}>
          <MinifiedOrderList />
        </CollapsedOrderListContainer>
      </WrapperForCollapse>
    );
  }, [_countGoodsInCartAndCost, navigate, matches, isCartListOpen]);

  if (matches) {
    return (
      <Portal mountTo={PortalContainersIDs.MOBILE_CART_CONTAINER}>
        {_countGoodsInCartAndCost.countGoods ? component : null}
      </Portal>
    );
  }

  return component;
});

Cart.displayName = 'Cart';

export default Cart;
