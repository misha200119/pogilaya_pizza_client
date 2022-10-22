// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AnaliticsData } from '../models/admin/salesAnaliticsData';
// eslint-disable-next-line no-shadow
export enum ChartConfigurationNames {
  DOING_ORDERS = 'Doing Orders',
  PAYED_ORDERS = 'Payed Orders',
  // PAYMENT_TYPE_ORDERS = 'paymentTypeOrders',
}

/**
 * xField and yField is keys of
 * @see {AnaliticsData}
 *
 */
export const chartConfigurations: {
  [key: string]: {
    mapper: (element: [string, Array<AnaliticsData>]) => {
      date: string;
      value: number;
    };
    config: object;
  };
} = {
  [ChartConfigurationNames.DOING_ORDERS]: {
    mapper: (element) => ({
      date: element[0],
      value: element[1].length,
    }),
    config: {
      padding: 'auto',
      xField: 'date',
      yField: 'value',
      xAxis: {
        tickCount: 5,
      },
      slider: {
        start: 0.1,
        end: 0.5,
      },
    },
  },
  [ChartConfigurationNames.PAYED_ORDERS]: {
    mapper: (element) => ({
      date: element[0],
      value: element[1].filter(order => order.isPaid).length,
    }),
    config: {
      padding: 'auto',
      xField: 'date',
      yField: 'value',
      xAxis: {
        tickCount: 5,
      },
      slider: {
        start: 0.1,
        end: 0.5,
      },
    },
  },
};
