import React, { memo, FC } from 'react';
import styled from 'styled-components';
import { Image } from '../../athoms/Image';

const ProductItemContainer = memo(styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: red;
`);

interface Props {
  image: string;
}

export const ProductItem: FC<Props> = memo(({
  image,
}) => {
  return (
    <ProductItemContainer>
      <Image
        image={image}
      />
    </ProductItemContainer>
  );
});
