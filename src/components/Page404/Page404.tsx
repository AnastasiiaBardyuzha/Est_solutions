import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import './Page404.css';

export const Page404: FC = () => {
  const history = useHistory();

  return (
    <div className="page404_wrapper">
      <div className="page404_content">
        <span className="page404_title">
          404. Page Not Found.
        </span>
        <div className="page404_text">
          <span>
            There is a lot of reasons why this page is 404.
             Do not waste your time enjoying the look of it.
          </span>
          <br />
          <span>
            You could return to the homepage or search using the search box below.
          </span>
        </div>
        <div className="page404_btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.push('/')}
          >
          Take me home
          </button>
        </div>
      </div>
    </div>
  );
};
