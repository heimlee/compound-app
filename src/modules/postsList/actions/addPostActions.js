export const ADD_POST = 'ADD_POST';

const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const fetchAddPost = (title, body) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          userId: 1,
          id: (new Date()).getTime(),
          title: title,
          body: body,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      dispatch(addPost(data));
    } catch (err) {
      console.log(err);
    }
  };
};
