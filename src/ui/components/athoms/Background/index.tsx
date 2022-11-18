/* eslint-disable jsx-a11y/media-has-caption */
import React, {
  FC, memo, useRef,
} from 'react';
import styled from 'styled-components';

const VideoBgContainer = memo(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`);

const Videoplayer = memo(styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`);

interface Props {
  isVideo?: boolean;
  src: string;
}

export const Background: FC<Props> = memo(({ src, isVideo }) => {
  const container = useRef(null);

  return (
    <div
      style={{
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        overflow: 'hidden',
        position: 'absolute',
      }}
    >
      <VideoBgContainer
        className="bg"
        ref={container}
        style={{ backgroundImage: `url(${src})` }}
      >
        {isVideo && <Videoplayer src={src} autoPlay loop muted />}
      </VideoBgContainer>
    </div>
  );
});
