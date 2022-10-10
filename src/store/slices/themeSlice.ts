/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Theme, themes, Themes } from '../../ui/themes';
import KeysOfLocalStorage from '../../utils/constants/keysOfLocalstorage';
import { writeToLocalStorage, readFromLocalStorage } from '../../utils/helpers/localStorageHelper';

interface ThemeState {
  currentTheme: Theme;
}

const isCurrentSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// eslint-disable-next-line max-len
const initialTheme = themes[readFromLocalStorage(KeysOfLocalStorage.THEME) || isCurrentSystemThemeDark ? Themes.DARK : Themes.LIGHT];

const initialState: ThemeState = {
  currentTheme: initialTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      const settedTheme = state.currentTheme.mode === 'dark' ? Themes.LIGHT : Themes.DARK;

      // eslint-disable-next-line no-param-reassign
      state.currentTheme = themes[settedTheme];
      writeToLocalStorage(KeysOfLocalStorage.THEME, settedTheme);
    },
  },
});

export const currentTheme = (state: RootState) => state.theme.currentTheme;

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
