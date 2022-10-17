/* eslint-disable import/no-cycle */
import React, { ReactElement } from 'react';
import { Navigate, Route } from 'react-router-dom';
import Header from '../../ui/components/organisms/Header';
import { LoginForm } from '../../ui/components/organisms/LoginForm';
import { PrivateRoute } from '../../ui/components/utils/privateRoute';
import { AdminPage } from '../../ui/pages/Admin';
import { Catalog as CatalogPage } from '../../ui/pages/Catalog';
import { Checkout as CheckoutPage } from '../../ui/pages/Checkout';
import Roles from '../types/roles';

// eslint-disable-next-line no-shadow
export enum Routes {
  Index = '/',
  Catalog = '/catalog',
  AboutUs = '/about-us',
  Checkout = '/checkout',

  LOGIN = '/login',
  ADMIN = '/admin',
  ADMIN_DASHBOARD = '/admin/dashboard',

  Wrong = '*',
}

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
    describedComponent: (
      <>
        <Header />
        <div>about us route</div>
      </>
    ),
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

/**
 * @param routes array of mappable objects that describes routes
 * @returns array of react elements (Routes)
 */
// eslint-disable-next-line max-len
export const mapRoutes = (routes: Array<MappableRoute>): Array<ReactElement | null> => routes.map((route) => {
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
