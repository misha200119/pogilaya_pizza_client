import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
// eslint-disable-next-line import/no-cycle
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
