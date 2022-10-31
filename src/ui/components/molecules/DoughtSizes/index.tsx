import React, {
  memo, FC, Dispatch, useMemo,
} from 'react';
import styled from 'styled-components';
import { DoughSize } from '../../../../utils/types/pizza';
import SwitchButtonSelector from '../SwitchButtonSelector';

const Container = memo(styled.div`
  display: flex;
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
  const mappedDought = useMemo(() => {
    return sizes.map((value) => ({ value, displayed: <>{value}</> }));
  }, [sizes]);

  return (
    <Container>
      <SwitchButtonSelector
        display="grid"
        gridColumnsCount="2"
        buttonsHeight="30px"
        gap="10px"
        values={mappedDought}
        currentValue={currentSize}
        setCurrentValue={setCurrentSize}
        buttonsBorderRadius="20px"
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

export default DoughtSizes;
