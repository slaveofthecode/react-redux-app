import { configureStore } from '@reduxjs/toolkit';
import todosStore from './stores/todos';

export const store = configureStore({
  reducer: {
    todos: todosStore
  }
});
