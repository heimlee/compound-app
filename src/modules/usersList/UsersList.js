import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsersList } from './actions/usersListActions';
import { Users } from './components/users/Users';

import './usersList.scss';

export const UsersList = () => {
  const usersList = useSelector(state => state.usersList.usersList);
  const loading = useSelector(state => state.usersList.loading);
  const hasErrors = useSelector(state => state.usersList.hasErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

  const renderUsersList = () => {
    if (loading) { 
      return <p>Loading users list...</p>; 
    } else if (hasErrors) {
      return <p>Unable to display users.</p>;
    } else {
      return usersList.map(user => <Users key={user.id} user={user} />);
    } 
  };

  return (
    <section className="user-list-wrapper">
      <h1 className="user-list-title">Users</h1>
      {renderUsersList()}
    </section>
  );
};
