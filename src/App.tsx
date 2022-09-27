import React, { memo } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './ui/components/organisms/Header';
import { mapRoutes, mappableUtilRoutes, mappableRoutes } from './utils/routes';
import Footer from './ui/components/organisms/Footer';
import { useAppSelector } from './utils/hooks/reduxHooks';

import 'react-toastify/dist/ReactToastify.css';
import { currentTheme as _currentTheme } from './store/slices/themeSlice';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const App: React.FC<{}> = memo(() => {
  const currentTheme = useAppSelector(_currentTheme);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Header />
        <Routes>
          {mapRoutes(mappableRoutes)}
          {mapRoutes(mappableUtilRoutes)}
        </Routes>
        <Footer />
      </ThemeProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
});
