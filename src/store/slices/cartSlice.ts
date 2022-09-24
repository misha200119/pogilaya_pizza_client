/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import KeysOfLocalStorage from '../../utils/constants/keysOfLocalstorage';
import Good from '../../utils/types/good';
import PizzaInCart from '../../utils/types/pizzaInCart';
import { writeToLocalStorage } from '../../utils/helpers/localStorageHelper';
import { Order } from '../../utils/api/index';

interface MapOfSelectedProducts {
  [key: string]: number;
}

interface CartState {
  mapOfProducts: MapOfSelectedProducts;
}

// eslint-disable-next-line max-len
const cartMapFromLocalStorage = localStorage.getItem(KeysOfLocalStorage.CART_MAP_OF_PRODUCTS);

let initialState: CartState;

if (cartMapFromLocalStorage) {
  initialState = {
    mapOfProducts: JSON.parse(cartMapFromLocalStorage),
  };
} else {
  initialState = {
    mapOfProducts: {},
  };
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addGood: (state, action: PayloadAction<Good | PizzaInCart>) => {
      const goodAsString = JSON.stringify(action.payload);
      const prevValueCatchedGood = state.mapOfProducts[goodAsString];

      // eslint-disable-next-line no-restricted-globals
      if (isNaN(prevValueCatchedGood)) {
        state.mapOfProducts[goodAsString] = 0;
      }

      state.mapOfProducts[goodAsString] += 1;

      writeToLocalStorage(
        KeysOfLocalStorage.CART_MAP_OF_PRODUCTS,
        JSON.stringify(state.mapOfProducts),
      );
    },
    removeGood: (state, action: PayloadAction<Good>) => {
      const goodAsString = JSON.stringify(action.payload);
      const prevValueCatchedGood = state.mapOfProducts[goodAsString];

      // eslint-disable-next-line no-restricted-globals
      if (isNaN(prevValueCatchedGood)) {
        throw new Error('Can\'t remove count of item from unexist value');
      }

      state.mapOfProducts[goodAsString] -= 1;

      if (state.mapOfProducts[goodAsString] === 0) {
        delete state.mapOfProducts[goodAsString];
      }

      writeToLocalStorage(
        KeysOfLocalStorage.CART_MAP_OF_PRODUCTS,
        JSON.stringify(state.mapOfProducts),
      );
    },
    removeFullyGood: (state, action: PayloadAction<Good>) => {
      const goodAsString = JSON.stringify(action.payload);

      delete state.mapOfProducts[goodAsString];

      writeToLocalStorage(
        KeysOfLocalStorage.CART_MAP_OF_PRODUCTS,
        JSON.stringify(state.mapOfProducts),
      );
    },
  },
});

export const { addGood, removeGood, removeFullyGood } = cartSlice.actions;

export const doOrder = createAsyncThunk(
  'cart/doOrder',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (data: Object, _thunkAPI) => {
    try {
      await Order.newOrder(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  },
);

export const cartProducts = (state: RootState) => state.cart.mapOfProducts;

export const countGoodsInCartAndCost = (state: RootState) => {
  const { mapOfProducts: cartProductsMap } = state.cart;

  let countGoods = 0;
  let totalCost = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(cartProductsMap)) {
    countGoods += cartProductsMap[key];
    totalCost += (JSON.parse(key) as PizzaInCart).cost * cartProductsMap[key];
  }

  return { countGoods, totalCost: (totalCost.toFixed(2)) };
};

export default cartSlice.reducer;
