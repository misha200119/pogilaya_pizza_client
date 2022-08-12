import React, { memo, FC, Dispatch } from 'react';
import styled from 'styled-components';
import { PizzaSize } from '../../../../utils/types/pizza';

const Container = memo(styled.div`
  display: flex;
  margin-bottom: 15px;
`);

// const StyledBoardSizeButton = memo(styled(Button)`

// `);

interface Props {
  boardSizes: Array<PizzaSize>;
  currentBoardSize: PizzaSize;
  setCurrentBoardSize: Dispatch<React.SetStateAction<PizzaSize>>;
}

const PizzaSizes: FC<Props> = memo(() => {
  return (
    <Container>
      from container
    </Container>
  );
});

export default PizzaSizes;
