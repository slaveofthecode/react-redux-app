import { createSlice } from '@reduxjs/toolkit';

export const todosStore = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });
    },
    getAll: (state, action) => {
      return action.payload;
    }
  }
});

export const { addTodo, removeTodo, toggleTodo, getAll } = todosStore.actions;

export default todosStore.reducer;
