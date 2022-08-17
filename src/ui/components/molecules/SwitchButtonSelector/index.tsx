import React, {
  FC, memo,
} from 'react';
import styled from 'styled-components';
import Button from '../../athoms/Button';

interface SwitchButtonsSelectorContainerProps {
  display: string;
  flexDirection: string;
  gridColumnsCount: string;
  gap: string;
  buttonsBorderRadius: string;
}

const SwitchButtonsSelectorContainer = memo(styled.div<SwitchButtonsSelectorContainerProps>`
  display: ${({ display }) => display};
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection};
  grid-template-columns: ${({ gridColumnsCount }) => `repeat(${gridColumnsCount}, 1fr)`};
  grid-gap: ${({ gap }) => gap};
  width: 100%;
  `);

interface SwitchButtonProps {
  border: string;
  padding: string;
  borderRadius: string;
}

const SwitchButton = memo(styled(Button)<SwitchButtonProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};

  cursor: pointer;
`);

interface Props {
  values: Array<any>;
  currentValue: any;
  setCurrentValue: any;

  display: 'flex' | 'grid';

  flexDirection?: 'row' | 'column';
  gridColumnsCount?: string;

  gap: string;
  buttonsBorderRadius: string;
}

const SwitchButtonSelector: FC<Props> = memo(({
  display,
  flexDirection = 'unset',
  gridColumnsCount = '1',
  gap,

  values,
  currentValue,
  setCurrentValue,

  buttonsBorderRadius,
}) => {
  return (
    <SwitchButtonsSelectorContainer
      display={display}
      flexDirection={flexDirection}
      gridColumnsCount={gridColumnsCount}
      gap={gap}
    >
      {
        values.map((value) => (
          <SwitchButton
            disabled={value === currentValue}
            key={value}
            borderRadius={buttonsBorderRadius}
            onClick={() => {
              setCurrentValue(value);
            }}
          >
            {value}
          </SwitchButton>
        ))
      }
    </SwitchButtonsSelectorContainer>
  );
});

export default SwitchButtonSelector;
