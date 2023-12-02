import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

hydrateRoot(
  document.getElementById('root'),

  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
