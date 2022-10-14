import React, { memo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { mapRoutes, mappableUtilRoutes, mappableRoutes } from './utils/routes';
import { useAppDispatch, useAppSelector } from './utils/hooks/reduxHooks';

import 'react-toastify/dist/ReactToastify.css';
import { currentTheme as _currentTheme } from './store/slices/themeSlice';
import { checkAuth } from './store/slices/userAuthSlice';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const App: React.FC<{}> = memo(() => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(_currentTheme);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Routes>
          {mapRoutes(mappableRoutes)}
          {mapRoutes(mappableUtilRoutes)}
        </Routes>
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
