import React from 'react';
import { Link } from 'react-router-dom';

import { HomeTitle } from './components/homeTitle/HomeTitle';
import { HomeDescription } from './components/homeDescription/HomeDescription';

import './home.scss';

export const Home = () => (
  <main className="home-page-container">
    <div className="home-page-wrapper">
      <HomeTitle />
      <HomeDescription />
      <div>
        <Link to="/posts" className="button">View Posts</Link>
        <Link to="/users" className="button">View Users</Link>
        <Link to="/todo" className="button">Todo List</Link>
      </div>
    </div>
  </main>
);
