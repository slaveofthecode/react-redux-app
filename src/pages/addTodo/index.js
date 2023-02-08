/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/stores/todos';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../enums/routes';

const index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: ''
  });

  const handleOnChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    !!task.title && dispatch(addTodo(task)) && navigate(ROUTE.HOME);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="put here the tittle..."
          onChange={handleOnChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default index;
