import React, { memo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { mapRoutes, mappableUtilRoutes, mappableRoutes } from './utils/routes';
import { useAppDispatch, useAppSelector } from './utils/hooks/reduxHooks';
import { isCheckingAuth as _isCheckingAuth, checkAuth } from './store/slices/userAuthSlice';

import 'react-toastify/dist/ReactToastify.css';
import { currentTheme as _currentTheme } from './store/slices/themeSlice';
import { Loading } from './ui/pages/Loading';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const App: React.FC<{}> = memo(() => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(_currentTheme);
  const isCheckingAuth = useAppSelector(_isCheckingAuth);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return isCheckingAuth ? (
    <Loading width="100vw" height="100vh" />
  ) : (
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
