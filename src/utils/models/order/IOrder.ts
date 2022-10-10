import OrderDetails from '../../types/orderDetails';

interface IOrder extends OrderDetails {
  _id: string;
  isPaid: boolean;
  cart: { [key: string]: number };
}

export default IOrder;
