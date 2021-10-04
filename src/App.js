import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Nav } from './modules/nav/Nav';
import { Home } from './modules/home/Home';
import { PostsList } from './modules/postsList/PostsList';
import { Post } from './modules/post/Post';
import { UsersList } from './modules/usersList/UsersList';
import { User } from './modules/user/User';
import { Todo } from './modules/todo/Todo';

import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={PostsList} />
        <Route path="/users/:id" component={User} />
        <Route path="/users" component={UsersList} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
