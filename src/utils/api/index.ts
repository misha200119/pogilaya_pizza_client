import RequestTypes from './axiosClient';
import APIEndpoints from '../constants/APIEndpoints';

const newOrder = async (data: Object) => {
  await RequestTypes.postRequest(APIEndpoints.ORDER, data);
};

export const Order = {
  newOrder,
};
