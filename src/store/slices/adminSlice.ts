/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
import { RootState } from '..';
import { AnaliticsData } from '../../utils/models/admin/salesAnaliticsData';
import IOrder from '../../utils/models/order/IOrder';
import AdminAnalitics from '../../utils/services/adminAnalitics';
import OrderService from '../../utils/services/order';
import PartialIOrder from '../../utils/types/partialIOrder';

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

export const patchOrder = createAsyncThunk('admin/patchOrder', async (data: {id: string, fields: PartialIOrder}, _thunkAPI) => {
  try {
    const { id, fields } = data;

    await OrderService.patchOrder(id, fields);

    return _thunkAPI.fulfillWithValue(data);
  } catch (error) {
    const typedError = error as AxiosError;

    return _thunkAPI.rejectWithValue(
      `CODE: ${typedError.code}
      MESSAGE: ${typedError.message}`,
    );
  }
});

export const deleteOrder = createAsyncThunk('admin/deleteOrder', async (id: string, _thunkAPI) => {
  try {
    await OrderService.deleteOrder(id);

    return _thunkAPI.fulfillWithValue(id);
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
      state.salesAnalitics = _action.payload as unknown as Array<[string, AnaliticsData[]]>;
      state.isLoadingData = false;
    });

    builder.addCase(fetchOrers.pending, (state) => {
      state.isLoadingData = true;
    });
    builder.addCase(fetchOrers.rejected, (state) => {
      state.isLoadingData = false;
    });
    builder.addCase(fetchOrers.fulfilled, (state, _action) => {
      const typedOrders = _action.payload as unknown as Array<IOrder>;

      typedOrders.forEach((order) => {
        order.date = moment(order.date);
      });

      state.orders = typedOrders;
      state.isLoadingData = false;
    });

    builder.addCase(patchOrder.pending, (state) => {
      state.isLoadingData = true;
    });
    builder.addCase(patchOrder.rejected, (state, _action) => {
      state.isLoadingData = false;
      toast.error(_action.payload as string);
    });
    builder.addCase(patchOrder.fulfilled, (state, _action) => {
      if (state.orders) {
        const { id, fields } = _action.payload as unknown as {
          id: string;
          fields: Partial<IOrder>;
        };

        const orderById = state.orders.find((order) => order._id === id);

        if (orderById) {
          const keys = Object.keys(fields) as Array<keyof Partial<IOrder>>;

          // eslint-disable-next-line no-restricted-syntax
          for (const key of keys) {
            orderById[key] = fields[key] as never;
          }

          state.isLoadingData = false;
          toast.success('Order succesfully patched');
        }
      }
    });

    builder.addCase(deleteOrder.pending, (state) => {
      state.isLoadingData = true;
    });
    builder.addCase(deleteOrder.rejected, (state, _action) => {
      state.isLoadingData = false;
      toast.error(_action.payload as string);
    });
    builder.addCase(deleteOrder.fulfilled, (state, _action) => {
      if (state.orders) {
        const orderId = _action.payload as unknown as string;

        state.orders = state.orders.filter((order) => order._id !== orderId);
        state.isLoadingData = false;
        toast.success('Order succesfully deleted');
      }
    });
  },
});

export const salesAnalitics = (state: RootState) => state.admin.salesAnalitics;
export const orders = (state: RootState) => state.admin.orders;
export const isLoadingData = (state: RootState) => state.admin.isLoadingData;

export default adminSLice.reducer;
