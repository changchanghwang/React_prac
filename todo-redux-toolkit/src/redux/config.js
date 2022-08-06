import { configureStore } from '@reduxjs/toolkit';
import counter from '.';

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
