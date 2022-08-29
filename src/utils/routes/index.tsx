import React, { ReactElement } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { Catalog as CatalogPage } from '../../ui/pages/Catalog';
import { Checkout as CheckoutPage } from '../../ui/pages/Checkout';

// eslint-disable-next-line no-shadow
export enum Routes {
  Index = '/',
  Catalog = '/catalog',
  AboutUs = '/about-us',
  Checkout = '/checkout',
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
    describedComponent: <div>about us route</div>,
  },
  {
    link: Routes.Checkout,
    linkText: 'CHECKOUT',
    describedComponent: <CheckoutPage />,
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
    describedComponent: <div>error 404</div>,
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
