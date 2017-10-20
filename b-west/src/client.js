import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';

/* eslint-disable */
// eslint-disable-line no-undef
const globalState = ___STATE___
const globalAllState = ___allData___
/* eslint-enable */

hydrate(
  <BrowserRouter>
    <App appData={globalState} allData={globalAllState}/>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}