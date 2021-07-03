import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from '../actions/userActions';

const initialState = {
  loading: false,
  hasErrors: false,
  userSingle: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { userSingle: [action.payload], loading: false, hasErrors: false };
    case GET_USER_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
