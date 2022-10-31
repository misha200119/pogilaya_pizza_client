/* eslint-disable @typescript-eslint/no-explicit-any */
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
  width: 100%;

  font-weight: 600;
  font-size: 14px;

  display: ${({ display }) => display};
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection};
  grid-template-columns: ${({ gridColumnsCount }) => `repeat(${gridColumnsCount}, 1fr)`};
  grid-gap: ${({ gap }) => gap};
  `);

interface SwitchButtonProps {
  height: string;
  border: string;
  padding: string;
  borderRadius: string;
  color: string;
  backgroundColor: string;
  selected: boolean;
  colorOnSelected: string;
  backgroundColorOnSelected: string;
  colorOnHover: string;
  backgroundColorOnHover: string;
  buttonContentGap?: string;
}

const SwitchButton = memo(styled(Button)<SwitchButtonProps>`
  width: 100%;
  height: ${({ height }) => height || 'auto'};

  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: ${({ buttonContentGap }) => buttonContentGap || '0'};
  padding: ${({ padding }) => padding};

  border: 1px solid #e0e0e0;
  border-radius: ${({ borderRadius }) => borderRadius};

  color: ${({ selected, colorOnSelected, color }) => (selected ? colorOnSelected : color)};
  font-weight: inherit;
  font-size: inherit;

  background-color: ${({ selected, backgroundColorOnSelected, backgroundColor }) => (selected ? backgroundColorOnSelected : backgroundColor)};

  & svg {
    fill: ${({ selected, colorOnSelected, color }) => (selected ? colorOnSelected : color)};
  }

  &:hover {
    & svg {
    fill: ${({ colorOnHover }) => colorOnHover};
    }
    color: ${({ colorOnHover }) => colorOnHover};
    background-color: ${({ backgroundColorOnHover }) => backgroundColorOnHover};
  }

  transition: all 0.3s ease;

  cursor: pointer;
`);

type Values = Array<{value: any, displayed: JSX.Element}>;

interface Props {
  values: Values;
  currentValue: any;
  setCurrentValue: any;

  display: 'flex' | 'grid';

  flexDirection?: 'row' | 'column';
  gridColumnsCount?: string;

  gap: string;
  buttonsBorderRadius: string;
  buttonsHeight?: string;
  buttonContentGap?: string;

  color: string;
  backgroundColor: string;
  colorOnSelected: string;
  backgroundColorOnSelected: string;
  colorOnHover: string;
  backgroundColorOnHover: string;
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
  buttonsHeight,
  buttonContentGap,

  color,
  backgroundColor,
  colorOnSelected,
  backgroundColorOnSelected,
  colorOnHover,
  backgroundColorOnHover,
}) => {
  return (
    <SwitchButtonsSelectorContainer
      display={display}
      flexDirection={flexDirection}
      gridColumnsCount={gridColumnsCount}
      gap={gap}
    >
      {
        values.map(({ value, displayed }) => (
          <SwitchButton
            selected={value === currentValue}
            disabled={value === currentValue}
            key={value}
            borderRadius={buttonsBorderRadius}
            buttonContentGap={buttonContentGap}
            onClick={() => {
              setCurrentValue(value);
            }}
            height={buttonsHeight}
            color={color}
            backgroundColor={backgroundColor}
            colorOnSelected={colorOnSelected}
            backgroundColorOnSelected={backgroundColorOnSelected}
            colorOnHover={colorOnHover}
            backgroundColorOnHover={backgroundColorOnHover}
          >
            {displayed}
          </SwitchButton>
        ))
      }
    </SwitchButtonsSelectorContainer>
  );
});

export default SwitchButtonSelector;
