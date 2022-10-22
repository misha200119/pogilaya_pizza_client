/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import themeReducer from './slices/themeSlice';
import authReducer from './slices/userAuthSlice';
import adminReducer from './slices/adminSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    auth: authReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
