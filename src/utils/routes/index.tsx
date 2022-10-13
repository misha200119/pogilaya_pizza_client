import React, { ReactElement } from 'react';
import { Navigate, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Header from '../../ui/components/organisms/Header';
import { AdminPage } from '../../ui/pages/Admin';
// eslint-disable-next-line import/no-cycle
import { Catalog as CatalogPage } from '../../ui/pages/Catalog';
// eslint-disable-next-line import/no-cycle
import { Checkout as CheckoutPage } from '../../ui/pages/Checkout';

// eslint-disable-next-line no-shadow
export enum Routes {
  Index = '/',
  Catalog = '/catalog',
  AboutUs = '/about-us',
  Checkout = '/checkout',

  ADMIN = '/admin',

  Wrong = '*',
}

interface MappableRoute {
  link: Routes;
  linkText: string;
  describedComponent: JSX.Element;
}

export const mappableRoutes: Array<MappableRoute> = [
  {
    link: Routes.Catalog,
    linkText: 'CATALOG',
    describedComponent: <CatalogPage />,
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
  },
];

export const mappableUtilRoutes = [
  {
    link: Routes.Index,
    linkText: 'REDIRECT TO HOME',
    describedComponent: <Navigate to={Routes.AboutUs} />,
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
  },
  {
    link: Routes.Checkout,
    linkText: 'CHECKOUT',
    describedComponent: <CheckoutPage />,
  },
  {
    link: Routes.ADMIN,
    linkText: 'ADMIN',
    describedComponent: <AdminPage />,
  },
];

/**
 * @param routes array of mappable objects that describes routes
 * @returns array of react elements (Routes)
 */
export const mapRoutes = (routes: Array<MappableRoute>): Array<ReactElement> => {
  return routes.map((route) => (
    <Route path={route.link} element={route.describedComponent} key={route.link} />
  ));
};
