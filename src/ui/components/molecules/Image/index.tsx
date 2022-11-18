/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-underscore-dangle */
import React, {
  FC, memo, CSSProperties, ReactNode,
} from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;

  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const _Image = styled.img`
  max-width:100%;
  max-height: calc(100% + 100px);
  width: 100%;
  height: auto;
  
  position: absolute;
  left: 0;
  right: 0;
`;

interface Props {
  style?: CSSProperties;
  imgStyle?: CSSProperties;
  src: string;
  className?: string;
  children?: ReactNode;
}

export const Image: FC<Props> = memo(({
  style, src, imgStyle, className, children,
}) => {
  return (
    <ImageContainer style={style}>
      <_Image src={src} style={imgStyle} className={className || ''} />
      {children}
    </ImageContainer>
  );
});
