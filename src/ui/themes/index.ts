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
    primary: '#ffffff',
    secondary: '#222',
    background: '#111',
    mode: 'dark',
  },
  [Themes.LIGHT]: {
    primary: '#000000',
    secondary: '#222',
    background: 'rgb(248, 248, 248)',
    mode: 'light',
  },
};
