import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetPost } from './actions/postActions';
import { PostSingle } from './components/postSingle/PostSingle';

export const Post = ({ match }) => {
  const post = useSelector(state => state.post.post);
  const loading = useSelector(state => state.post.loading);
  const hasErrors = useSelector(state => state.post.hasErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchGetPost(id));
  }, [dispatch, match]);

  const renderPost = () => {
    if (loading) {
      return <p>Loading post...</p>;
    } else if (hasErrors) {
      return <p>Unable to display post.</p>;
    } else {
      return <PostSingle key={post.id} post={post} />;
    }
  };

  return (
    <section>
      {renderPost()}
    </section>
  );
};
