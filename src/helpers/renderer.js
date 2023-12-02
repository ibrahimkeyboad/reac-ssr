import React from 'react';

import { renderToString } from 'react-dom/server';
import Routes from '../client/routes';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';

export default (req, store) => {
  const content = renderToString(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </StaticRouter>
  );
  return `
    <html>
      <head>
      </head>
      <body>
      <div id='root'>${content}</div>
      <script>
        window.INITIAL_STATE= ${JSON.stringify(store.getState())}
      </script>
      <script src='bundle.js'></script>
      </body>
    </html>`;
};
