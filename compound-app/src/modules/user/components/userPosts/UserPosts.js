import React from 'react';

import './userPosts.scss';

export const UserPosts = ({ post }) => (
  <div className="post-single-wrapper user-post">
    <div className="post-single-title">{post.title}</div>
    <div className="post-single-body">{post.body}</div>
  </div>
);
