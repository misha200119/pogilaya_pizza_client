import React, {
  memo, FC, useMemo, useCallback, useState,
} from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
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

const CollapsedOrderListContainer = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 1px;

  transform-origin: top;  
  transform-style: flat;
`;

const WrapperForCollapse = memo(styled.div`
  position: relative;

  ${CollapsedOrderListContainer} {
    animation-name: rotate;
    animation-duration: 0.8s;
    animation-delay: 0s;
  }

  @keyframes rotate {
    0% {
      transform: scaleY(0);
      /* transform: rotate(0); */
    }
    100% {
      transform: scaleY(1);
      /* transform: rotate(360deg); */
    }
  }
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
  const matches = useMediaQuery(`(max-width:${config.tablet}px)`);
  const navigateToCart = useCallback(() => {
    navigate(Routes.Checkout);
  }, [navigate]);
  const [isCartListOpen, setIsCartListOpen] = useState(false);
  const switchOpenCloseCartList = useCallback(() => {
    setIsCartListOpen((prev) => !prev);
  }, []);

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
        {isCartListOpen && (
          <CollapsedOrderListContainer className="123">
            <MinifiedOrderList />
          </CollapsedOrderListContainer>
        )}
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

export default Cart;
