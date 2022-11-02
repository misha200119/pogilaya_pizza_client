import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import GlobalStyles from './utils/styles/global';
import { store } from './store';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@ant-design/flowchart/dist/index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
