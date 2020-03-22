import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => (
  <nav>
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
            Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/news" className="nav-link">
            News
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/profile" className="nav-link">
            Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
            Login
        </NavLink>
      </li>
      <button type="button" className="btn btn-outline-primary">Sign Out</button>
    </ul>
  </nav>
);
