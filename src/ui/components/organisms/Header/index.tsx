import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
`;

const Header: FC<{}> = () => {
  return (
    <Container>
      Header
    </Container>
  );
};

export default Header;
