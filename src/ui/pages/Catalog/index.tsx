/* eslint-disable max-len */
import React, { memo } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { DoughSize, Size } from '../../../utils/types/pizza';
import { Section } from '../../../utils/types/section';
import { ProductSection } from '../../components/molecules/ProductSection';
// import { SortOptions } from '../../components/molecules/SortOptions';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockDataAvaliblePizza: Array<Section> = [
  {
    products: [
      {
        id: '1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        id: '2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'some toppings',
        name: 'Name2',
      },
      {
        id: '3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'some toppings',
        name: 'Namefdfhwkhf',
      },
      {
        id: '4',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'some toppings',
        name: 'Nameasdhdsj',
      },
      {
        id: '5',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'some toppings',
        name: 'Namefdfhwkhf',
      },
      {
        id: '7',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'some toppings',
        name: 'Nameasdhdsj',
      },
    ],
    sectionName: 'Pizza: Best price',
  },
  {
    products: [
      {
        id: '8',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        id: '9',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        id: '10',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        id: '11',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Name',
      },
      {
        id: '12',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Namefdfhwkhf',
      },
      {
        id: '13',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 1337,
        toppings: 'some toppings',
        name: 'Nameasdhdsj',
      },
    ],
    sectionName: 'Pizza: Exotic',
  },
];

const Container = memo(styled.main`
  padding: 30px 0 30px 0;
  display: flex;
  grid-gap: 100px;
  flex-direction: column;
`);

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`

  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
`);

export const Catalog = memo(() => {
  return (
    <>
      <Header />
      <StyledResponsiveContainer>
        <Container>
          {/* <SortOptions /> */}
          {mockDataAvaliblePizza.map(({ sectionName, products }) => (
            <ProductSection
              key={v4()}
              sectionName={sectionName}
              products={products}
            />
          ))}
          <p>
            * the weight of the freshly prepared product. Weight in delivery
            orders can be separated due to dehydration of the product.
          </p>
        </Container>
      </StyledResponsiveContainer>
      <Footer />
    </>
  );
});
