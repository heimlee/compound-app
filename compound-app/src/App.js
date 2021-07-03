import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Nav } from './modules/nav/Nav';
import { Home } from './modules/home/Home';
import { Todo } from './modules/todo/Todo';

import './App.scss';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
