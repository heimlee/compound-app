import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const ADD_TASK = 'ADD_TASK';
export const COMPLETED_TASK = 'COMPLETED_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

const completedTask = (id, completed) => ({
  type: COMPLETED_TASK,
  payload: {
    id,
    completed,
  },
});

export const fetchAddTask = (title) => {
  return (dispatch) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      userId: 1,
      id: uuidv4(),
      title: title,
      completed: false,
    })
    .then((response) => {
      dispatch(addTask(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export const fetchRemoveTask = (id) => {
  return (dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      id: id,
    }).then((response) => {
      dispatch(removeTask(id));
    }).catch((error) => {
      console.log(error);
    });
  };
};

export const fetchCompletedTask = (id, completed) => {
  return (dispatch) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      id: id,
      completed: completed,
    }).then(() => {
      dispatch(completedTask(id, completed));
    }).catch((error) => {
      console.log(error);
    })
  };
};
