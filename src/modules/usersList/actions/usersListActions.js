import axios from 'axios';

export const GET_USERS_LIST = 'GET_USERS_LIST';
export const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
export const GET_USERS_LIST_FAILURE = 'GET_USERS_LIST_FAILURE';

const getUsersList = () => ({
  type: GET_USERS_LIST,
});

const getUsersListSuccess = (usersList) => ({
  type: GET_USERS_LIST_SUCCESS,
  payload: usersList,
});

const getUsersListFailure = () => ({
  type: GET_USERS_LIST_FAILURE,
});

export const fetchUsersList = () => {
  return async (dispatch) => {
    dispatch(getUsersList());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = await response.data;
      dispatch(getUsersListSuccess(data));
    } catch (error) {
      dispatch(getUsersListFailure());
    }
  };
};
