import { combineReducers } from 'redux';

import { postReducer } from '../modules/post/reducers/postReducer';
import { postsReducer } from '../modules/postsList/reducers/postsReducer';
import { userSingleReducer } from '../modules/user/reducers/index';
import { usersListReducer } from '../modules/usersList/reducers/usersListReducer';
import { todoReducer } from '../modules/todo/reducers/todoReducer';

export const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  user: userSingleReducer,
  usersList: usersListReducer,
  todo: todoReducer,
});
