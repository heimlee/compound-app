import React from 'react';

import './postSingle.scss';

export const PostSingle = ({ post }) => (
  <div className="post-single-wrapper">
    <h3 className="post-single-title">{post.title}</h3>
    <div className="post-single-body">{post.body}</div>
  </div>
);
