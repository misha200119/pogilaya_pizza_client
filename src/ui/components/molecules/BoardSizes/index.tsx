import React, { memo, FC, Dispatch } from 'react';
import { BoardSize } from '../../../../utils/types/pizza';

interface Props {
  boardSizes: Array<BoardSize>;
  currentBoardSize: BoardSize;
  setCurrentBoardSize: Dispatch<React.SetStateAction<BoardSize>>;
}
const BoardSizes: FC<Props> = memo(() => {
  return (
    <div></div>
  );
});

export default BoardSizes;
