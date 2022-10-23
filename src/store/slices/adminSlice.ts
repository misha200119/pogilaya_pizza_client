/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState } from '..';
import { AnaliticsData } from '../../utils/models/admin/salesAnaliticsData';
import IOrder from '../../utils/models/order/IOrder';
import AdminAnalitics from '../../utils/services/adminAnalitics';
import OrderService from '../../utils/services/order';

export const fetchAnalitics = createAsyncThunk('admin/fetchAnalitics', async (_, _thunkAPI) => {
  try {
    const response = await AdminAnalitics.salesStatistic();

    return _thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    const typedError = error as AxiosError;

    return _thunkAPI.rejectWithValue(
      `CODE: ${typedError.code}
      MESSAGE: ${typedError.message}`,
    );
  }
});

export const fetchOrers = createAsyncThunk('admin/fetchOrders', async (_, _thunkAPI) => {
  try {
    const response = await OrderService.fetchOrders();

    return _thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    const typedError = error as AxiosError;

    return _thunkAPI.rejectWithValue(
      `CODE: ${typedError.code}
      MESSAGE: ${typedError.message}`,
    );
  }
});

interface AdminState {
  salesAnalitics: Array<[string, AnaliticsData[]]> | null;
  orders: Array<IOrder> | null;
  isLoadingData: boolean;
}
const initialState: AdminState = {
  salesAnalitics: null,
  orders: null,
  isLoadingData: true,
};

export const adminSLice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchAnalitics.pending, (state) => {
      state.isLoadingData = true;
    });
    builder.addCase(fetchAnalitics.rejected, (state) => {
      state.isLoadingData = false;
    });
    builder.addCase(fetchAnalitics.fulfilled, (state, _action) => {
      state.isLoadingData = false;

      state.salesAnalitics = _action.payload as unknown as Array<[string, AnaliticsData[]]>;
    });

    builder.addCase(fetchOrers.pending, (state) => {
      state.isLoadingData = true;
    });
    builder.addCase(fetchOrers.rejected, (state) => {
      state.isLoadingData = false;
    });
    builder.addCase(fetchOrers.fulfilled, (state, _action) => {
      state.isLoadingData = false;

      state.orders = _action.payload as unknown as Array<IOrder>;
    });
  },
});

export const salesAnalitics = (state: RootState) => state.admin.salesAnalitics;
export const orders = (state: RootState) => state.admin.orders;
export const isLoadingData = (state: RootState) => state.admin.isLoadingData;

export default adminSLice.reducer;
