import { IUser } from '../user/IUser';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  userDTO: IUser;
}
