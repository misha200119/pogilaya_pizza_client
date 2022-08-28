/* eslint-disable max-len */
import React, { memo } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { DoughSize, Size } from '../../../utils/types/pizza';
import { Section } from '../../../utils/types/section';
import { ProductSection } from '../../components/molecules/ProductSection';
import { SortOptions } from '../../components/molecules/SortOptions';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockDataAvaliblePizza: Array<Section> = [
  {
    products: [
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name2',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Namefdfhwkhf',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Nameasdhdsj',
      },
    ],
    sectionName: 'SECTION NAME 0',
  },
  {
    products: [
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
    ],
    sectionName: 'SECTION NAME 1',
  },
];

const Container = memo(styled.main`
  margin-bottom: 30px;
`);

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  display: flex;
  grid-gap: 100px;
  flex-direction: column;
  /* background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary}; */
`);

export const Catalog = memo(() => {
  return (
    <Container>
      <StyledResponsiveContainer>
        <SortOptions />
        {mockDataAvaliblePizza.map(({ sectionName, products }) => (
          <ProductSection
            key={v4()}
            sectionName={sectionName}
            products={products}
          />
        ))}
        <p>* the weight of the freshly prepared product. Weight in delivery orders can be separated due to dehydration of the product.</p>
      </StyledResponsiveContainer>
    </Container>
  );
});
