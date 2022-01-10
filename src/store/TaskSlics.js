import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: [{ id: 1, title: 'ss', description: '' }],
  reducers: {
    addNewTask(state, action) {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description
      }
      state.push(newTodo);
    },
  }
});

export const taskActions = taskSlice.actions;

export default taskSlice;