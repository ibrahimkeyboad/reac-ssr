import express from 'express';

import renderer from './helpers/renderer';

import createStore from './feature/store';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  res.send(renderer(req, store));
});

app.listen(3000, () => console.log('Server is listening on port 3000'));
