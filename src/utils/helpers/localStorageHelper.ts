import KeysOfLocalStorage from '../constants/keysOfLocalstorage';

export const writeToLocalStorage = (key: KeysOfLocalStorage, value: Object | string | number) => {
  const stringRepresentationOfObjct = value.toString();

  localStorage.setItem(
    key,
    stringRepresentationOfObjct,
  );
};

export const readFromLocalStorage = (key: KeysOfLocalStorage) => {
  return localStorage.getItem(key) || null;
};

export const removeFromLocalStorage = (key: KeysOfLocalStorage) => {
  localStorage.removeItem(key);
};
