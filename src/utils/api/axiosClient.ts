/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from 'axios';
// import { REACT_APP_API_DOMAIN } from '../constants/dotenv';

const baseContentType = 'application/json';

const baseHeaders = {
  'Content-Type': baseContentType,
  Accept: baseContentType,
};

const client = axios.create({
  baseURL: 'http://localhost:1488',
});

client.interceptors.response.use(
  async (response) => {
    console.log('Request successful!', response);
  },
  async (error) => {
    console.error(error, 'error');
  },
);

const request = async (options: AxiosRequestConfig<any>) => {
  console.log(client, 'client');

  return client(options);
};

const getRequest = async (path: string, urlData = '', config?: AxiosRequestConfig<any>) => {
  const response = request({
    url: path + urlData,
    method: 'GET',
    headers: baseHeaders,
    ...config,
  });

  return response;
};

const postRequest = async (path: string, data?: Object, urlData = '', config?: AxiosRequestConfig<any>) => {
  const response = request({
    url: path + urlData,
    method: 'POST',
    data,
    ...config,
  });

  return response;
};

const patchRequest = async (path: string, data?: Object, urlData = '', config?: AxiosRequestConfig<any>) => {
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
  config?: AxiosRequestConfig<any>,
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
