import axios from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

const getUser = () => ({
  type: GET_USER,
});

const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

const getUserFailure = () => ({
  type: GET_USER_FAILURE,
});

export const fetchUser = (id) => {
  return async (dispatch) => {
    dispatch(getUser());
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.data;
      dispatch(getUserSuccess(data));
    } catch (err) {
      dispatch(getUserFailure());
    }
  };
};
