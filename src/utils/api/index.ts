import RequestTypes from './axiosClient';
import APIEndpoints from '../constants/APIEndpoints';

const newOrder = (data: Object) => {
  RequestTypes.postRequest(APIEndpoints.ORDER, data);
};

export const Order = {
  newOrder,
};
