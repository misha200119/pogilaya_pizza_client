import React, {
  FC, Dispatch, SetStateAction, memo,
} from 'react';
// import styled from 'styled-components';

interface Props {
  values: Array<any>;
  currentValue: any;
  setCurrentValue: Dispatch<SetStateAction<any>>;

  direction: 'row' | 'columnn';
  gap: string;
  borderRadius: string;
}

// interface ContainerProps {
//   direction: string;
//   gap: string;
//   borderRadius: string;
// }

// const SwitchButtonsSelectorContainer = memo(styled.div<ContainerProps>`
//   display: flex;
// `);

export const SwitchButtonSelector: FC<Props> = memo(() => {
  return (
    <div>
      SwitchButtonSelector
    </div>
  );
});
