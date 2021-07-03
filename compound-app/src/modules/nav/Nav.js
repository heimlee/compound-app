import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

export const Nav = () => (
  <nav className="nav-sticky">
    <section className="nav-wrapper">
      <Link to="/" className="link">Home</Link>
      <Link to="/posts" className="link">Posts</Link>
      <Link to="/users" className="link">Users</Link>
      <Link to="/todo" className="link">Todo</Link>
    </section>
  </nav>
);
