/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { RootState } from '..';
import { IUser } from '../../utils/models/user/IUser';
import { LoginCredentials } from '../../utils/types/loginCredentials';
import AuthService from '../../utils/services/auth';
import { removeFromLocalStorage, writeToLocalStorage } from '../../utils/helpers/localStorageHelper';
import KeysOfLocalStorage from '../../utils/constants/keysOfLocalstorage';

interface UserAuthState {
  user: IUser | null;
  isTryingLogin: boolean;
  isTryingLogout: boolean;
}

const initialState: UserAuthState = {
  user: null,
  isTryingLogin: false,
  isTryingLogout: false,
};

export const login = createAsyncThunk('userAuth/login', async (payload: LoginCredentials, _thunkAPI) => {
  try {
    const { login: _login, password } = payload;

    const response = await AuthService.login(_login, password);

    writeToLocalStorage(KeysOfLocalStorage.ACCESS_TOKEN, response.data.accessToken);

    return _thunkAPI.fulfillWithValue(response.data.user);
  } catch (error) {
    const typedError = error as AxiosError;

    return _thunkAPI.rejectWithValue(
      `CODE: ${typedError.code} ${typedError.message}`,
    );
  }
});

export const register = createAsyncThunk('userAuth/register', async (payload: LoginCredentials, _thunkAPI) => {
  try {
    const { login: _login, password } = payload;

    const response = await AuthService.registration(_login, password);

    writeToLocalStorage(KeysOfLocalStorage.ACCESS_TOKEN, response.data.accessToken);

    return _thunkAPI.fulfillWithValue(response.data.user);
  } catch (error) {
    const typedError = error as AxiosError;

    return _thunkAPI.rejectWithValue(
      `CODE: ${typedError.code} ${typedError.message}`,
    );
  }
});

export const logout = createAsyncThunk('userAuth/logout', async (_: undefined, _thunkAPI) => {
  try {
    const response = await AuthService.logout();

    removeFromLocalStorage(KeysOfLocalStorage.ACCESS_TOKEN);

    return _thunkAPI.fulfillWithValue(true);
  } catch (error) {
    const typedError = error as AxiosError;

    return _thunkAPI.rejectWithValue(
      `CODE: ${typedError.code} ${typedError.message}`,
    );
  }
});

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.isTryingLogin = true;
    });
    builder.addCase(login.rejected, (state, _action) => {
      state.isTryingLogin = false;
      toast.error(_action.payload as string);
    });
    builder.addCase(login.fulfilled, (state, _action) => {
      state.isTryingLogin = false;
      state.user = _action.payload.payload;
      toast.success('Login succesful');
    });

    builder.addCase(register.pending, (state) => {
      state.isTryingLogin = true;
    });
    builder.addCase(register.rejected, (state, _action) => {
      state.isTryingLogin = false;
      toast.error(_action.payload as string);
    });
    builder.addCase(register.fulfilled, (state, _action) => {
      state.isTryingLogin = false;
      state.user = _action.payload.payload;
      toast.success('Register succesful');
    });

    builder.addCase(logout.pending, (state) => {
      state.isTryingLogout = true;
    });
    builder.addCase(logout.rejected, (state, _action) => {
      state.isTryingLogout = false;
      toast.error(_action.payload as string);
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isTryingLogout = false;
      toast.success('Logout succesful');
    });
  },
});

export const isAuth = (state: RootState) => !!(state.auth.user);
export const user = (state: RootState) => state.auth.user;
export const isTryingLogin = (state: RootState) => state.auth.isTryingLogin;
export const isTryingLogout = (state: RootState) => state.auth.isTryingLogout;

export default userAuthSlice.reducer;