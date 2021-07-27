import axios from 'axios';

export const GET_USER_POSTS = 'GET_USER_POSTS';
export const GET_USER_POSTS_SUCCESS = 'GET_USER_POSTS_SUCCESS';
export const GET_USER_POSTS_FAILURE = 'GET_USER_POSTS_FAILURE';

const getUserPosts = () => ({
  type: GET_USER_POSTS,
});

const getUserPostsSuccess = (albums) => ({
  type: GET_USER_POSTS_SUCCESS,
  payload: albums,
});

const getUserPostsFailure = () => ({
  type: GET_USER_POSTS_FAILURE,
});

export const fetchUserPosts = (userID) => {
  return async (dispatch) => {
    dispatch(getUserPosts());
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}/posts`);
      const data = await response.data;
      dispatch(getUserPostsSuccess(data));
    } catch (err) {
      dispatch(getUserPostsFailure());
    }
  }
};
