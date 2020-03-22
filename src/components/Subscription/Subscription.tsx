import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Home } from '../Home/Home';
import { NewsList } from '../NewsList/NewsList';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { State } from '../../redux/store';

interface StateProps {
  isLogged: boolean;
}

type Props = StateProps;

export const SubscriptionTemplate: FC<Props> = ({ isLogged }) => (
  <>
    <Router>
      <Nav />
      <main className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={NewsList} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact render={() => (isLogged ? Profile : <Redirect to="/login" />)} />
        </Switch>
      </main>
    </Router>
  </>
);

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
});


export const Subscription = connect(
  mapStateToProps,
)(SubscriptionTemplate);
