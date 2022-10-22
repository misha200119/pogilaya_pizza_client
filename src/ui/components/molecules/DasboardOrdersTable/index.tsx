import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/reduxHooks';
import { isLoadingData, fetchOrers, orders as _orders } from '../../../../store/slices/adminSlice';
import { Container } from '../../helpers/responsive';
import { Loading } from '../../../pages/Loading';

const StyledResponsiveContainer = memo(styled(Container)`
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
`);

export const DasboardOrdersTable = memo(() => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingData);
  const orders = useAppSelector(_orders);

  useEffect(() => {
    dispatch(fetchOrers());
  }, []);

  if (isLoading) {
    return <Loading width="100%" height="100%" />;
  }

  if (orders === null) {
    return <h1>Error on loading data</h1>;
  }

  return (
    <StyledResponsiveContainer>DasboardOrdersTable</StyledResponsiveContainer>
  );
});
