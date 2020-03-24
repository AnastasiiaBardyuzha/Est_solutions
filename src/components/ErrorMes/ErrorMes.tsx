import React, { FC } from 'react';
import { connect } from 'react-redux';
import { setHasErrorMes } from '../../redux/actionCreators';
import './ErrorMes.css';

interface Methods {
  changeErrorMes: (status: boolean) => void;
}

export const ErrorMesTemp: FC<Methods> = ({ changeErrorMes }) => (
  <div className="error_wrapper">
    <div className="alert alert-secondary" role="alert">
      The username or password you entered is incorrect
      <div className="alert_btn">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => changeErrorMes(false)}
        >
            Ок
        </button>
      </div>
    </div>
  </div>
);


const mapDispatchToProps = {
  changeErrorMes: setHasErrorMes,
};

export const ErrorMes = connect(
  null,
  mapDispatchToProps,
)(ErrorMesTemp);
