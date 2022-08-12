import React, { memo } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { PizzaSize, Size } from '../../../utils/types/pizza';
import { Section } from '../../../utils/types/section';
import { ProductSection } from '../../components/molecules/ProductSection';
import { SortOptions } from '../../components/molecules/SortOptions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockDataAvaliblePizza: Array<Section> = [
  {
    products: [
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        pizzaSizes: [PizzaSize.BOARD_HOT_DOG, PizzaSize.PHILADELPHY],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        pizzaSizes: [PizzaSize.BOARD_HOT_DOG, PizzaSize.PHILADELPHY],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        pizzaSizes: [PizzaSize.BOARD_HOT_DOG, PizzaSize.PHILADELPHY],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        pizzaSizes: [PizzaSize.BOARD_HOT_DOG, PizzaSize.PHILADELPHY],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
    ],
    sectionName: 'SECTION NAME 0',
  },
  {
    products: [
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        pizzaSizes: [PizzaSize.BOARD_HOT_DOG, PizzaSize.PHILADELPHY],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        pizzaSizes: [PizzaSize.BOARD_HOT_DOG, PizzaSize.PHILADELPHY],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        pizzaSizes: [PizzaSize.BOARD_HOT_DOG, PizzaSize.PHILADELPHY],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        pizzaSizes: [PizzaSize.BOARD_HOT_DOG, PizzaSize.PHILADELPHY],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
    ],
    sectionName: 'SECTION NAME 1',
  },
];

const Container = memo(styled.main`
  /* background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary}; */
  margin-bottom: 20px;
`);

export const Catalog = memo(() => {
  return (
    <Container>
      <SortOptions />
      {mockDataAvaliblePizza.map(({ sectionName, products }) => (
        <ProductSection
          key={v4()}
          sectionName={sectionName}
          products={products}
        />
      ))}
    </Container>
  );
});
