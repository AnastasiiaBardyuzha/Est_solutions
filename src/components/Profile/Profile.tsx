import React, { FC } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { State } from '../../redux/store';

interface StateProps {
  isLogged: boolean;
}

export const ProfileTemplate: FC<StateProps> = ({ isLogged }) => (
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
        </div>
      )
    }
  </>
);

const mapStateToProps = (state: State) => ({
  isLogged: state.isLogged,
});


export const Profile = connect(
  mapStateToProps,
)(ProfileTemplate);
