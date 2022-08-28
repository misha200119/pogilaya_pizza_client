import React, { memo } from 'react';
import styled from 'styled-components';

const OptionsContainer = memo(styled.div`
width: 100%;
background-color: orange;
`);

export const SortOptions = memo(() => {
  return (
    <OptionsContainer>
      SortOptions
    </OptionsContainer>
  );
});
