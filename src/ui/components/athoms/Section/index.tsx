import React, { memo } from 'react';
import styled from 'styled-components';

const Container = memo(styled.section`
  margin-bottom: 20px;
`);

const Section = memo(({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
});

export default Section;
