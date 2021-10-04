import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

export const Nav = () => (
  <nav className="nav-sticky">
    <section className="nav-wrapper">
      <NavLink to="/" className="link" >Home</NavLink>
      <NavLink to="/posts" className="link">Posts</NavLink>
      <NavLink to="/users" className="link">Users</NavLink>
      <NavLink to="/todo" className="link">Todo</NavLink>
    </section>
  </nav>
);
