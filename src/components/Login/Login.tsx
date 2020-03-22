import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  setUserName,
  setUserPassword,
  setIsLogged,
} from '../../redux/actionCreators';
import { State } from '../../redux/store';

import './Login.css';

interface StateProps {
  isLogged: boolean;
  enteredUserName: string;
  enteredPassword: string | number;
  userName: string;
  password: string | number;
}

interface Methods {
  changeIsLogged: (status: boolean) => void;
  handledUserName: (name: string) => void;
  handledPasswrd: (password: string | number) => void;
}

type Props = StateProps & Methods;

export const LoginTemplate: FC<Props> = ({
  isLogged,
  enteredUserName,
  enteredPassword,
  userName,
  password,
  changeIsLogged,
  handledUserName,
  handledPasswrd,
}) => {
  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: name } = event.target;

    handledUserName(name);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: pas } = event.target;

    handledPasswrd(+pas);
  };

  const chackedLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    changeIsLogged(true);
    console.log(isLogged);
    console.log(event.target);

  };

  console.log(isLogged);
  // console.log(enteredUserName);
  // console.log(enteredPassword);
  console.log(userName);
  console.log(password);

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
              value={enteredPassword}
              onChange={handleChangePassword}
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary"
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
  enteredUserName: state.enteredUserName,
  enteredPassword: state.enteredPassword,
  userName: state.userName,
  password: state.password,
});

const mapDispatchToProps = {
  changeIsLogged: setIsLogged,
  handledUserName: setUserName,
  handledPasswrd: setUserPassword,
};


export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginTemplate);
