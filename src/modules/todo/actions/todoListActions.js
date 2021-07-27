import axios from 'axios';

export const GET_TODO_LIST = 'GET_TODOS';
export const GET_TODO_LIST_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODO_LIST_FAILURE = 'GET_TODOS_FAILURE';

const getTodoList = () => ({
  type: GET_TODO_LIST
});

const getTodoListSuccess = (todoList) => ({
  type: GET_TODO_LIST_SUCCESS,
  payload: todoList,
});

const getTodoListFailure = () => ({
  type: GET_TODO_LIST_FAILURE
});

export const fetchTodoList = () => {
  return async (dispatch) => {
    dispatch(getTodoList());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const data = await response.data;
      dispatch(getTodoListSuccess(data));
    } catch (error) {
      dispatch(getTodoListFailure());
    }
  };
};
