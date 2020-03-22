import React, { FC } from 'react';
import './Login.css';

export const Login: FC = () => (
  <div className="login_wrapper">
    <form>
      <label htmlFor="inputUserName" className="col-form-label input-size">
            Username
        <input type="text" id="inputUserName" className="form-control " />
      </label>
      <label htmlFor="inputPassword" className="col-form-label input-size">
          Password
        <input type="password" id="inputPassword" className="form-control" />
      </label>
    </form>
  </div>

);
