import React, { memo } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { ProductSection } from '../../components/molecules/ProductSection';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/organisms/Header';
import Footer from '../../components/organisms/Footer';
import { mockDataAvaliblePizza } from '../../../utils/mockData/avaliblePizza';

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
