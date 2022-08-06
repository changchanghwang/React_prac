import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number += 1;
    },

    minusNumber: (state, action) => {
      state.number -= 1;
    },
  },
});

export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;
