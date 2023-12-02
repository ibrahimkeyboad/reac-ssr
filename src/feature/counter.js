import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },

  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
  },
});

export const { decrease, increase } = counterSlice.actions;

export default counterSlice.reducer;
