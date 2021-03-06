import { ADD_POST } from '../actions/addPostActions';
import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../actions/postsActions';

const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: true };
    case GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false };
    case GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case ADD_POST:
      return { posts: state.posts.concat([action.payload]) };
    default:
      return state;
  }
};
