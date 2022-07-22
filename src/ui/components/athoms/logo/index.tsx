import React, { FC } from 'react';

interface Props {
  size: string;
  imgUrl: string;
  linkHref: string;
}

const Logo: FC<Props> = ({
  size,
  imgUrl,
  linkHref,
}) => {
  return (
    <a href={linkHref}>
      <img
        src={imgUrl}
        alt="Logo"
        width={size}
        height={size}
      />
    </a>
  );
};

export default Logo;
