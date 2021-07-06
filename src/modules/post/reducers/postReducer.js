import { GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE } from '../actions/postActions';

const initialState = {
  loading: false,
  hasError: false,
  post: {},
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, loading: true };
    case GET_POST_SUCCESS:
      return { post: action.payload, loading: false, hasError: false };
    case GET_POST_FAILURE:
      return { ...state, loading: false, hasError: true };
    default:
      return state;
  }
};
