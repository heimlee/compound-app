import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

export const HomePage = () => (
  <main className="home-page-container">
    <div className="home-page-wrapper">
      <h1 className="home-page-title">Home page</h1>
      <p>This is the home page.</p>
      <div>
        <Link to="/posts" className="button">View Posts</Link>
        <Link to="/users" className="button">View Users</Link>
        <Link to="/todo" className="button">Todo List</Link>
      </div>
    </div>
  </main>
);
