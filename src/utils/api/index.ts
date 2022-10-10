/* eslint-disable no-console */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseURL } from '../constants/APIEndpoints';
import { isProd } from '../constants/dotenv';
import KeysOfLocalStorage from '../constants/keysOfLocalstorage';
import { readFromLocalStorage } from '../helpers/localStorageHelper';

const baseContentType = 'application/json';

const baseHeaders = {
  'Content-Type': baseContentType,
  Accept: baseContentType,
};

const client = axios.create({
  baseURL,
  withCredentials: true,
});

if (!isProd) {
  client.interceptors.response.use(
    async (response) => {
      console.log('Request successful!', response);

      return response;
    },
    async (error) => {
      console.error(error, 'error');

      return Promise.reject(error);
    },
  );
}

client.interceptors.request.use(async (config) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, no-param-reassign
  config!.headers!.Authorization = `Bearer ${readFromLocalStorage(KeysOfLocalStorage.ACCESS_TOKEN)}`;

  return config;
});

const request = async <T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const response = client(options);

  return response;
};

const getRequest = async <T>(path: string, urlData = '', config?: AxiosRequestConfig) => {
  const response = request<T>({
    ...config,
    url: path + urlData,
    method: 'GET',
    headers: baseHeaders,
  });

  return response;
};

const postRequest = async <T>(path: string, data?: Object, urlData = '', config?: AxiosRequestConfig) => {
  const response = await request<T>({
    ...config,
    url: path + urlData,
    method: 'POST',
    data,
  });

  return response;
};

const patchRequest = async <T>(path: string, data?: Object, urlData = '', config?: AxiosRequestConfig) => {
  const response = request<T>({
    ...config,
    url: path + urlData,
    method: 'PATCH',
    data,
  });

  return response;
};

const deleteRequest = async <T>(
  path: string,
  data?: Object,
  urlData = '',
  config?: AxiosRequestConfig,
) => {
  const response = request<T>({
    ...config,
    url: path + urlData,
    method: 'DELETE',
    data,
  });

  return response;
};

const RequestTypes = {
  getRequest, postRequest, patchRequest, deleteRequest,
};

export default RequestTypes;
