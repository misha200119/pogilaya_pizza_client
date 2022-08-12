/* eslint-disable no-shadow */
export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

export enum PizzaSize {
  THIN = 'thin',
  STANDART = 'standart',
  PHILADELPHY = 'philadelphy',
  BOARD_HOT_DOG = 'board hot dog',
}

interface Pizza {
  image: string;
  sizes: Array<Size>;
  pizzaSizes: Array<PizzaSize>;
  cost: number;
  toppings: string;
  name: string;
}

export default Pizza;
