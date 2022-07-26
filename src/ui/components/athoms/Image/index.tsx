import React, { FC, memo } from 'react';
import styled from 'styled-components';

const ImageWrapper = memo(styled.div`
  max-height: 176px
`);

interface Props {
  image: string;
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const Image: FC<Props> = memo(({
  image,
}) => {
  return (
    <ImageWrapper>
      <img
        src={image}
        height="100%"
        alt="Alt anme"
      />
    </ImageWrapper>
  );
});
