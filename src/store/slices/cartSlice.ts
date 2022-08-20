import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import Good from '../../utils/types/good';
import Pizza from '../../utils/types/pizza';

interface MapOfSelectedProducts {
  [key: string]: Pizza;
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
      const prevState = state.mapOfProducts[action.payload.name];
      if (isNaN(prevState)) {

      }
    }
  }
});

// export const  // thete should be a cart actions

export const cartProducts = (state: RootState) => state.cart.mapOfProducts;

export default cartSlice.reducer;
