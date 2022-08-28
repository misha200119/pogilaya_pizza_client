import React, { memo } from 'react';
import styled from 'styled-components';

const Container = memo(styled.section`
`);

const Section = memo(({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
});

export default Section;
