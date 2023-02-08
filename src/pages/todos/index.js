import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../../redux/stores/todos';

const Todos = () => {
  const dispatch = useDispatch();
  const { list: listTodos } = useSelector((state) => state.todos);

  const handleClick = (todoId) => {
    dispatch(
      toggleTodo({
        id: todoId
      })
    );
  };

  return (
    <div>
      <ul>
        {listTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                className="cursor-pointer"
                onClick={() => handleClick(todo.id)}
              >
                {todo.completed ? (
                  <i className="bi bi-bookmark-check"></i>
                ) : (
                  <i className="bi bi-bookmark"></i>
                )}
              </span>
              <span
                className={`mx-2' ${
                  todo.completed ? 'text-decoration-line-through' : ''
                }`}
              >
                {todo.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
