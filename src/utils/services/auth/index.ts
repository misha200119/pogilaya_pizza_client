import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import api, { baseRequestConfig } from '../../api';
import { AuthResponse } from '../../models/auth/authResponse';
import APIEndpoints from '../../constants/APIEndpoints';

export default class AuthService {
  static async registration(login: string, password: string) {
    return api.postRequest<AuthResponse>(APIEndpoints.REGISTRATION, { login, password });
  }

  static async login(login: string, password: string) {
    return api.postRequest<AuthResponse>(APIEndpoints.LOGIN, {
      auth: { login, password },
    });
  }

  static async logout() {
    return api.postRequest<void>(APIEndpoints.LOGOUT);
  }

  static async checkAuth() {
    return axios.get<AuthResponse>(APIEndpoints.REFRESH, baseRequestConfig);
  }
}
