/* eslint-disable jsx-a11y/media-has-caption */
import React, { memo } from 'react';
import styled from 'styled-components';

const videoBg = '/assets/nigger_eats_pizza.mp4';

const VideoBgContainer = memo(styled.div`
  width: 100%;
  height: 100%;
`);

const Videoplayer = memo(styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`);

export const BackgroundVideo = memo(() => {
  return (
    <VideoBgContainer>
      <Videoplayer src={videoBg} autoPlay loop muted />
    </VideoBgContainer>
  );
});
