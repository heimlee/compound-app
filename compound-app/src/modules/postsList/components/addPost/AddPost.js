import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import { fetchAddPost } from '../../actions/addPostActions';

import './addPost.scss';

export const AddPost = () => {
  const dispatch = useDispatch();
  
  const initialValues = {
    title: '',
    body: '',
  };

  const onSubmit = (value, action) => {
    if (value.title && value.body) {
      dispatch(fetchAddPost(value.title, value.body));
      action.resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className="new-post-wrapper">
        <div className="add-post-content">
          <h2 className="title-new-post">Add Post</h2>
          <label htmlFor="title">Title</label>
          <Field 
            type="text"
            id="title"
            name="title"
            placeholder="Title post..."
            className="add-post-title-field"
          />

          <label htmlFor="body">Body</label>
          <Field 
            as="textarea"
            id="body"
            name="body"
            placeholder="Body post..."
            className="add-post-body-field"
          />

          <button type="submit" className="add-post-button">Add Post</button>
        </div>
      </Form>
    </Formik>
  );
};
