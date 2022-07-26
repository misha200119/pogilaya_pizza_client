/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, memo, useState } from 'react';
import styled from 'styled-components';
import { Container as ResponsiveContainer } from '../../helpers/responsive';

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
`);

export const RegisterForm: FC<{}> = memo(() => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

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
          <button type="button">Login</button>
        </div>
      </div>
    </StyledResponsiveContainer>
  );
});
