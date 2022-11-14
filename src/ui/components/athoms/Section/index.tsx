import React, { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

const Container = memo(styled.section`
`);

interface Props {
  children: ReactNode;
}

const Section: FC<Props> = memo(({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
});

export default Section;
