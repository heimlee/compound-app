import React from 'react';
import { Link } from 'react-router-dom';

import './users.scss';

export const Users = ({ user }) => (
  <div className="users-wrapper">
    <div className="users-inner">
      <Link to={`./users/${user.id}`} className="user-name-link">
        {user.name}
      </Link>
      <div className="users-param">Username:</div><div>{user.username}</div>
      <Link to={`./users/${user.id}`} className="button-user-profile">
        View profile
      </Link>
    </div>
  </div>
);
