import React, { memo, FC, Dispatch } from 'react';
import styled from 'styled-components';
import { DoughSize } from '../../../../utils/types/pizza';
import SwitchButtonSelector from '../SwitchButtonSelector';

const Container = memo(styled.div`
  display: flex;
  margin-bottom: 15px;
`);

interface Props {
  currentSize: DoughSize;
  setCurrentSize: Dispatch<React.SetStateAction<DoughSize>>;
  sizes: Array<DoughSize>;
}

const DoughtSizes: FC<Props> = memo(({
  sizes,
  currentSize,
  setCurrentSize,
}) => {
  return (
    <Container>
      <SwitchButtonSelector
        display="grid"
        gridColumnsCount="2"
        gap="10px"
        values={sizes}
        currentValue={currentSize}
        setCurrentValue={setCurrentSize}
        buttonsBorderRadius="20px"
      />
    </Container>
  );
});

export default DoughtSizes;
