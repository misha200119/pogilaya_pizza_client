import React, { FC, memo } from 'react';
import styled from 'styled-components';

interface ImageWrapperProps {
  height?: string;
  width?: string;
  maxHeight?: string;
  minHeight?: string;
  maxWidth?: string;
  minWidth?: string;
}

const ImageWrapper = memo(styled.div<ImageWrapperProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  
  & img {
    object-fit: cover;
    border-radius: 15px;
    transition: all .3s ease;
  }
`);

interface Props {
  image: string;
  height?: string;
  width?: string;
  maxHeight?: string;
  minHeight?: string;
  maxWidth?: string;
  minWidth?: string;
}

export const Image: FC<Props> = memo(({
  image,
  height,
  width,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
}) => {
  return (
    <ImageWrapper
      height={height}
      width={width}
      maxHeight={maxHeight}
      minHeight={minHeight}
      maxWidth={maxWidth}
      minWidth={minWidth}
    >
      <img
        src={image}
        height="100%"
        width="100%"
        alt="Alt name"
      />
    </ImageWrapper>
  );
});
