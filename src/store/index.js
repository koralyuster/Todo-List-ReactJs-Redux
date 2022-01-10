import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './TaskSlics';

const store = configureStore({
  reducer: { tasks: taskSlice.reducer }
})

export default store;