import React, { FC } from 'react';
import { connect } from 'react-redux';

import './Profile.css';
import { State } from '../../redux/store';
import { setIsLogged } from '../../redux/actionCreators';

interface StateProps {
  isLogged: boolean;
  changeIsLogged: (status: boolean) => void;
}

export const ProfileTemplate: FC<StateProps> = ({ isLogged, changeIsLogged }) => (
  <>
    {
      isLogged && (
        <div className="profile_wrapper">
          <h1 className="profile_title">Some text</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Recusandae eveniet quo quam,
          dolores autem omnis obcaecati porro eligendi vitae officiis?
          Odit molestiae dolorum obcaecati dolore, id doloribus et rerum eos!
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Recusandae eveniet quo quam,
          dolores autem omnis obcaecati porro eligendi vitae officiis?
          Odit molestiae dolorum obcaecati dolore, id doloribus et rerum eos!
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Recusandae eveniet quo quam,
          dolores autem omnis obcaecati porro eligendi vitae officiis?
          Odit molestiae dolorum obcaecati dolore, id doloribus et rerum eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Recusandae eveniet quo quam,
          dolores autem omnis obcaecati porro eligendi vitae officiis?
          Odit molestiae dolorum obcaecati dolore, id doloribus et rerum eos!
          </p>
          <p>
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Recusandae eveniet quo quam,
          dolores autem omnis obcaecati porro eligendi vitae officiis?
          Odit molestiae dolorum obcaecati dolore, id doloribus et rerum eos!
          </p>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => changeIsLogged(false)}
          >
            Sign Out
          </button>
        </div>
      )
    }
  </>
);

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = {
  changeIsLogged: setIsLogged,
};

export const Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileTemplate);
