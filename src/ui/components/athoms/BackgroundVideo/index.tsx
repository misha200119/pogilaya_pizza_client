/* eslint-disable jsx-a11y/media-has-caption */
import React, { FC, memo } from 'react';
import styled from 'styled-components';

const VideoBgContainer = memo(styled.div`
  width: 100%;
  height: 100%;
`);

const Videoplayer = memo(styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`);

interface Props {
  src: string;
}

export const BackgroundVideo: FC<Props> = memo(({ src }) => {
  return (
    <VideoBgContainer>
      <Videoplayer src={src} autoPlay loop muted />
    </VideoBgContainer>
  );
});
