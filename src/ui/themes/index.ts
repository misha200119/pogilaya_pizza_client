// eslint-disable-next-line no-shadow
export enum Themes {
  DARK,
  LIGHT,
}

export const themes = {
  [Themes.DARK]: {
    primary: '#fff',
    secondary: '#999',
    background: '#000',
  },
  [Themes.LIGHT]: {
    primary: '#000',
    secondary: '#999',
    background: '#fff',
  },
};
