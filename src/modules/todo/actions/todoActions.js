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
  return async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
          userId: 1,
          id: (new Date()).getTime(),
          title: title,
          completed: false
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      dispatch(addTask(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchRemoveTask = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
      dispatch(removeTask(id));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCompletedTask = (id, completed) => {
  return async (dispatch) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          completed
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      dispatch(completedTask(id, completed));
    } catch (err) {
      console.log(err);
    }
  };
};
