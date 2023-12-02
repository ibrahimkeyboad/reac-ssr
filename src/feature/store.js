import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';

export default () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};
