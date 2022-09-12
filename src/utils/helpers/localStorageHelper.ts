import KeysOfLocalStorage from '../constants/keysOfLocalstorage';

export const writeToLocalStorage = (key: KeysOfLocalStorage, value: string) => {
  const stringRepresentationOfObjct = value.toString();

  localStorage.setItem(
    key,
    stringRepresentationOfObjct,
  );
};
