import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../utils/hooks/reduxHooks';
import { isLoadingData, fetchOrers, orders as _orders } from '../../../../store/slices/adminSlice';
import { Loading } from '../../../pages/Loading';
import { OrdersTable } from '../OrdersTable';

const StyledResponsiveContainer = memo(styled.div`
  height: 100%;
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
    <StyledResponsiveContainer>
      <OrdersTable orders={orders} />
    </StyledResponsiveContainer>
  );
});
