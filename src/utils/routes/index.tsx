/* eslint-disable import/no-cycle */
import React, { ReactElement } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { DasboardOrdersTable } from '../../ui/components/molecules/DasboardOrdersTable';
import { DashBoardGraphic } from '../../ui/components/molecules/DashBoardGraphic';
import Header from '../../ui/components/organisms/Header';
import { LoginForm } from '../../ui/components/organisms/LoginForm';
import { PrivateRoute } from '../../ui/components/utils/privateRoute';
import { Landing } from '../../ui/pages/Landing';
import { AdminPage } from '../../ui/pages/Admin';
import { Catalog as CatalogPage } from '../../ui/pages/Catalog';
import { Checkout as CheckoutPage } from '../../ui/pages/Checkout';
import { Routes } from '../constants/routes';
import Roles from '../types/roles';

interface MappableRoute {
  link: Routes;
  linkText: string;
  describedComponent: JSX.Element;
  isPrivate: boolean;
  onlyFor?: Roles;
}

export const mappableRoutes: Array<MappableRoute> = [
  {
    link: Routes.Catalog,
    linkText: 'CATALOG',
    describedComponent: <CatalogPage />,
    isPrivate: false,
  },
  {
    link: Routes.AboutUs,
    linkText: 'ABOUT US',
    describedComponent: <Landing />,
    isPrivate: false,
  },
];

export const mappableUtilRoutes: Array<MappableRoute> = [
  {
    link: Routes.Index,
    linkText: 'REDIRECT TO HOME',
    describedComponent: <Navigate to={Routes.AboutUs} />,
    isPrivate: false,
  },
  {
    link: Routes.Wrong,
    linkText: 'WRONG ADRESS',
    describedComponent: (
      <>
        <Header />
        <div>error 404</div>
      </>
    ),
    isPrivate: false,
  },
  {
    link: Routes.Checkout,
    linkText: 'CHECKOUT',
    describedComponent: <CheckoutPage />,
    isPrivate: false,
  },
  {
    link: Routes.LOGIN,
    linkText: 'LOGIN',
    describedComponent: <LoginForm />,
    isPrivate: false,
  },
  {
    link: Routes.ADMIN,
    linkText: 'ADMIN',
    describedComponent: <AdminPage />,
    isPrivate: true,
    onlyFor: Roles.ADMIN,
  },
];

export const adminDashboardRoutes = [
  {
    link: Routes.ADMIN_DASHBOARD,
    linkText: 'DASHBOARD',
    describedComponent: <DashBoardGraphic />,
    isPrivate: true,
    onlyFor: Roles.ADMIN,
  },
  {
    link: Routes.ADMIN_ORDERS,
    linkText: 'ORDERS',
    describedComponent: <DasboardOrdersTable />,
    isPrivate: true,
    onlyFor: Roles.ADMIN,
  },
];

/**
 * @param routes array of mappable objects that describes routes
 * @returns array of react elements (Routes)
 */
// eslint-disable-next-line max-len
export const mapRoutes = (routes: Array<MappableRoute>): Array<ReactElement> => routes.map((route) => {
  const isPrivateRoute = route.isPrivate && route.onlyFor;

  return (
    <Route
      path={route.link}
      key={route.link}
      element={
        isPrivateRoute ? (
          <PrivateRoute
            element={route.describedComponent}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onlyFor={route.onlyFor!}
          />
        ) : (
          route.describedComponent
        )
      }
    />
  );
});
