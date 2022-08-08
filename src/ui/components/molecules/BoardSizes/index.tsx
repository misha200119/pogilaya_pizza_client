import React, { memo, FC, Dispatch } from 'react';
import styled from 'styled-components';
import { BoardSize } from '../../../../utils/types/pizza';

const Container = memo(styled.div`
  display: flex;
  margin-bottom: 15px;
`);

// const StyledBoardSizeButton = memo(styled(Button)`

// `);

interface Props {
  boardSizes: Array<BoardSize>;
  currentBoardSize: BoardSize;
  setCurrentBoardSize: Dispatch<React.SetStateAction<BoardSize>>;
}

const BoardSizes: FC<Props> = memo(() => {
  return (
    <Container>
      BoardSizes
    </Container>
  );
});

export default BoardSizes;
