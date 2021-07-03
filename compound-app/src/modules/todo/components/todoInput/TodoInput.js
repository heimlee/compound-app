import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAddTask } from '../../actions/todoActions';

import './todoInput.scss';

export const TodoInput = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const onTitleChange = (e) => setTitle(e.target.value);

  const onSaveTaskClicked = () => {
    if (title) {
      dispatch(fetchAddTask(title));
      setTitle('');
    }
  };

  return (
    <form className="todo-input-wrapper">
      <input 
        className="todo-input" 
        type="text" 
        placeholder="Write your task" 
        value={title} 
        onChange={onTitleChange} 
      />
      <button type="button" className="todo-input-button" onClick={onSaveTaskClicked}>Add</button>
    </form>
  );
};
