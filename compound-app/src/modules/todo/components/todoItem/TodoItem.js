import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchCompletedTask, fetchRemoveTask } from '../../actions/todoActions';

import './todoItem.scss';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      <span onClick={() => dispatch(fetchCompletedTask(todo.id, todo.completed))} className={todo.completed ? 'mark check-circle' : 'mark circle'} ></span>
      <span onClick={() => dispatch(fetchCompletedTask(todo.id, todo.completed))} className={todo.completed ? 'completed text' : 'text'}>{todo.title}</span>
      <span onClick={() => dispatch(fetchRemoveTask(todo.id))} className="delete-task">X</span>
    </div>
  );
};
