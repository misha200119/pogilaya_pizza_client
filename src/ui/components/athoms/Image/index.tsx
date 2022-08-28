import React, { FC, memo } from 'react';
import styled from 'styled-components';

const ImageWrapper = memo(styled.div`
  max-height: 300px;
  
  & img {
    object-fit: cover;
    border-radius: 15px;
    transition: all .3s ease;
  }
`);

interface Props {
  image: string;
}

export const Image: FC<Props> = memo(({
  image,
}) => {
  return (
    <ImageWrapper>
      <img
        src={image}
        height="100%"
        width="100%"
        alt="Alt name"
      />
    </ImageWrapper>
  );
});
