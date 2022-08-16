import { memo } from 'react';
import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  borderRadius: string;
}

const Button = memo(styled.button<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;

  cursor: pointer;
`);

export default Button;
