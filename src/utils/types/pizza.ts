/* eslint-disable no-shadow */
enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

enum BoardSize {
  THIN = 'thin',
  STANDART = 'standart',
  PHILADELPHY = 'philadelphy',
  BOARD_HOT_DOG = 'board hot dog',
}

interface Pizza {
  image: string;
  sizes: Array<Size>;
  boardSize: BoardSize;
  cost: number;
  toppings: string;
}

export default Pizza;
