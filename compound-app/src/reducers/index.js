import { combineReducers } from 'redux';

import { postReducer } from '../modules/post/reducers/postReducer';
import { postsReducer } from '../modules/postsList/reducers/postsReducer';
import { todoReducer } from '../modules/todo/reducers/todoReducer';

export const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  todo: todoReducer,
});
