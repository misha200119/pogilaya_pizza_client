/* eslint-disable import/no-cycle */
import React, { memo, FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../utils/hooks/auth/useAuth';
import { Routes } from '../../../utils/routes';
import Roles from '../../../utils/types/roles';

interface Props {
  onlyFor: Roles;
  element: JSX.Element
}

export const PrivateRoute: FC<Props> = memo(({
  onlyFor,
  element,
}) => {
  const auth = useAuth();

  if (auth.isAuth && onlyFor === auth.user?.role) {
    return element;
  }

  return (<Navigate to={Routes.LOGIN} />);
});
