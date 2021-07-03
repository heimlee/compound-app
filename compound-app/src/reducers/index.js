import { combineReducers } from 'redux';

import { todoReducer } from '../modules/todo/reducers/todoReducer';

export const rootReducer = combineReducers({
  todoList: todoReducer,
});
