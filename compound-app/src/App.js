import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Nav } from './modules/nav/Nav';
import { Home } from './modules/home/Home';
import { PostsList } from './modules/postsList/PostsList';
import { Todo } from './modules/todo/Todo';

import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsList} />
        <Route exact path="/todo" component={Todo} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
