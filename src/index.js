import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './Routes'; // where we are going to specify our routes


ReactDOM.render(
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);

