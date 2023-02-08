import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true }
  ]
};

const reducers = {
  addTodo: (state, action) => {
    // This is the old way to add a new todo
    // const newTodo = {
    //   id: state.list.length + 1,
    //   title: action.payload.title,
    //   completed: false
    // };
    // return [...state.list, newTodo];

    // This is the new way to add a new todo
    state.list.push({
      id: state.list.length + 1,
      title: action.payload.title,
      completed: false
    });
  },
  toggleTodo: (state, action) => {
    // This is the old way to toggle a todo
    // return state.map((todo) => {
    //   if (todo.id === action.payload.id) {
    //     return {
    //       ...todo,
    //       completed: !todo.completed
    //     };
    //   }
    //   return todo;
    // });

    // This is the new way to toggle a todo
    const todo = state.list.find((todo) => todo.id === action.payload.id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  },
  removeTodo: (state, action) => {
    // This is the old way to remove a todo
    // return state.filter((todo) => todo.id !== action.payload.id);

    // This is the new way to remove a todo
    const index = state.list.findIndex((todo) => todo.id === action.payload.id);
    if (index !== -1) {
      state.list.splice(index, 1);
    }
  }
};

export const todosStore = createSlice({
  name: 'todos',
  initialState,
  reducers
});

export const { addTodo, removeTodo, toggleTodo, getAll } = todosStore.actions;

export default todosStore.reducer;
