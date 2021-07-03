import { ADD_TASK, REMOVE_TASK, COMPLETED_TASK } from '../actions/todoActions';
import { GET_TODO_LIST, GET_TODO_LIST_SUCCESS, GET_TODO_LIST_FAILURE } from '../actions/todoListActions';

const initialState = {
  loading: false,
  hasError: false,
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return { ...state, loading: true };
    case GET_TODO_LIST_SUCCESS:
      return { todoList: action.payload, loading: false, hasError: false };
    case GET_TODO_LIST_FAILURE:
      return { ...state, loading: false, hasError: true };
    case ADD_TASK:
      return { todoList: state.todoList.concat([action.payload]) };
    case REMOVE_TASK:
      return { todoList: state.todoList.filter(task => task.id !== action.payload) };
    case COMPLETED_TASK:
      return {
        todoList: state.todoList.map(task => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return { ...task, completed: !task.completed };
        })
      };
    default:
      return state;
  }
};
