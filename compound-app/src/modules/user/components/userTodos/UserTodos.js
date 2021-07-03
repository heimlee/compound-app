import React from 'react';

import './userTodos.scss';

export const UserTodos = ({ todo }) => (
  <div className="user-todo-item">
    <span className={todo.completed ? 'mark check-circle' : 'mark circle'}></span>
    <span className={todo.completed ? 'completed text' : 'text'} >{todo.title}</span>
  </div>
);
