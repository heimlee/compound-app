import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUser } from './actions/userActions';
import { fetchUserAlbums } from './actions/userAlbumsActions';
import { fetchUserPosts } from './actions/userPostsActions';
import { fetchUserTodos } from './actions/userTodosActions';
import { UserSingle } from './components/userSingle/UserSingle';
import { UserDetails } from './components/userDetails/UserDetails';
import { UserTab } from './components/userTab/UserTab';
import { UserAlbums } from './components/userAlbums/UserAlbums';
import { UserTodos } from './components/userTodos/UserTodos';
import { UserPosts } from './components/userPosts/UserPosts';

import './user.scss';

export const User = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchUser(id));
    dispatch(fetchUserAlbums(id));
    dispatch(fetchUserTodos(id));
    dispatch(fetchUserPosts(id));
  }, [dispatch, match]);

  const renderUser = () => {
    if (user.userSingle.userLoading) {
      return <p>Loading user...</p>;
    } else if (user.userSingle.userHasErrors) {
      return <p>Unable to display user.</p>;
    } else {
      return user.userSingle.userSingle.map(user => <UserSingle key={user.id} user={user} />);
    }
  };

  const renderUserAlbums = () => {
    if (user.userAlbums.userAlbumsLoading) {
      return <p>Loading albums...</p>;
    } else if (user.userAlbums.userAlbumsHasErrors) {
      <p>Unable to display albums.</p>
    } else {
      return user.userAlbums.userAlbums.map(album => <UserAlbums key={album.id} album={album} /> );
    }
  }

  const renderUserTodos = () => {
    if (user.userTodos.userTodosLoading) {
      return <p>Loading todo...</p>;
    } else if (user.userTodos.userTodosHasErrors) {
      <p>Unable to display todo.</p>
    } else {
      return user.userTodos.userTodos.map(todo => <UserTodos key={todo.id} todo={todo} completed={todo.completed} />)
    }
  }

  const renderUserPosts = () => {
    if (user.userPosts.userPostsLoading) {
      return <p>Loading posts...</p>;
    } else if (user.userPosts.userPostsHasErrors) {
      <p>Unable to display posts.</p>
    } else {
      return user.userPosts.userPosts.map(post => <UserPosts key={post.id} post={post} />);
    }
  }

  return (
    <section className="user-container">
      <div className="user-inner">
        {renderUser()}
        <UserDetails>
          <UserTab title="Albums">
            {renderUserAlbums()}
          </UserTab>
          <UserTab title="Todos">
            {renderUserTodos()}
          </UserTab>
          <UserTab title="Posts">
            {renderUserPosts()}
          </UserTab>
        </UserDetails>
      </div>
    </section>
  );
};
