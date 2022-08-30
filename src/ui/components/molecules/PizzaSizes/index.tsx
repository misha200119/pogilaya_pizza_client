import React, {
  memo, FC, Dispatch, useMemo,
} from 'react';
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
  const mappedSizes = useMemo(() => {
    return sizes.map((value) => ({ value, displayed: <>{value}</> }));
  }, [sizes]);

  return (
    <Container>
      <SwitchButtonSelector
        display="flex"
        flexDirection="row"
        buttonsBorderRadius="20px"
        gap="5px"
        values={mappedSizes}
        currentValue={currentSize}
        setCurrentValue={setCurrentSize}
        color="#000"
        backgroundColor="#f8f8f8"
        colorOnSelected="#fff"
        backgroundColorOnSelected="#4f4f4f"
        colorOnHover="#fff"
        backgroundColorOnHover="#1a1919"
      />
    </Container>
  );
});

export default PizzaSizes;
