import {
  isProd,
  REACT_APP_API_DEV_DOMAIN,
  REACT_APP_API_DEV_PORT,
  REACT_APP_API_DOMAIN,
  REACT_APP_API_PORT,
} from './dotenv';

/* eslint-disable no-shadow */
enum APIEndpoints {
  ROOT = '/',

  ORDER = '/order',

  REGISTRATION = '/auth/registration',
  REGISTRATION_ACTIVATION = '/auth/activation',
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  REFRESH = '/auth/refresh',

  ADMIN = '/admin',
  ADMIN_ANALITICS = '/admin/analitics',
}

export const baseURL = isProd
  ? `${REACT_APP_API_DOMAIN}${REACT_APP_API_PORT}`
  : `${REACT_APP_API_DEV_DOMAIN}${REACT_APP_API_DEV_PORT}`;

export default APIEndpoints;
