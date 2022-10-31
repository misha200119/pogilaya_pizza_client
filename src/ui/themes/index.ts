// eslint-disable-next-line no-shadow
export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  mode: string;
}

export const themes: {[key: string]: Theme} = {
  [Themes.DARK]: {
    primary: '#000',
    secondary: '#111',
    background: '#DDDDDD',
    mode: 'dark',
  },
  [Themes.LIGHT]: {
    primary: '#000',
    secondary: '#222',
    background: '#fff',
    mode: 'light',
  },
};
