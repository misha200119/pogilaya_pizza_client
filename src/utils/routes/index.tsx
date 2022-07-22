import React, { ReactElement } from 'react';
import { Navigate, Route } from 'react-router-dom';

// eslint-disable-next-line no-shadow
export enum Routes {
  Index = '/',
  Home = '/home',
  Catalog = '/catalog',
  AboutUs = '/about-us',
  Wrong = '*',
}

interface MappableRoute {
  link: Routes;
  linkText: string;
  describedComponent: JSX.Element;
}

const mappableRoutes: Array<MappableRoute> = [{
  link: Routes.Home,
  linkText: 'HOME',
  describedComponent: <div>home route</div>,
},
{
  link: Routes.Catalog,
  linkText: 'CATALOG',
  describedComponent: <div>catalog route</div>,
},
{
  link: Routes.AboutUs,
  linkText: 'ABOUT US',
  describedComponent: <div>about us route</div>,
},
];

export const utilRoutes = [
  {
    link: Routes.Index,
    linkText: 'REDIRECT TO HOME',
    describedComponent: <Navigate to={Routes.Home} />,
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

export default mappableRoutes;
