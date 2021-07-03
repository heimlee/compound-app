import React from 'react';

import { TodoInput } from './components/todoInput/TodoInput';
import { TodoList } from './components/todoList/TodoList';

import './todo.scss';

export const Todo = () => (
  <div className="todo-wrapper">
    <h2 className="title">Todo List</h2>
    <TodoInput />
    <TodoList />
  </div>
);
