/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from 'axios';
import { isProd, REACT_APP_API_DEV_DOMAIN, REACT_APP_API_PORT } from '../constants/dotenv';

const baseContentType = 'application/json';

const baseHeaders = {
  'Content-Type': baseContentType,
  Accept: baseContentType,
};

const client = axios.create({
  baseURL: `${REACT_APP_API_DEV_DOMAIN}${REACT_APP_API_PORT}`,
});

if (!isProd) {
  client.interceptors.response.use(
    async (response) => {
      console.log('Request successful!', response);
    },
    async (error) => {
      console.error(error, 'error');
    },
  );
}

const request = async (options: AxiosRequestConfig) => {
  return client(options);
};

const getRequest = async (path: string, urlData = '', config?: AxiosRequestConfig) => {
  const response = request({
    url: path + urlData,
    method: 'GET',
    headers: baseHeaders,
    ...config,
  });

  return response;
};

const postRequest = async (path: string, data?: Object, urlData = '', config?: AxiosRequestConfig) => {
  const response = request({
    url: path + urlData,
    method: 'POST',
    data,
    ...config,
  });

  return response;
};

const patchRequest = async (path: string, data?: Object, urlData = '', config?: AxiosRequestConfig) => {
  const response = request({
    url: path + urlData,
    method: 'PATCH',
    data,
    ...config,
  });

  return response;
};

const deleteRequest = async (
  path: string,
  data?: Object,
  urlData = '',
  config?: AxiosRequestConfig,
) => {
  const response = request({
    url: path + urlData,
    method: 'DELETE',
    data,
    ...config,
  });

  return response;
};

const RequestTypes = {
  getRequest, postRequest, patchRequest, deleteRequest,
};

export default RequestTypes;
