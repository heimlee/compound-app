export const GET_USER_ALBUMS = 'GET_USER_ALBUMS';
export const GET_USER_ALBUMS_SUCCESS = 'GET_USER_ALBUMS_SUCCESS';
export const GET_USER_ALBUMS_FAILURE = 'GET_USER_ALBUMS_FAILURE';

const getUserAlbums = () => ({
  type: GET_USER_ALBUMS,
});

const getUserAlbumsSuccess = (albums) => ({
  type: GET_USER_ALBUMS_SUCCESS,
  payload: albums,
});

const getUserAlbumsFailure = () => ({
  type: GET_USER_ALBUMS_FAILURE,
});

export const fetchUserAlbums = (userID) => {
  return async (dispatch) => {
    dispatch(getUserAlbums());
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}/albums`);
      const data = await response.json();
      dispatch(getUserAlbumsSuccess(data));
    } catch (err) {
      dispatch(getUserAlbumsFailure());
    }
  }
};
