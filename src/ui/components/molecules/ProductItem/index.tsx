import React, { memo, FC, useState } from 'react';
import styled from 'styled-components';
import { PizzaSize, Size } from '../../../../utils/types/pizza';
import BoardSizes from '../PizzaSizes';
import { Image } from '../../athoms/Image';

const ProductItemContainer = memo(styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: red;

  border-radius: 25px;
`);

const DescriptionContainer = memo(styled.div`
  margin-top: 15px;
`);

const PizzaName = memo(styled.h2`
  margin-bottom: 15px;
`);

const PizzaToppings = memo(styled.span`
  display: block;
  margin-bottom: 15px;
`);

interface Props {
  image: string;
  name: string;
  toppings: string;
  boardSizes: Array<PizzaSize>;
  sizes: Array<Size>;
}

export const ProductItem: FC<Props> = memo(({
  image,
  name,
  toppings,
  boardSizes,
}) => {
  const [currentBoardSize, setCurrentBoardSize] = useState<PizzaSize>(boardSizes[0]);
  // const [currentSize, setCurrentSize] = useState<Size>(sizes[0]);

  return (
    <ProductItemContainer>
      <Image
        image={image}
      />
      <DescriptionContainer>
        <PizzaName>
          {name}
        </PizzaName>
        <PizzaToppings>
          {toppings}
        </PizzaToppings>

        <BoardSizes
          boardSizes={boardSizes}
          currentBoardSize={currentBoardSize}
          setCurrentBoardSize={setCurrentBoardSize}
        />
      </DescriptionContainer>
    </ProductItemContainer>
  );
});
