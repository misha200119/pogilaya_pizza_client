// eslint-disable-next-line no-shadow
export enum Themes {
  DARK,
  LIGHT,
}

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  mode: string;
}

export const themes: {[key: string]: Theme} = {
  [Themes.DARK]: {
    primary: '#fff',
    secondary: '#999',
    background: '#000',
    mode: 'dark',
  },
  [Themes.LIGHT]: {
    primary: '#000',
    secondary: '#999',
    background: '#fff',
    mode: 'light',
  },
};
