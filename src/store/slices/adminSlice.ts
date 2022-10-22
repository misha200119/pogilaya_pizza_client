/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState } from '..';
import { AnaliticsData } from '../../utils/models/admin/salesAnaliticsData';
import AdminAnalitics from '../../utils/services/adminAnalitics';

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

interface AdminState {
  salesAnalitics: Array<[string, AnaliticsData[]]> | null;
  isLoadingData: boolean;
}
const initialState: AdminState = {
  salesAnalitics: null,
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
  },
});

export const salesAnalitics = (state: RootState) => state.admin.salesAnalitics;
export const isLoadingData = (state: RootState) => state.admin.isLoadingData;

export default adminSLice.reducer;
