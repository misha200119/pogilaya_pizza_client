/* eslint-disable no-shadow */
export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

export enum BoardSize {
  THIN = 'thin',
  STANDART = 'standart',
  PHILADELPHY = 'philadelphy',
  BOARD_HOT_DOG = 'board hot dog',
}

interface Pizza {
  image: string;
  sizes: Array<Size>;
  boardSizes: Array<BoardSize>;
  cost: number;
  toppings: string;
  name: string;
}

export default Pizza;
