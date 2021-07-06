import {
  GET_USER_POSTS,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAILURE
} from '../actions/userPostsActions';

const initialState = {
  loading: false,
  hasErrors: false,
  userPosts: [],
};

export const userPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_POSTS:
      return { ...state, loading: true };
    case GET_USER_POSTS_SUCCESS:
      return { userPosts: action.payload, loading: false, hasErrors: false };
    case GET_USER_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
