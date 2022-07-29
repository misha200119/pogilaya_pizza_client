import React, { memo } from 'react';
import styled from 'styled-components';

const OptionsContainer = memo(styled.div`
background-color: orange;
margin-bottom: 50px;
`);

export const SortOptions = memo(() => {
  return (
    <OptionsContainer>
      SortOptions
    </OptionsContainer>
  );
});
