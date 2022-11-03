import React, { FC, memo } from 'react';
import styled from 'styled-components';

const LogoContainer = memo(styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  font-size: 30px;
  font-weight: 800;
  color: inherit;
  text-decoration: none;
`);

interface Props {
  size: string;
  imgUrl: string;
  linkHref: string;
}

const Logo: FC<Props> = memo(({
  size,
  imgUrl,
  linkHref,
  children,
}) => {
  return (
    <LogoContainer
      href={linkHref}
    >
      <img
        src={imgUrl}
        alt="Logo"
        width={size}
        height={size}
      />
      {children}
    </LogoContainer>
  );
});

export default Logo;
