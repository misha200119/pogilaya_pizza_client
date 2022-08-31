import KeysOfLocalStorage from '../constants/keysOfLocalstorage';

export const writeToLocalStorage = (key: KeysOfLocalStorage, value: string) => {
  localStorage.setItem(
    key,
    JSON.stringify(value),
  );
};
