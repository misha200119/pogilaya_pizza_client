export const {
  REACT_APP_API_DEV_DOMAIN,
  REACT_APP_API_DEV_PORT,
  NODE_ENV,
  REACT_APP_API_DOMAIN,
  REACT_APP_API_PORT,
} = process.env;
export const isProd = NODE_ENV === 'production';
