import React, { memo, FC, createContext } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import Pizza from '../../../../utils/types/pizza';
import Section from '../../athoms/Section';
import { Grid, GridItem } from '../../helpers/grid';
// eslint-disable-next-line import/no-cycle
import { ProductItem } from '../ProductItem';

interface ProductItemContextType {
  product: Pizza;
}

// eslint-disable-next-line max-len
export const ProductItemContext = createContext<ProductItemContextType>({} as ProductItemContextType);

const StyledTitle = memo(styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  font-weight: 700;

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
        desktopColumnsCount="4"
        mobileColumnsSize="minmax(250px,768px)"
        tabletColumnsSize="minmax(250px,1fr)"
        desktopColumnsSize="minmax(250px,1fr)"
        mobileGridGap="10px"
        tabletGridGap="15px"
        desktopGridGap="20px"
      >
        {products.map((product) => (
          <GridItem key={v4()}>
            <ProductItemContext.Provider value={{ product }}>
              <ProductItem />
            </ProductItemContext.Provider>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
});
