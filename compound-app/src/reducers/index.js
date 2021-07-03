import { combineReducers } from 'redux';

import { postsReducer } from '../modules/postsList/reducers/postsReducer';
import { todoReducer } from '../modules/todo/reducers/todoReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  todo: todoReducer,
});
