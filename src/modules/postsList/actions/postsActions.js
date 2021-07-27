import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

const getPosts = () => ({
  type: GET_POSTS,
});

const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPosts());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = await response.data;
      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
};
