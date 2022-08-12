import React, { memo, FC } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import Pizza from '../../../../utils/types/pizza';
import Section from '../../athoms/Section';
import { Grid, GridItem } from '../../helpers/grid';
import { ProductItem } from '../ProductItem';

const StyledTitle = memo(styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
`);

interface Props {
  sectionName: string;
  products: Array<Pizza>;
}

export const ProductSection: FC<Props> = memo(({
  sectionName,
  products,
}) => {
  return (
    <Section>
      <StyledTitle>{sectionName}</StyledTitle>
      <Grid
        mobileColumnsCount="1"
        tabletColumnsCount="2"
        desktopColumnsCount="3"
        mobileColumnsSize="minmax(250px,768px)"
        tabletColumnsSize="minmax(250px,1fr)"
        desktopColumnsSize="minmax(250px,1fr)"
        mobileGridGap="10px"
        tabletGridGap="15px"
        desktopGridGap="20px"
      >
        {products.map((product) => (
          <GridItem key={v4()}>
            <ProductItem
              image={product.image}
              name={product.name}
              toppings={product.toppings}
              boardSizes={product.pizzaSizes}
              sizes={product.sizes}
            />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
});
