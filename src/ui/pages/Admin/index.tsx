/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { adminDashboardSidebarTabs } from '../../../utils/constants/adminDashboardSidebarTabs';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';
import { ResponsiveSidebar } from '../../components/molecules/ResponsiveSidebar';

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
`);

export const AdminPage: FC<{}> = memo(() => {
  return (
    <ResponsiveSidebar sidebarWidth={240} tabs={adminDashboardSidebarTabs} />
  );
});
