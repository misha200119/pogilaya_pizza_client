import api from '../../api';
import APIEndpoints from '../../constants/APIEndpoints';
import IOrder from '../../models/order/IOrder';
import OrderDetails from '../../types/orderDetails';

export default class OrderService {
  static async fetchOrders() {
    return api.getRequest<Array<IOrder>>(APIEndpoints.ORDER);
  }

  static async newOrder(
    cart: { [key: string]: number },
    orderDetails: OrderDetails,
  ) {
    const data = {
      cart,
      orderDetails,
    };

    return api.postRequest(APIEndpoints.ORDER, { data });
  }
}
