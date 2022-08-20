/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import KeysOfLocalStorage from '../../utils/constants/keysOfLocalstorage';
import Good from '../../utils/types/good';

interface MapOfSelectedProducts {
  [key: string]: number;
}

interface CartState {
  mapOfProducts: MapOfSelectedProducts;
}

const initialState: CartState = {
  mapOfProducts: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGood: (state, action: PayloadAction<Good>) => {
      const prevValue = state.mapOfProducts[action.payload.name];

      if (Number.isNaN(prevValue)) {
        state.mapOfProducts[action.payload.name] = 0;
      }

      state.mapOfProducts[action.payload.name] += 1;

      localStorage.setItem(
        KeysOfLocalStorage.CART_MAP_OF_PRODUCTS,
        JSON.stringify(state.mapOfProducts),
      );
    },
    removeGood: (state, action: PayloadAction<Good>) => {
      const prevValue = state.mapOfProducts[action.payload.name];

      if (Number.isNaN(prevValue)) {
        throw new Error('Can\'t remove count of item from unexist value');
      }

      state.mapOfProducts[action.payload.name] -= 1;

      localStorage.setItem(
        KeysOfLocalStorage.CART_MAP_OF_PRODUCTS,
        JSON.stringify(state.mapOfProducts),
      );
    },
  },
});

export const { addGood, removeGood } = cartSlice.actions;

export const cartProducts = (state: RootState) => state.cart.mapOfProducts;

export default cartSlice.reducer;
