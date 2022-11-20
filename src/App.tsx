import React, { memo, useEffect, useLayoutEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapRoutes, mappableUtilRoutes, mappableRoutes } from './utils/routes';
import { useAppDispatch, useAppSelector } from './utils/hooks/reduxHooks';
import { isCheckingAuth as _isCheckingAuth, checkAuth } from './store/slices/userAuthSlice';
import { Loading } from './ui/pages/Loading';
import { currentTheme as _currentTheme } from './store/slices/themeSlice';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Animations } from './ui/animations/global';

import 'react-toastify/dist/ReactToastify.css';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const App: React.FC<{}> = memo(() => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(_currentTheme);
  const isCheckingAuth = useAppSelector(_isCheckingAuth);
  const location = useLocation();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return isCheckingAuth ? (
    <Loading width="100vw" height="100vh" />
  ) : (
    <>
      <Animations />
      <ThemeProvider theme={currentTheme}>
        <Routes>
          {mapRoutes(mappableRoutes)}
          {mapRoutes(mappableUtilRoutes)}
        </Routes>
        <div id="cart-mobile"></div>
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
