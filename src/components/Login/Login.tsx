import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import {
  setUserName,
  setPassword,
  setIsLogged,
  setHasErrorMes,
} from '../../redux/actionCreators';
import { passRegExp, loginRex } from '../../lib/constants';
import { validation } from '../../lib/helpers';
import { ErrorMes } from '../ErrorMes/ErrorMes';
import { State } from '../../redux/store';
import './Login.css';

interface StateProps {
  hasErrorMes: boolean;
  userName: string;
  password: string;
}

interface Methods {
  changeIsLogged: (status: boolean) => void;
  changeErrorMes: (status: boolean) => void;
  handleUserName: (name: string) => void;
  handlePasswrd: (password: string) => void;
}

type Props = StateProps & Methods;

export const LoginTemplate: FC<Props> = ({
  userName,
  password,
  hasErrorMes,
  changeIsLogged,
  changeErrorMes,
  handleUserName,
  handlePasswrd,
}) => {
  const [userError, setUserError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: name } = event.target;

    setUserError(false);
    handleUserName(name.replace(/\s/, ''));
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: pas } = event.target;

    setPassError(false);
    handlePasswrd(pas.replace(/\s/, ''));
  };

  const chackedLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === '12345' && userName === 'admin') {
      changeIsLogged(true);
      handleUserName('');
      handlePasswrd('');
    } else {
      changeErrorMes(true);
    }
  };

  if (hasErrorMes) {
    return <ErrorMes />;
  }

  return (
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
            value={userName}
            onChange={handleChangeLogin}
            onBlur={() => {
              validation(loginRex, userName, setUserError);
            }}
          />
        </label>
        <div className={`valid_user ${!userError ? 'hidden' : ''}`}>
          <span>
            Characters: letters of any case, numbers and  _. Length: 3 - 10
          </span>
        </div>
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
            value={password}
            onBlur={() => {
              validation(passRegExp, password, setPassError);
            }}
            onChange={handleChangePassword}
          />
        </label>
        <div className={`valid_pass ${!passError ? 'hidden' : ''}`}>
          <span>
            Characters: letters of any case, numbers and special characters.
              Length: 3 - 12
          </span>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn_form"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  hasErrorMes: state.hasErrorMes,
  userName: state.userName,
  password: state.password,
});

const mapDispatchToProps = {
  changeIsLogged: setIsLogged,
  handleUserName: setUserName,
  handlePasswrd: setPassword,
  changeErrorMes: setHasErrorMes,
};


export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginTemplate);
