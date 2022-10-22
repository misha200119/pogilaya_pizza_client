import api from '../../api';
import APIEndpoints from '../../constants/APIEndpoints';
import { AnaliticsData } from '../../models/admin/salesAnaliticsData';

export default class AdminAnalitics {
  static async salesStatistic() {
    return api.getRequest<Array<[string, AnaliticsData[]]>>(APIEndpoints.ADMIN_ANALITICS);
  }
}
