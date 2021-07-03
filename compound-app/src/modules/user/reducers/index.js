import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { userAlbumsReducer } from './userAlbumsReducer';
import { userTodosReducer } from './userTodosReducer';
import { userPostsReducer } from './userPostsReducer';

export const userSingleReducer = combineReducers({
  userSingle: userReducer,
  userAlbums: userAlbumsReducer,
  userTodos: userTodosReducer,
  userPosts: userPostsReducer,
});
