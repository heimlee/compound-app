import {
  GET_USER_ALBUMS,
  GET_USER_ALBUMS_SUCCESS,
  GET_USER_ALBUMS_FAILURE
} from '../actions/userAlbumsActions';

const initialState = {
  loading: false,
  hasErrors: false,
  userAlbums: [],
};

export const userAlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ALBUMS:
      return { ...state, loading: true };
    case GET_USER_ALBUMS_SUCCESS:
      return { userAlbums: action.payload, loading: false, hasErrors: false };
    case GET_USER_ALBUMS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
