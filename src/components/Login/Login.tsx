import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  setUserName,
  setUserPassword,
  setIsLogged,
  setHasErrorMes,
} from '../../redux/actionCreators';
import { ErrorMes } from '../ErrorMes/ErrorMes';
import { State } from '../../redux/store';

import './Login.css';

interface StateProps {
  isLogged: boolean;
  hasErrorMes: boolean;
  enteredUserName: string;
  enteredPassword: string | number;
  userName: string;
  password: string | number;
}

interface Methods {
  changeIsLogged: (status: boolean) => void;
  changeErrorMes: (status: boolean) => void;
  handledUserName: (name: string) => void;
  handledPasswrd: (password: string | number) => void;
}

type Props = StateProps & Methods;

export const LoginTemplate: FC<Props> = ({
  enteredUserName,
  enteredPassword,
  hasErrorMes,
  userName,
  password,
  changeIsLogged,
  changeErrorMes,
  handledUserName,
  handledPasswrd,
}) => {
  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: name } = event.target;

    handledUserName(name.replace(/\s/, ''));
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: pas } = event.target;

    handledPasswrd(pas.replace(/\s/, ''));
  };

  const chackedLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === enteredPassword && userName === enteredUserName) {
      changeIsLogged(true);
    } else {
      changeErrorMes(true);
    }
  };

  if (hasErrorMes) {
    return <ErrorMes />;
  }

  return (
    <>
      <div className="login_wrapper">
        <form onSubmit={chackedLogin}>
          <label
            htmlFor="inputUserName"
            className="col-form-label input-size"
          >
            Username
            <input
              type="text"
              id="inputUserName"
              className="form-control"
              required
              value={enteredUserName}
              onChange={handleChangeLogin}
            />
          </label>
          <label
            htmlFor="inputPassword"
            className="col-form-label input-size"
          >
            Password
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              required
              value={enteredPassword}
              onChange={handleChangePassword}
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary btn_form"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
  hasErrorMes: state.hasErrorMes,
  enteredUserName: state.enteredUserName,
  enteredPassword: state.enteredPassword,
  userName: state.userName,
  password: state.password,
});

const mapDispatchToProps = {
  changeIsLogged: setIsLogged,
  handledUserName: setUserName,
  handledPasswrd: setUserPassword,
  changeErrorMes: setHasErrorMes,
};


export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginTemplate);
