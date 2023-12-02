import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Counter from '../pages/Counter';

import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </Provider>
  );
};
