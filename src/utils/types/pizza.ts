import Good from './good';

/* eslint-disable no-shadow */
export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

export enum DoughSize {
  THIN = 'thin',
  STANDART = 'standart',
  PHILADELPHY = 'philadelphy',
  BOARD_HOT_DOG = 'board hot dog',
}

interface Pizza extends Good {
  image: string;
  sizes: Array<Size>;
  doughSizes: Array<DoughSize>;
  cost: number;
  toppings: string;
}

export default Pizza;
