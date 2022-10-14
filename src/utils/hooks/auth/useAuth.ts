import { useMemo } from 'react';
import { user as _user } from '../../../store/slices/userAuthSlice';
import { useAppSelector } from '../reduxHooks';

export const useAuth = () => {
  const user = useAppSelector(_user);

  const out = useMemo(() => {
    return { user, isAuth: !!user };
  }, [user]);

  return out;
};
