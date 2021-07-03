import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTodoList } from '../../actions/todoListActions';
import { TodoItem } from '../todoItem/TodoItem';

import './todoList.scss';

export const TodoList = () => {
  const todos = useSelector(state => state.todoList.todoList);
  const loading = useSelector(state => state.todoList.loading);
  const hasError = useSelector(state => state.todoList.hasError);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);


  const renderTodoList = () => {
    if (loading) {
      return <p>Loading todo list...</p>;
    } else if (hasError) {
      return <p>Unable to display todo list.</p>;
    } else {
      return todos.map(todo => <TodoItem key={todo.id} todo={todo} isComplete={todo.completed} />);
    }
  };

  return (
    <section className="todo-list">
      {renderTodoList()}
    </section>
  );
};
