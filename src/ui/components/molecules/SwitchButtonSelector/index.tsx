import React, {
  FC, memo,
} from 'react';
import styled from 'styled-components';

interface SwitchButtonsSelectorContainerProps {
  display: string;
  flexDirection: string;
  gap: string;
  buttonsBorderRadius: string;
}

const SwitchButtonsSelectorContainer = memo(styled.div<SwitchButtonsSelectorContainerProps>`
  display: ${({ display }) => display};
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection};
  grid-gap: ${({ gap }) => gap};
  width: 100%;
  `);

interface SwitchButtonProps {
  border: string;
  padding: string;
  borderRadius: string;
}

const SwitchButton = memo(styled.button<SwitchButtonProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  border-radius: ${({ borderRadius }) => borderRadius};

  cursor: pointer;
`);

interface Props {
  values: Array<any>;
  currentValue: any;
  setCurrentValue: any;

  display: 'flex' | 'grid';

  flexDirection: 'row' | 'column';
  gap: string;
  buttonsBorderRadius: string;
}

const SwitchButtonSelector: FC<Props> = memo(({
  display,
  flexDirection,
  gap,

  values,
  /* currentValue,
  setCurrentValue, */

  buttonsBorderRadius,
}) => {
  return (
    <SwitchButtonsSelectorContainer
      display={display}
      flexDirection={flexDirection}
      gap={gap}
    >
      {
        values.map((value) => (
          <SwitchButton
            key={value}
            border="1px solid yellow"
            borderRadius={buttonsBorderRadius}
          >
            {value}
          </SwitchButton>
        ))
      }
    </SwitchButtonsSelectorContainer>
  );
});

export default SwitchButtonSelector;
