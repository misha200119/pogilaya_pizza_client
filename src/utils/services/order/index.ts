import api from '../../api';
import APIEndpoints from '../../constants/APIEndpoints';
import IOrder from '../../models/order/IOrder';

export default class OrderService {
  static async fetchOrders() {
    return api.getRequest<Array<IOrder>>(APIEndpoints.ORDER);
  }
}
