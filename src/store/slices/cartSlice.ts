/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import type { RootState } from '..';
import KeysOfLocalStorage from '../../utils/constants/keysOfLocalstorage';
import Good from '../../utils/types/good';
import PizzaInCart from '../../utils/types/pizzaInCart';
import { writeToLocalStorage, readFromLocalStorage } from '../../utils/helpers/localStorageHelper';
import OrderDetails from '../../utils/types/orderDetails';
import OrderService from '../../utils/services/order';

interface MapOfSelectedProducts {
  [key: string]: number;
}

interface CartState {
  mapOfProducts: MapOfSelectedProducts;
  isLoadingOrderRequest: boolean;
}

const cartMapFromLocalStorage = readFromLocalStorage(KeysOfLocalStorage.CART_MAP_OF_PRODUCTS);

let initialState: CartState = {
  isLoadingOrderRequest: false,
  mapOfProducts: {},
};

if (cartMapFromLocalStorage) {
  initialState = {
    ...initialState,
    mapOfProducts: JSON.parse(cartMapFromLocalStorage),
  };
} else {
  initialState = {
    ...initialState,
    mapOfProducts: {},
  };
}

export const cartProducts = (state: RootState) => state.cart.mapOfProducts;

export const isLoadingOrderRequest = (state: RootState) => state.cart.isLoadingOrderRequest;

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

export const doOrder = createAsyncThunk(
  'cart/doOrder',
  async (orderDetails: Omit<OrderDetails, 'totalCost'>, _thunkAPI) => {
    try {
      const rootState = _thunkAPI.getState() as RootState;
      const { cart } = rootState;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { totalCost } = countGoodsInCartAndCost(rootState);

      if (Object.keys(cart.mapOfProducts).length === 0) {
        return _thunkAPI.rejectWithValue('Cart is empty');
      }

      const emptyFields = [];
      const fields = Object.keys(orderDetails);

      // eslint-disable-next-line no-restricted-syntax
      for (const key of fields) {
        if (!orderDetails[key as keyof Omit<OrderDetails, 'totalCost'>]) {
          emptyFields.push(key);
        }
      }

      if (emptyFields.length) {
        return _thunkAPI.rejectWithValue(`Firstly fill that fields: [${emptyFields.join(', ')}]`);
      }

      await OrderService.newOrder(cart.mapOfProducts, { ...orderDetails, totalCost });

      return _thunkAPI.fulfillWithValue(true);
    } catch (error) {
      const typedError = error as AxiosError;

      return _thunkAPI.rejectWithValue(
        `CODE: ${typedError.code} ${typedError.message}`,
      );
    }
  },
);

const cartSlice = createSlice({
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
  extraReducers: (builder) => {
    builder.addCase(doOrder.pending, (state) => {
      state.isLoadingOrderRequest = true;
    });
    builder.addCase(doOrder.rejected, (state, _action) => {
      state.isLoadingOrderRequest = false;
      toast.error(_action.payload as string);
    });
    builder.addCase(doOrder.fulfilled, (state) => {
      state.isLoadingOrderRequest = false;
      toast.success('Order successful!');
    });
  },
});

export const {
  addGood, removeGood, removeFullyGood,
} = cartSlice.actions;

export default cartSlice.reducer;
