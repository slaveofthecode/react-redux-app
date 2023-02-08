import { configureStore } from '@reduxjs/toolkit';
import todosStore from './stores/todos';

export default configureStore({
  reducer: {
    todos: todosStore
  }
});
