import React, { FC } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { State } from '../../redux/store';

interface StateProps {
  isLogged: boolean;
}

export const NavTemplate: FC<StateProps> = ({ isLogged }) => (
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
      {
        !isLogged && (
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
                Login
            </NavLink>
          </li>
        )
      }
    </ul>
  </nav>
);

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
});

export const Nav = connect(
  mapStateToProps,
)(NavTemplate);
