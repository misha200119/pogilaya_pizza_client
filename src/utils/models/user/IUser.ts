import Roles from '../../types/roles';

export interface IUser {
  id: string;
  login: string;
  role: Roles;
  isActivated: boolean;
}
