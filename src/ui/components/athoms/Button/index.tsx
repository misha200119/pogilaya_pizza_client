import { memo } from 'react';
import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  borderRadius: string;
}

const Button = memo(styled.div<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ borderRadius }) => borderRadius};
`);

export default Button;
