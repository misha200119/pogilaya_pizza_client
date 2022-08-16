import React, { memo, FC, Dispatch } from 'react';
import styled from 'styled-components';
import { Size } from '../../../../utils/types/pizza';
import SwitchButtonSelector from '../SwitchButtonSelector';

const Container = memo(styled.div`
  display: flex;
  margin-bottom: 15px;
`);

interface Props {
  currentSize: Size;
  setCurrentSize: Dispatch<React.SetStateAction<Size>>;
  sizes: Array<Size>;
}

const PizzaSizes: FC<Props> = memo(({
  sizes,
  currentSize,
  setCurrentSize,
}) => {
  return (
    <Container>
      <SwitchButtonSelector
        display="flex"
        flexDirection="row"
        buttonsBorderRadius="20px"
        gap="5px"
        values={sizes}
        currentValue={currentSize}
        setCurrentValue={setCurrentSize}
      />
    </Container>
  );
});

export default PizzaSizes;
