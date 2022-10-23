import IOrder from '../order/IOrder';

export type AnaliticsData = Pick<IOrder, | 'date' | 'isPaid' | 'nameField' | 'paymentType' | 'totalCost' | 'coupon'>;
