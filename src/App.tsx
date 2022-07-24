import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from 'react-router-dom';
import { Themes, themes } from './ui/themes';
import Header from './ui/components/organisms/Header';
import { mapRoutes, mappableUtilRoutes, mappableRoutes } from './utils/routes';

export const App: React.FC<{}> = memo(() => {
  return (
    <ThemeProvider theme={themes[Themes.DARK]}>
      <Header />
      <Routes>
        {mapRoutes(mappableRoutes)}
        {mapRoutes(mappableUtilRoutes)}
      </Routes>
    </ThemeProvider>
  );
});
