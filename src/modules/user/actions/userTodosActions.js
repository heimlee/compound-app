import axios from 'axios';

export const GET_USER_TODOS = 'GET_USER_TODOS';
export const GET_USER_TODOS_SUCCESS = 'GET_USER_TODOS_SUCCESS';
export const GET_USER_TODOS_FAILURE = 'GET_USER_TODOS_FAILURE';

const getUserTodos = () => ({
  type: GET_USER_TODOS,
});

const getUserTodosSuccess = (albums) => ({
  type: GET_USER_TODOS_SUCCESS,
  payload: albums,
});

const getUserTodosFailure = () => ({
  type: GET_USER_TODOS_FAILURE,
});

export const fetchUserTodos = (userID) => {
  return async (dispatch) => {
    dispatch(getUserTodos());
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}/todos`);
      const data = await response.data;
      dispatch(getUserTodosSuccess(data));
    } catch (err) {
      dispatch(getUserTodosFailure());
    }
  }
};
