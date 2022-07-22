import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import GlobalStyles from './utils/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
