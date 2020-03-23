import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
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
import { setIsLogged } from '../../redux/actionCreators';

interface StateProps {
  isLogged: boolean;
  changeIsLogged: (status: boolean) => void;
}

export const SubscriptionTemplate: FC<StateProps> = ({ isLogged, changeIsLogged }) => {
  useEffect(() => {
    const data = localStorage.getItem('isLogged');

    if (data) {
      changeIsLogged(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  });

  return (
    <>
      <Router basename="/Est_solutions">
        <Nav />
        <main className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" exact component={NewsList} />
            <Route path="/login" exact render={() => (!isLogged ? <Login /> : <Redirect to="/profile" />)} />
            <Route path="/profile" exact render={() => (isLogged ? <Profile /> : <Redirect to="/login" />)} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = {
  changeIsLogged: setIsLogged,
};


export const Subscription = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscriptionTemplate);
