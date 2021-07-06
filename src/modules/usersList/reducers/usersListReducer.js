import { GET_USERS_LIST, GET_USERS_LIST_SUCCESS, GET_USERS_LIST_FAILURE } from '../actions/usersListActions';

const initialState = {
  loading: false,
  hasErrors: false,
  usersList: [],
};

export const usersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return { ...state, loading: true };
    case GET_USERS_LIST_SUCCESS:
      return { usersList: action.payload, loading: false, hasErrors: false };
    case GET_USERS_LIST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
