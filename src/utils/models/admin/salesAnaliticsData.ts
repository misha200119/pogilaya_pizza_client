import IOrder from '../order/IOrder';

export type AnaliticsData = Pick<IOrder, '_id' | 'date' | 'isPaid' | 'nameField' | 'paymentType' | 'totalCost' | 'coupon'>;
