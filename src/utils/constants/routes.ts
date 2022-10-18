// eslint-disable-next-line no-shadow
export enum Routes {
  // public routes
  Index = '/',
  Catalog = '/catalog',
  AboutUs = '/about-us',
  Checkout = '/checkout',
  LOGIN = '/login',

  // private admin routes
  ADMIN = '/admin',
  ADMIN_DASHBOARD = '/admin/dashboard',
  ADMIN_ORDERS = '/admin/orders',

  // dafauld case if addres not found
  Wrong = '*',
}
