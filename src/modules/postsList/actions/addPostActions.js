import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const ADD_POST = 'ADD_POST';

const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const fetchAddPost = (title, body) => {
  return (dispatch) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: 1,
      id: uuidv4(),
      title: title,
      body: body,
    })
    .then((response) => {
      dispatch(addPost(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
};
