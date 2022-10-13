/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { Container as ResponsiveContainer } from '../../components/helpers/responsive';
import { LoginForm } from '../../components/organisms/LoginForm';

const StyledResponsiveContainer = memo(styled(ResponsiveContainer)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
`);

export const AdminPage: FC<{}> = memo(() => {
  return (
    <LoginForm />
  );
});
