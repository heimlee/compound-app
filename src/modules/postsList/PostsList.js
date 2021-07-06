import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from './actions/postsActions';
import { AddPost } from './components/addPost/AddPost';
import { Post } from './components/posts/Posts';

import './postsList.scss';

export const PostsList = () => {
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const hasErrors = useSelector(state => state.posts.hasErrors);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) {
      return <p>Loading posts...</p>;
    } else if (hasErrors) {
      return <p>Unable to display posts.</p>;
    } else {
      return posts.map(post => <Post key={post.id} post={post} excerpt />);
    }
  };

  return (
    <section className="post-list-container">
        {AddPost()}
      <div className="post-list-wrapper">
        <h1 className="post-list-title">Posts</h1>
        {renderPosts()}
      </div>
    </section>
  );
};
