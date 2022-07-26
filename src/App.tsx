import React, { memo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes } from 'react-router-dom';
import { Themes, themes } from './ui/themes';
import Header from './ui/components/organisms/Header';
import { mapRoutes, mappableUtilRoutes, mappableRoutes } from './utils/routes';
import { Container as ResponsiveContainer } from './ui/components/helpers/responsive';

const Container = memo(styled(ResponsiveContainer)`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
`);

export const App: React.FC<{}> = memo(() => {
  return (
    <ThemeProvider theme={themes[Themes.DARK]}>
      <Container>
        <Header />
        <Routes>
          {mapRoutes(mappableRoutes)}
          {mapRoutes(mappableUtilRoutes)}
        </Routes>
      </Container>

    </ThemeProvider>
  );
});
