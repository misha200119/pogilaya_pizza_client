import RequestTypes from './axiosClient';
import APIEndpoints from '../constants/APIEndpoints';

const newOrder = async (data: Object) => {
  const response = await RequestTypes.postRequest(APIEndpoints.ORDER, data);

  return response;
};

export const Order = {
  newOrder,
};
