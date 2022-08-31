import React, {
  memo, FC,
} from 'react';
import styled from 'styled-components';

interface ControlledInputProps {
  height?: string;
}

const ControlledInputContainer = memo(styled.div<ControlledInputProps>`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
`);

interface StyledCOntrolledInputProps {
  border: string;
  borderRadius: string;
  borderOnHover: string;
}

const StyledControlledInput = memo(styled.input<StyledCOntrolledInputProps>`
  width: 100%;
  height: 100%;

  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  &:hover {
    border: ${({ borderOnHover }) => borderOnHover};
  }

  &:focus {
    border: ${({ borderOnHover }) => borderOnHover};
  }

  outline: none;

  transition: all .3s ease;
`);

// interface Props {
//   height?: string;
//   value: string | number;
//   setValue: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
//   border: string;
//   borderOnHover: string;
//   borderRadius: string;
//   placeholder: string;
//   type: string;
// }

export const ControlledInput: FC<any> = memo((props) => {
  const {
    height,
    value,
    setValue,
    border,
    borderRadius,
    placeholder,
    type,
    borderOnHover,
  } = props;

  return (
    <ControlledInputContainer
      height={height}
    >
      <StyledControlledInput
        borderOnHover={borderOnHover}
        type={type}
        border={border}
        borderRadius={borderRadius}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        {...props}
      />
    </ControlledInputContainer>
  );
});
