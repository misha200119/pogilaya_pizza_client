/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, memo } from 'react';
import { Routes } from 'react-router-dom';
import { adminDashboardSidebarTabs } from '../../../utils/constants/adminDashboardSidebarTabs';
import { ResponsiveSidebar } from '../../components/molecules/ResponsiveSidebar';
// eslint-disable-next-line import/no-cycle
import { mapRoutes, adminDashboardRoutes } from '../../../utils/routes';

export const AdminPage: FC<{}> = memo(() => {
  return (
    <ResponsiveSidebar sidebarWidth={240} tabs={adminDashboardSidebarTabs}>
      <Routes>{mapRoutes(adminDashboardRoutes)}</Routes>
    </ResponsiveSidebar>
  );
});
