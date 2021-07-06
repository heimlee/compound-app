import React from 'react';
import { Link } from 'react-router-dom';

import './posts.scss';

export const Post = ({ post, excerpt }) => (
  <Link to={`./posts/${post.id}`} className="post-wrapper">
    <h3 className="post-title">{post.title}</h3>
    <div className="post-body">{excerpt ? post.body.substring(0, 100) + '...' : post.body}</div>
  </Link>
);
