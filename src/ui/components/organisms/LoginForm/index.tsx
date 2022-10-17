/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  FC, memo, useCallback, useState, useEffect,
} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container as ResponsiveContainer } from '../../helpers/responsive';
import { isTryingLogin, login as _login } from '../../../../store/slices/userAuthSlice';
import { useAppDispatch } from '../../../../utils/hooks/reduxHooks';
import { useAuth } from '../../../../utils/hooks/auth/useAuth';

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
`);

export const LoginForm: FC<{}> = memo(() => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const [isFirstRender, setFirstRender] = useState(true);

  const onSubmit = useCallback(async () => {
    await dispatch(_login({ login, password }));
  }, [login, password]);

  useEffect(() => {
    if (!isFirstRender && auth.isAuth && auth.user) {
      navigate(-1);
    }

    setFirstRender(false);
  }, [auth]);

  return (
    <StyledResponsiveContainer>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '300px',
            gridGap: '50px',
          }}
        >
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            Login (email):
            <input
              type="email"
              value={login}
              onChange={({ target }) => setLogin(target.value)}
            />
          </label>
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            Password :
            <input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
          <button type="button" onClick={onSubmit}>Login</button>
        </div>
      </div>
    </StyledResponsiveContainer>
  );
});
