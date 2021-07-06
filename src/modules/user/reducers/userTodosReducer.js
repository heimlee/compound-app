import {
  GET_USER_TODOS,
  GET_USER_TODOS_SUCCESS,
  GET_USER_TODOS_FAILURE
} from '../actions/userTodosActions';

const initialState = {
  loading: false,
  hasErrors: false,
  userTodos: [],
};

export const userTodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_TODOS:
      return { ...state, loading: true };
    case GET_USER_TODOS_SUCCESS:
      return { userTodos: action.payload, loading: false, hasErrors: false };
    case GET_USER_TODOS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
